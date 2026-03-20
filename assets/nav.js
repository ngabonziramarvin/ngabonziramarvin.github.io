// This script injects the Navigation and Footer into all pages
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INJECT NAVIGATION
    const navHTML = `
    <nav>
        <a href="/index.html" class="nav-logo">MARVIN <span>NGABONZIRA</span></a>
        <ul class="nav-links">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/research.html">Research</a></li>
            <li><a href="/cv.html">CV</a></li>
        </ul>
        <button class="nav-burger">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
    `;

    // 2. INJECT FOOTER
    const footerHTML = `
    <footer>
        <div class="container">
            <div class="foot-inner">
                <div class="foot-brand">THE SCIENCE <span>BLUEPRINT</span></div>
                <div class="foot-links">
                    <a href="https://youtube.com/@myscienceblueprint" target="_blank">YouTube</a>
                    <a href="https://linkedin.com/in/ngabonziramarvin" target="_blank">LinkedIn</a>
                    <a href="https://myscienceblueprint.substack.com" target="_blank">Substack</a>
                    <a href="https://www.researchgate.net/profile/Marvin-Ngabonzira" target="_blank">ResearchGate</a>
                </div>
                <div class="foot-copy">© 2026 · MARVIN NGABONZIRA · KAMPALA, UGANDA</div>
            </div>
        </div>
    </footer>
    `;

    // Insert Nav at the top of .page-wrap
    const pageWrap = document.querySelector('.page-wrap');
    if (pageWrap) {
        pageWrap.insertAdjacentHTML('afterbegin', navHTML);
        pageWrap.insertAdjacentHTML('beforeend', footerHTML);
    }

    // Burger Menu Logic for Mobile
    const burger = document.querySelector('.nav-burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            burger.classList.toggle('active');
        });
    }

    // Highlight active link
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
