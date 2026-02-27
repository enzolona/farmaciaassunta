# 🔄 Aggiornamento Automatico Turni Farmacie

I turni si aggiornano automaticamente ogni settimana da https://www.agec.it/IT/Agec-Farmacie/Farmacie-di-turno.html

## Opzione 1: GitHub Actions (Consigliato)

Se il progetto è su GitHub:
1. Lo script si esegue automaticamente ogni **domenica alle 09:00** (ora italiana)
2. I turni vengono aggiornati e committati automaticamente

Non serve fare nulla! ✅

---

## Opzione 2: Windows Task Scheduler (Locale)

Se preferisci aggiornare localmente:

### Setup una tantum:
```powershell
# 1. Apri Task Scheduler
taskschd.msc

# 2. Crea una nuova attività ricorrente
# - Nome: "Update Pharmacy Shifts"
# - Trigger: Domenica alle 09:00
# - Azione: Esegui "C:\Path\to\rigenerazione_sito\scripts\updateShifts.bat"
```

### Oppure con PowerShell (per automatizzare):
```powershell
$TaskName = "Update Pharmacy Shifts"
$ScriptPath = "C:\Users\enzol\Downloads\medical-website-main\rigenerazione_sito\scripts\updateShifts.bat"

$Action = New-ScheduledTaskAction -Execute "cmd.exe" -Argument "/c `"$ScriptPath`""
$Trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Sunday -At 09:00

Register-ScheduledTask -TaskName $TaskName -Action $Action -Trigger $Trigger -RunLevel Highest
```

---

## Opzione 3: Esecuzione Manuale

Esegui lo script quando vuoi:

**Da PowerShell:**
```powershell
cd C:\Users\enzol\Downloads\medical-website-main\rigenerazione_sito
node scripts/updateShifts.js
```

**Da Command Prompt:**
```cmd
cd C:\Users\enzol\Downloads\medical-website-main\rigenerazione_sito
node scripts\updateShifts.js
```

**Doppio click:**
- Fai doppio click su `scripts\updateShifts.bat`

---

## 📝 Cosa succede automaticamente?

1. **Scraping**: Il script recupera i turni dal sito AGEC
2. **Parsing**: Estrae nome farmacia, indirizzo e telefono
3. **Aggiornamento**: Modifica il file `src/Components/Turns.jsx` con i nuovi turni
4. **Commit** (solo su GitHub): Salva i cambiamenti e fa push

---

## ⚙️ Configurazione

Modifica `scripts/updateShifts.js` per:

- **Aggiungere farmacie**: Modifica l'oggetto `TARGET_PHARMACIES`
- **Cambiar numero di turni visualizzati**: Modifica il `.slice(0, 6)` nella funzione `generateShiftsConfig`
- **Aggiungere orari di apertura**: Estendi il parsing per catturare ulteriori informazioni

---

## 🆘 Troubleshooting

**Errore: "Cannot find module"**
```powershell
cd rigenerazione_sito
npm install
```

**I turni non si aggiornano**
- Controlla il sito AGEC manualmente: https://www.agec.it/IT/Agec-Farmacie/Farmacie-di-turno.html
- Se il sito ha cambiato struttura, potrebbe essere necessario aggiornare il regex nel parsing
- Esegui lo script manualmente per vedere gli errori: `node scripts/updateShifts.js`

**Task Scheduler non esegue lo script**
- Verifica che Node.js sia installato e nel PATH
- Testa l'esecuzione manuale prima
- Controlla i log di Task Scheduler: `eventvwr.msc` → Windows Logs → Application

---

## 📅 Prossimi aggiornamenti

Il sistema supporta:
- ✅ Aggiornamenti settimanali automatici
- ✅ Fallback a configurazione hardcoded se il scraping fallisce
- ✅ Rotazione automatica di 6 farmacie
- ✅ Telefono cliccabile

**Bonus futuri:**
- [ ] Integrare orari apertura specifici
- [ ] Notifiche quando è il turno della nostra farmacia
- [ ] Caching per ridurre richieste
