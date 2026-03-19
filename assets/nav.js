const navHTML = `
<nav>
  <a href="/" class="nav-logo">MARVIN <span>NGABONZIRA</span></a>
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/about.html">About</a>
    <a href="/research.html">Research</a>
    <a href="/cv.html">CV</a>
    <a href="https://ngabonziramarvin.substack.com" target="_blank">Newsletter ↗</a>
  </div>
  <button class="nav-burger">
    <span></span><span></span><span></span>
  </button>
</nav>
`;

const footerHTML = `
<footer>
  <div class="container">
    <div class="foot-inner">
      <div class="foot-brand">Marvin <span>Ngabonzira</span></div>
      <div class="foot-links">
        <a href="https://orcid.org/0009-0000-2708-2825" target="_blank">ORCID</a>
        <a href="https://www.researchgate.net/profile/Marvin-Ngabonzira" target="_blank">ResearchGate</a>
        <a href="https://www.linkedin.com/in/ngabonziramarvin" target="_blank">LinkedIn</a>
        <a href="https://instagram.com/marvinngabonzira" target="_blank">IG</a>
        <a href="https://tiktok.com/@marvinngabonzira" target="_blank">TikTok</a>
      </div>
      <div class="foot-copy">© 2026 The Science Blueprint</div>
    </div>
  </div>
</footer>
`;

// Inject Nav at top
document.body.insertAdjacentHTML('afterbegin', navHTML);

// Inject Footer at bottom
document.body.insertAdjacentHTML('beforeend', footerHTML);

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
