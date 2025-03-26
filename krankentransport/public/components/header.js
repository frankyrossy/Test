// header.js
function createHeader() {
  return `
    <header class="main-header">
      <div class="header-container">
        <div class="logo-container">
          <img src="images/ambulance-icon.svg" 
               alt="Krankentransport Logo" 
               class="logo-img"
               width="36" 
               height="36">
          <h1 class="logo-text">Terminbuchung</h1>
        </div>
        
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="nav-item"><a href="index.html" class="nav-link active">Startseite</a></li>
            <li class="nav-item"><a href="leistungen.html" class="nav-link">Leistungen</a></li>
            <li class="nav-item"><a href="ueber-uns.html" class="nav-link">Über uns</a></li>
            <li class="nav-item"><a href="kontakt.html" class="nav-link cta-button">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

// Header automatisch einbinden
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML('afterbegin', createHeader());
});