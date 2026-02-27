# Guida Rapida - Avvio del Progetto

## Prerequisiti
- Node.js (versione 16 o superiore)
- npm o yarn

## Installazione e Avvio

### 1. Apri il terminale nella cartella del progetto
```bash
cd C:\Users\enzol\Downloads\medical-website-main\rigenerazione_sito
```

### 2. Installa le dipendenze
```bash
npm install
```

Questo installerà tutti i pacchetti necessari:
- React 18
- Vite
- Tailwind CSS
- AOS (animazioni)
- React Icons
- React Scroll

### 3. Avvia il server di sviluppo
```bash
npm run dev
```

### 4. Apri il browser
Il terminale mostrerà l'URL, solitamente:
```
http://localhost:5173
```

## Comandi Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run preview` - Anteprima della build di produzione
- `npm run lint` - Controlla il codice per errori

## Struttura delle Pagine

Il sito è composto da una singola pagina con 4 sezioni principali:

1. **Home/Hero** - Introduzione con logo e immagine
2. **Servizi** - 3 servizi principali offerti
3. **Chi Siamo** - Informazioni sulla farmacia con statistiche
4. **Contatti** - Form di contatto e informazioni

## Personalizzazione

### Cambiare i colori
Modifica il file `tailwind.config.js`:
```javascript
colors: {
  primary: "#015da8",    // Blu principale
  secondary: "#6ba8da",  // Azzurro
  accent: "#2c3e50",     // Testo scuro
  light: "#f8f9fa",      // Sfondo alternato
}
```

### Modificare i contenuti
I testi si trovano nei rispettivi file componenti in `src/Components/`:
- `Hero.jsx` - Testo home
- `Services.jsx` - Servizi
- `About.jsx` - Chi siamo
- `Contact.jsx` - Contatti
- `Footer.jsx` - Footer

### Cambiare le immagini
Le immagini si trovano in `src/assets/img/`. Sostituisci i file mantenendo gli stessi nomi.

## Problemi Comuni

### Il server non si avvia
- Verifica di aver installato le dipendenze: `npm install`
- Controlla che la porta 5173 non sia occupata

### Le immagini non si caricano
- Verifica che i file siano in `src/assets/img/`
- Controlla che i nomi dei file corrispondano a quelli nei componenti

### Errori di compilazione
- Esegui `npm install` per assicurarti che tutte le dipendenze siano installate
- Cancella la cartella `node_modules` e `package-lock.json`, poi reinstalla: `npm install`

## Build di Produzione

Per creare una versione ottimizzata per la produzione:

```bash
npm run build
```

I file ottimizzati saranno nella cartella `dist/`.

Per testare la build:
```bash
npm run preview
```

## Supporto

Per qualsiasi problema, consulta:
- README.md - Documentazione generale
- MODIFICHE_DESIGN.md - Dettagli delle modifiche di design

---

Buon lavoro! 🚀
