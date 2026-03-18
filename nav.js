// assets/nav.js
const navHTML = `
<nav>
  <a href="/" class="nav-logo">Marvin <span>Ngabonzira</span></a>
  <div class="nav-links">
    <a href="/index.html">Home</a>
    <a href="/about.html">About</a>
    <a href="/research.html">Research</a>
    <a href="/blog.html">Blog</a>
    <a href="/cv.html">CV</a>
  </div>
  <button class="nav-burger" aria-label="Toggle Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
`;

// Insert the navigation at the top of the body
document.body.insertAdjacentHTML('afterbegin', navHTML);

// Highlight the active page link
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/index.html')) {
    link.classList.add('active');
  }
});

// Mobile menu toggle logic
const burger = document.querySelector('.nav-burger');
const menu = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  menu.classList.toggle('open');
});