const headerHTML = `
<header>
  <div class="container">
    <a href="/" class="logo">Snap<span>Cabin</span></a>
    <div class="menu-toggle" id="mobile-menu-btn">☰</div>
    <nav id="nav-menu">
      <ul>
        <li><a href="/" id="nav-home">Home</a></li>
        <li><a href="/packages.html" id="nav-packages">Packages</a></li>
        <li><a href="/gallery.html" id="nav-gallery">Gallery</a></li>
        <li><a href="/how-it-works.html" id="nav-how">How It Works</a></li>
        <li><a href="/about.html" id="nav-about">About</a></li>
        <li><a href="/contact.html" class="btn-book">Book Now</a></li>
      </ul>
    </nav>
  </div>
</header>
`;

const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <div class="footer-logo">Snap<span>Cabin</span></div>
        <p>Premium photobooth experiences for unforgettable events. Physical souvenirs, digital memories.</p>
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/packages.html">Packages</a></li>
          <li><a href="/gallery.html">Gallery</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Contact Us</h4>
        <ul>
          <li>Email: hello@snapcabin.com</li>
          <li>Phone: (555) 123-4567</li>
          <li>Service Area: Greater Metro Area</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 SnapCabin Photobooth Rentals. All rights reserved.</p>
    </div>
  </div>
</footer>
`;

export function initLayout() {
  const headerContainer = document.getElementById('header-placeholder');
  const footerContainer = document.getElementById('footer-placeholder');

  if (headerContainer) headerContainer.innerHTML = headerHTML;
  if (footerContainer) footerContainer.innerHTML = footerHTML;

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Active link highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/index.html')) {
      link.classList.add('active');
    }
  });
}
