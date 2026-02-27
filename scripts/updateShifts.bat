@echo off
REM Script per aggiornare i turni di farmacie da AGEC
REM Utilizzare con Windows Task Scheduler per automazione settimanale

cd /d "%~dp0..\rigenerazione_sito"

echo.
echo ===============================================
echo Aggiornamento Turni Farmacie da AGEC
echo ===============================================
echo.

node scripts/updateShifts.js

if %errorlevel% equ 0 (
    echo.
    echo ✅ Aggiornamento completato con successo!
    echo.
) else (
    echo.
    echo ❌ Errore durante l'aggiornamento
    echo.
    pause
    exit /b 1
)
