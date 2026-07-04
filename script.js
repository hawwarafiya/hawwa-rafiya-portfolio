/* ============================================
   HAWWA RAFIYA PORTFOLIO — script.js
   ============================================ */

// ── Navbar scroll effect ──────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ── Hamburger menu ───────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    // Animate hamburger into X
    const spans = hamburger.querySelectorAll('span');
    if (mobileNav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    });
});

// ── Active nav highlight on scroll ───────────
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (!link) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
            document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
            link.style.color = 'var(--sage)';
        }
    });
};

window.addEventListener('scroll', highlightNav);

// ── Scroll reveal ────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// Add reveal class to elements
const revealTargets = [
    '.info-card',
    '.skill-item',
    '.project-card',
    '.contact-item',
    '.about-text',
    '.about-cards',
    '.contact-left',
    '.contact-right',
    '.hero-eyebrow',
    '.hero-name',
    '.hero-role',
    '.hero-bio',
    '.hero-buttons',
    '.hero-socials',
    '.hero-right',
];

revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
});

// ── Smooth scroll for all anchor links ───────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ── Log on load ──────────────────────────────
window.addEventListener('load', () => {
    console.log('%c✦ Hawwa Rafiya Portfolio loaded ', 'background:#3D6B4F;color:#FAFAF8;padding:6px 12px;border-radius:4px;font-weight:bold;');
});