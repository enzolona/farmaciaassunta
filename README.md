# Farmacia dell'Assunta - Design Moderno

Questo è il redesign completo del sito web della Farmacia dell'Assunta con un design pulito e moderno.

## Caratteristiche del Nuovo Design

- ✨ **Design Pulito e Moderno**: Linee semplici e minimaliste
- 🎨 **Niente Card Translucide**: Elementi piatti e ben definiti
- 📐 **Sezioni Ben Divise**: Separazione chiara tra le varie sezioni
- 🖼️ **Ampi Spazi per Immagini**: Layout che valorizza le immagini
- 🔘 **Pochi Bottoni**: Focus sull'essenziale
- 📱 **Completamente Responsive**: Ottimizzato per tutti i dispositivi
- ⚡ **Performance Ottimizzate**: Caricamento veloce e fluido

## Sezioni del Sito

### 1. Home (Hero)
Sezione introduttiva con logo, titolo e immagine principale in layout a due colonne.

### 2. Servizi
Presentazione dei principali servizi offerti:
- Analisi del Sangue
- Assistenza Infermieristica
- Elettrocardiogramma

### 3. Chi Siamo
Storia e informazioni sulla farmacia con statistiche (50+ anni di esperienza, 10K+ clienti).

### 4. Novità
Sezione per visualizzare:
- **Offerte del mese** (collegata a PDF Unilife)
- **Notizie e consigli** (integrazione con Facebook o contenuti locali)

### 5. Scarica l'App
Sezione dedicata al download dell'app mobile con:
- Link diretti a App Store e Google Play
- QR Code per download rapido
- Lista delle funzionalità principali

### 6. Dove Siamo (Contatti)
Informazioni di contatto con:
- **Mappa Google Maps** integrata
- Indirizzo, telefono, email
- **Tabella orari di apertura**
- NO form di contatto (rimosso come richiesto)

## Tecnologie Utilizzate

- React 18
- Vite
- Tailwind CSS
- AOS (Animate On Scroll)
- React Icons
- React Scroll

## Installazione

1. Installa le dipendenze:
```bash
npm install
```

2. (Opzionale) Configura l'integrazione Facebook:
   - Copia `.env.local` e aggiungi le tue credenziali
   - Vedi `FACEBOOK_SETUP.md` per istruzioni dettagliate

3. Avvia il server di sviluppo:
```bash
npm run dev
```

4. Apri il browser su `http://localhost:5173`

## Build di Produzione

```bash
npm run build
```

## Struttura del Progetto

```
rigenerazione_sito/
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx           # Navigazione pulita e fissa
│   │   ├── Hero.jsx             # Sezione hero con ampi spazi
│   │   ├── Services.jsx         # Servizi senza card in rialzo
│   │   ├── About.jsx            # Chi siamo con statistiche
│   │   ├── Blogs.jsx            # Novità e offerte
│   │   ├── DownloadSection.jsx # Download app mobile
│   │   ├── Contact.jsx          # Mappa e contatti
│   │   └── Footer.jsx           # Footer minimale
│   ├── assets/
│   │   └── img/                # Immagini del sito
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.local                   # Configurazione Facebook (opzionale)
├── FACEBOOK_SETUP.md            # Guida setup Facebook
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Configurazione

### Aggiornare le Offerte Mensili

Modifica il file `src/Components/Blogs.jsx`:

```javascript
const OFFERTE_PDF_LINK = "https://unilife.net/wp-content/uploads/...";
const OFFERTE_PAGE_LINK = "https://unilife.net/#Offerte";
```

### Personalizzare la Mappa Google Maps

Modifica il file `src/Components/Contact.jsx` e aggiorna l'URL dell'iframe con le coordinate della tua farmacia.

### Integrare Facebook (Opzionale)

Vedi il file `FACEBOOK_SETUP.md` per istruzioni complete sull'integrazione dei post Facebook.

## Principi di Design

1. **Minimalismo**: Ogni elemento ha uno scopo preciso
2. **Spazi Bianchi**: Utilizzati generosamente per dare respiro al contenuto
3. **Tipografia Chiara**: Font Inter per leggibilità ottimale
4. **Colori Coerenti**: Palette limitata e professionale
5. **Animazioni Sottili**: Transizioni fluide con AOS

## Colori Principali

- Primary: `#015da8` (Blu)
- Secondary: `#6ba8da` (Azzurro)
- Accent: `#2c3e50` (Grigio scuro)
- Light: `#f8f9fa` (Grigio chiaro)

## Note

- Le immagini sono già incluse nella cartella `src/assets/img/`
- Il design è stato ottimizzato per la semplicità e la leggibilità
- Nessuna card con effetti translucidi o in rialzo
- Layout pulito con linee nette e divisioni chiare
- La mappa Google Maps sostituisce il form di contatto
- L'integrazione Facebook è opzionale - funziona anche senza

---

Sviluppato con ❤️ per la Farmacia dell'Assunta
