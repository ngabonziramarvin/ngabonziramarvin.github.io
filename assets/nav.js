// --- START OF FILE site/assets/nav.js ---
const navHTML = `
<nav>
  <a href="/" class="nav-logo">MARVIN <span>NGABONZIRA</span></a>
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/about.html">About</a>
    <a href="/research.html">Research</a>
    <a href="https://ngabonziramarvin.substack.com" target="_blank">Newsletter ↗</a>
    <a href="https://www.youtube.com/@myscienceblueprint" target="_blank">YouTube ↗</a>
  </div>
  <button class="nav-burger">
    <span></span><span></span><span></span>
  </button>
</nav>
`;

document.body.insertAdjacentHTML('afterbegin', navHTML);

// Highlight active link
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

// Mobile menu toggle
document.querySelector('.nav-burger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('open');
});
