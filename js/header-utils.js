/**
 * Erstellt ein Header-Element und fügt es in das angegebene Container-Element ein
 * @param {HTMLElement} container - Das Container-Element, in das der Header eingefügt werden soll
 * @param {Object} options - Optionen für den Header
 * @param {string} options.title - Titel des Headers
 * @param {string} options.logoSrc - Pfad zum Logo (optional)
 * @param {Array} options.menuItems - Array von Menüpunkten (optional)
 * @returns {HTMLElement} Das erstellte Header-Element
 */
function createHeader(container, options = {}) {
  const header = document.createElement('header');
  header.className = 'site-header';
  
  // Logo und Titel-Bereich
  const logoArea = document.createElement('div');
  logoArea.className = 'logo-area';
  
  if (options.logoSrc) {
    const logo = document.createElement('img');
    logo.src = options.logoSrc;
    logo.alt = 'Logo';
    logo.className = 'header-logo';
    logoArea.appendChild(logo);
  }
  
  const title = document.createElement('h1');
  title.textContent = options.title || 'Website Titel';
  title.className = 'header-title';
  logoArea.appendChild(title);
  
  header.appendChild(logoArea);
  
  // Navigation erstellen, wenn Menüpunkte vorhanden sind
  if (options.menuItems && options.menuItems.length > 0) {
    const nav = document.createElement('nav');
    nav.className = 'main-navigation';
    
    const menuList = document.createElement('ul');
    options.menuItems.forEach(item => {
      const menuItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = item.url || '#';
      link.textContent = item.text;
      if (item.isActive) {
        link.className = 'active';
      }
      menuItem.appendChild(link);
      menuList.appendChild(menuItem);
    });
    
    nav.appendChild(menuList);
    header.appendChild(nav);
  }
  
  // Header zum Container hinzufügen
  container.appendChild(header);
  
  return header;
}

// Die Funktion als globale Variable exportieren
window.createHeader = createHeader;

// Als ES6-Modul exportieren (für moderne Browser)
export default createHeader;
