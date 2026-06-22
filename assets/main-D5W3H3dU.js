(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`
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
`,t=`
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
`;function n(){let n=document.getElementById(`header-placeholder`),r=document.getElementById(`footer-placeholder`);n&&(n.innerHTML=e),r&&(r.innerHTML=t);let i=document.getElementById(`mobile-menu-btn`),a=document.getElementById(`nav-menu`);i&&a&&i.addEventListener(`click`,()=>{a.classList.toggle(`open`)});let o=window.location.pathname;document.querySelectorAll(`nav a`).forEach(e=>{let t=e.getAttribute(`href`);(t===o||o===`/`&&t===`/index.html`)&&e.classList.add(`active`)})}document.addEventListener(`DOMContentLoaded`,()=>{n()});