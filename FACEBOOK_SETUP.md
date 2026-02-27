# Guida Configurazione Facebook

## Come Collegare i Post di Facebook

Per mostrare i post della tua pagina Facebook nella sezione "Novità", segui questi passaggi:

### 1. Ottieni l'ID della Pagina Facebook

1. Vai sulla tua pagina Facebook aziendale
2. Clicca su "Informazioni" nella sidebar
3. Scorri in basso e trova l'"ID Pagina Facebook"
4. Copia questo numero

### 2. Genera un Token di Accesso

1. Vai su https://developers.facebook.com/tools/explorer/
2. Seleziona la tua app (o creane una nuova)
3. Clicca su "Generate Access Token"
4. Seleziona i permessi: `pages_read_engagement`, `pages_show_list`
5. Copia il token generato

### 3. Converti in Token Permanente

1. Vai su https://developers.facebook.com/tools/debug/accesstoken/
2. Incolla il token e verifica la scadenza
3. Per un token permanente, usa lo strumento "Access Token Tool"

### 4. Configura il File .env.local

Apri il file `.env.local` nella root del progetto e sostituisci i valori:

```
VITE_FACEBOOK_PAGE_ID=123456789012345
VITE_FACEBOOK_ACCESS_TOKEN=EAAaBcDefGhIjKlMnOpQrStUvWxYz...
```

### 5. Riavvia il Server

Dopo aver modificato il file `.env.local`, riavvia il server di sviluppo:

```bash
npm run dev
```

## Note Importanti

- Se non configuri questi valori, verranno mostrati i post di esempio predefiniti
- Il token di accesso deve avere i permessi corretti
- Per la produzione, considera l'uso di token più sicuri

## Troubleshooting

Se i post non vengono caricati:
1. Controlla che l'ID della pagina sia corretto
2. Verifica che il token sia valido e non scaduto
3. Controlla la console del browser per eventuali errori
4. Assicurati che la pagina Facebook sia pubblica

---

Per maggiori informazioni: https://developers.facebook.com/docs/
