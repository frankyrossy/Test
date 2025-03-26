/**
 * Erstellt ein Header-Element und fügt es in das angegebene Container-Element ein
 * @param {HTMLElement} container - Das Element, in das der Header eingefügt werden soll
 * @param {Object} options - Optionen für den Header (optional)
 */
function createHeader(container, options = {}) {
  const headerElement = document.createElement('header');
  headerElement.className = options.className || 'site-header';
  
  // Logo/Titel hinzufügen
  const titleElement = document.createElement('h1');
  titleElement.textContent = options.title || 'Fahrdienst Richter';
  headerElement.appendChild(titleElement);
  
  // Navigationsmenü hinzufügen (falls gewünscht)
  if (options.showNavigation !== false) {
    const navElement = document.createElement('nav');
    const menuItems = options.menuItems || [
      { text: 'Startseite', url: 'index.html' },
      { text: 'Über uns', url: 'about.html' },
      { text: 'Kontakt', url: 'contact.html' }
    ];
    
    const menuList = document.createElement('ul');
    menuItems.forEach(item => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = item.url;
      link.textContent = item.text;
      listItem.appendChild(link);
      menuList.appendChild(listItem);
    });
    
    navElement.appendChild(menuList);
    headerElement.appendChild(navElement);
  }
  
  // Header in den Container einfügen
  container.prepend(headerElement);
  
  return headerElement;
}

// Falls Sie Module verwenden, exportieren Sie die Funktion
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createHeader };
}
