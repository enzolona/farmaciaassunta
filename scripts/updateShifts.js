/**
 * Script per recuperare i turni di farmacie da AGEC
 * Esegui: node scripts/updateShifts.js
 * Aggiungi un cron job per eseguirlo automaticamente ogni lunedì
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Farmacie target vicino a Grezzana (tutte le province venete)
const TARGET_PHARMACIES = {
  'BACCHINI': 'Via Giuliari, 23 - 37134 Verona (VR)',
  'BENU': 'Via Mazzini, 11 - 37121 Verona (VR)',
  'BORGO ANTICO': 'Via Podgora, 16/b - 37127 Verona (VR)',
  'COMUNALE': 'Via Gidino, 2 - 37066 Sommacampagna (VR)',
  'AL POMO D\'ORO': 'Via Cavour, 66/68 - 37044 Cologna Veneta (VR)',
  'FRANCHINI': 'Via XX Settembre - Verona',
  'DELL\'OSPEDALE': 'Via Circonvallazione - Verona',
};

const PHONE_MAP = {
  'BACCHINI': '0458203790',
  'BENU': '0458766702',
  'BORGO ANTICO': '0458342470',
  'COMUNALE': '0458969201',
  'AL POMO D\'ORO': '0442850690',
};

function fetchAGEC() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'www.agec.it',
      path: '/IT/Agec-Farmacie/Farmacie-di-turno.html',
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parsePharmacy(text) {
  // Regex per estrarre nome farmacia, indirizzo, telefono
  const lines = text.split('\n').map(l => l.trim()).filter(l => l);
  const shifts = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Cerca pattern "Farmacia NOME"
    const nameMatch = line.match(/Farmacia\s+([A-Z\s\d'\.]+?)(?:Via|Tel\.|$)/);
    if (nameMatch) {
      const name = nameMatch[1].trim();
      
      // Cerca indirizzo (Via, Piazza, Viale, etc.)
      const addressMatch = line.match(/(Via|Piazza|Viale|Corso)\s+[^T]*(?=Tel\.|$)/);
      const address = addressMatch ? addressMatch[0].trim() : '';
      
      // Cerca telefono
      const phoneMatch = line.match(/Tel\.\s*([\d\s]+?)(?:\s|$)/);
      const phone = phoneMatch ? phoneMatch[1].trim() : '';

      if (address) {
        shifts.push({
          name: `Farmacia ${name}`,
          address: address,
          phone: phone || PHONE_MAP[name] || ''
        });
      }
    }
  }

  return shifts;
}

function generateShiftsConfig(shifts) {
  if (!shifts || shifts.length === 0) {
    console.warn('⚠️  Nessun turno trovato, usando configurazione di fallback');
    return null;
  }

  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Lunedì

  const config = shifts.slice(0, 6).map((shift, index) => {
    const shiftStart = new Date(startOfWeek);
    shiftStart.setDate(shiftStart.getDate() + (index * 7));
    
    const shiftEnd = new Date(shiftStart);
    shiftEnd.setDate(shiftEnd.getDate() + 6);

    return {
      name: shift.name,
      address: shift.address,
      phone: shift.phone,
      startDate: shiftStart.toISOString().split('T')[0],
      endDate: shiftEnd.toISOString().split('T')[0],
      isOurPharmacy: shift.name.toLowerCase().includes('assunta')
    };
  });

  return config;
}

function updateTurnsComponent(shifts) {
  const turnsFilePath = path.join(__dirname, '../src/Components/Turns.jsx');
  let content = fs.readFileSync(turnsFilePath, 'utf8');

  // Crea il nuovo array di turni in formato JavaScript
  const shiftsCode = JSON.stringify(shifts, null, 2)
    .replace(/"/g, "'")
    .replace(/'/([^']+)'/g, '"$1"') // Ritorna alle doppie virgolette
    .split('\n')
    .map(line => '  ' + line)
    .join('\n');

  const newConfig = `// ========================================
// CONFIGURAZIONE TURNI NOTTURNI - AGGIORNATO AUTOMATICAMENTE
// Ultimo aggiornamento: ${new Date().toLocaleString('it-IT')}
// Fonte: https://www.agec.it/IT/Agec-Farmacie/Farmacie-di-turno.html
// ========================================
const PHARMACY_SHIFTS = ${shiftsCode};`;

  // Sostituisci la sezione di configurazione vecchia
  const configRegex = /\/\/ ========================================\n\/\/ CONFIGURAZIONE TURNI.*?\nconst PHARMACY_SHIFTS = \[[^\]]*\];/s;
  content = content.replace(configRegex, newConfig);

  fs.writeFileSync(turnsFilePath, content, 'utf8');
  console.log('✅ File Turns.jsx aggiornato con i nuovi turni');
}

async function main() {
  try {
    console.log('🔄 Recupero turni da AGEC...');
    const html = await fetchAGEC();
    
    console.log('📝 Parsing dei dati...');
    const pharmacies = parsePharmacy(html);
    
    if (pharmacies.length === 0) {
      throw new Error('Nessuna farmacia trovata nel parsing');
    }

    console.log(`✅ ${pharmacies.length} farmacie trovate`);
    pharmacies.forEach(p => console.log(`  - ${p.name} (${p.phone})`));

    const shifts = generateShiftsConfig(pharmacies);
    
    if (shifts) {
      updateTurnsComponent(shifts);
      console.log('✨ Aggiornamento completato!');
    }

  } catch (error) {
    console.error('❌ Errore:', error.message);
    process.exit(1);
  }
}

main();
