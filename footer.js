function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  
  // Footer-Inhalt erstellen
  const footerContent = document.createElement('div');
  footerContent.className = 'footer-content';
  
  // Kontaktinformationen
  const contactInfo = document.createElement('div');
  contactInfo.className = 'contact-info';
  contactInfo.innerHTML = `
    <h3>Kontakt</h3>
    <p>Fahrdienst Richter</p>
    <p>Musterstraße 123</p>
    <p>12345 Musterstadt</p>
    <p>Tel: 0123 456789</p>
    <p>E-Mail: info@fahrdienst-richter.de</p>
  `;
  
  // Copyright-Informationen
  const copyright = document.createElement('div');
  copyright.className = 'copyright';
  copyright.innerHTML = `<p>© ${new Date().getFullYear()} Fahrdienst Richter. Alle Rechte vorbehalten.</p>`;
  
  // Elemente zum Footer hinzufügen
  footerContent.appendChild(contactInfo);
  footer.appendChild(footerContent);
  footer.appendChild(copyright);
  
  return footer;
}

// Footer zur Seite hinzufügen, wenn das DOM geladen ist
document.addEventListener('DOMContentLoaded', function() {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.appendChild(createFooter());
  }
});
