Vorhaben:
Die Anwendung soll webbasiert laufen und menschen können dort Termine für eine Fahrt buchen - ohne Login (Startseite). Es handelt sich hierbei um Krankentransportfahrten. Ein Login soll zunächst nur für Mitarbeiter notwendig sein (hierzu später in "#1Mitarbeiter"). 
Ein Besucher kann daher einen Zeitslot-Kalender überblicken an dem freie Termine angeboten werden (#2Termine). Nachdem der Besucher ein Termin ausgewählt hat, öffnet sich ein Popup Fenster und dort wird dann ein Formular ausgefüllt (#3FormBooking). 
Die Daten des Termins werden in einer Datenbank abgespeichert - Firebase.
Jeder Termin erhält ein Status ("unverteilt", "zugeteilt", "erledigt", "in durchführung")
Es gib ein Dashboard (die Einsicht erfolgt erst nach login nur für Mitarbeiter, Seite 2 nach Startseite) und dort gibt es ebenfalls ein Terminkalender der eine Übersicht bietet von den Terminen die vorher eingetragen wurden durch Seite 1. Auf Seite 2 = Dashboard gibt es links eine Navigation bei der folgende Sachen ausgewählt werden können:
1.) Termine = das Dashboard
2.) Verteilung = Dort werden Termine in das Dashboard übertragen - Hintergrund ist folgender: Ich möchte, dass alle angelegten Termine durch Kunden aus Seite 1 erstmal den Status "unverteilt" erhalten. Erst nach Verteilung aus dieser Seite wird der Status "verteilt" dem Termin vergeben. Erst dann wird er im Dashboard angezeigt.
2.) Fahrzeuge = Fahrzeugliste (hier ist ebenfalls eine Datenbank nötig um Fahrzeuge dort zu speichern und nennenswerte zu finden), mit einem Schieberegler um Fahrzeuge zu aktivieren oder deaktivieren.
3.) Einstellungen = basics die eingestellt werden (hierzu später mehr aber leg diese seite bereits an)
--------

#2Termine
Termine sollen immer in Echzeit hinterlegt werden in der Datenbank und abgeglichen werden. Die Anzahl der aktiven Fahrzeuge aus der Fahrzeugliste in Punkt 2 gibt die Anzahl der doppelten Termine wieder (Wenn 2 Fahrzeuge Aktiv = ist es möglich 2 Termine um 08:30 zu wählen). Sobald  Termine werden im 15 Minütigen abstand angeboten (08:00,08:15,08:30...), mit einer Dauer von 45 Minuten, für diese Zeit ist dann es nicht möglich ein Termin zu buchen (08:15 gebucht, dann 08:30 und 08:45 entfernen)

Beispiel für Terminlogik: 2 Fahrzeuge sind Aktiv. 1. Termin = 08:30 (45 Minuten Dauer bis 09:15), 2. Termin = 08:45 (Dauer 45 Minuten, bis 09:30) dann wäre um 09:15 wieder Ein Termin verfügbar und um 09:30 der 2. weitere Termin.
