# Krankentransport-Terminbuchung - Projektspezifikation

### Tech Stack

Frontend:	React + Vite
UI Framework:	Material-UI (MUI)
Datenbank:	Firebase Firestore
Authentifizierung:	Firebase Authentication
Hosting:	Firebase Hosting


## 📌 Projektübersicht
**Ziel**: Webbasierte Terminbuchung für Krankentransporte mit Echtzeit-Verfügbarkeitsprüfung  
**Zielgruppe**: 
- Patienten/Besucher (ohne Login)
- Mitarbeiter (mit Login)

## 🎯 Kernfunktionen

### 1. Öffentliche Buchungsseite
- **Zeitslot-Kalender**
  - 15-Minuten-Intervalle (08:00, 08:15, ...)
  - 45-minütige Blockierung nach Buchung
  - Echtzeit-Verfügbarkeitsanzeige
- **Buchungsformular (Popup)**
  - Patientendaten erfassen (Vorname, Nachname, Telefon, E-Mail, Abholadresse, Zieladresse, Beförderungsart = siehe Bookingform.png)
  - Automatische Statuszuweisung: "unverteilt"

### 2. Mitarbeiter-Dashboard
- **Login-System**
  - Nur für autorisiertes Personal
- **Navigation:**
  1. **Terminübersicht**
     - Filter nach Status
     - Kalenderansicht
  2. **Verteilungszentrale**
     - Statusänderung "unverteilt" → "verteilt"
  3. **Fahrzeugverwaltung**
     - Aktiv/Inaktiv-Steuerung
     - Fahrzeugdatenbank
  4. **Einstellungen**
     - Basis-Konfigurationen

### 3. Echtzeit-Logik
```javascript
// Beispiel-Logik für Zeitblockierung
function calculateAvailableSlots(bookings, activeVehicles) {
  const slotDuration = 15; // Minuten
  const bookingDuration = 45; // Minuten
  // Implementierung der Blockierungslogik hier
}