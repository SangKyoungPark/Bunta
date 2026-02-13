// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

// Mobile nav toggle
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('active'), i * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => revealObserver.observe(el));

// Smooth parallax on hero
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-content');
  const scroll = window.scrollY;
  if (scroll < window.innerHeight) {
    hero.style.transform = `translateY(${scroll * 0.3}px)`;
    hero.style.opacity = 1 - scroll / (window.innerHeight * 0.8);
  }
});
