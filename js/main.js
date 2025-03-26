// ...existing code...
import createHeader from './header-utils.js';
// ...existing code...

// Beispielaufruf:
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#header-container');
  if (container) {
    createHeader(container, {
      title: 'Fahrdienst Richter',
      logoSrc: '/images/logo.png',
      menuItems: [
        { text: 'Startseite', url: '/', isActive: true },
        { text: 'Dienstleistungen', url: '/services' },
        { text: 'Über uns', url: '/about' },
        { text: 'Kontakt', url: '/contact' }
      ]
    });
  }
});
// ...existing code...
