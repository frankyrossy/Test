function createHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';
  
  // Logo erstellen
  const logo = document.createElement('div');
  logo.className = 'logo';
  const logoLink = document.createElement('a');
  logoLink.href = 'index.html';
  logoLink.innerHTML = '<img src="images/logo.png" alt="Fahrdienst Richter Logo">';
  logo.appendChild(logoLink);
  
  // Navigation erstellen
  const nav = document.createElement('nav');
  nav.className = 'main-nav';
  const navList = document.createElement('ul');
  
  const navItems = [
    { text: 'Startseite', url: 'index.html' },
    { text: 'Leistungen', url: 'leistungen.html' },
    { text: 'Über uns', url: 'ueber-uns.html' },
    { text: 'Kontakt', url: 'kontakt.html' }
  ];
  
  navItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.url;
    link.textContent = item.text;
    listItem.appendChild(link);
    navList.appendChild(listItem);
  });
  
  nav.appendChild(navList);
  
  // Elemente zum Header hinzufügen
  header.appendChild(logo);
  header.appendChild(nav);
  
  return header;
}

// Header zur Seite hinzufügen, wenn das DOM geladen ist
document.addEventListener('DOMContentLoaded', function() {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.appendChild(createHeader());
  }
});
