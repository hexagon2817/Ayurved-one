// Navbar Scroll Effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.modern-nav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const menuOverlay = document.getElementById('menuOverlay');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();

  const isOpen = navMenu.classList.toggle('active');

  hamburger.classList.toggle('active', isOpen);
  menuOverlay.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : 'auto';
});

menuOverlay.addEventListener('click', function() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  this.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Nav Link Hover Effect
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    const indicator = this.parentElement.querySelector('.nav-indicator');
    if (indicator) indicator.style.width = '80%';
  });

  link.addEventListener('mouseleave', function() {
    const indicator = this.parentElement.querySelector('.nav-indicator');
    if (indicator && !this.classList.contains('active')) {
      indicator.style.width = '0';
    }
  });
});

// Brand Glow Hover
const brand = document.querySelector('.nav-brand');
const brandGlow = document.querySelector('.brand-glow');

brand.addEventListener('mouseenter', function() {
  brandGlow.style.animation = 'brandPulse 1s infinite';
  brandGlow.style.opacity = '0.5';
});

brand.addEventListener('mouseleave', function() {
  brandGlow.style.animation = 'brandPulse 4s infinite';
  brandGlow.style.opacity = '0.3';
});




























// about section 
// Reveal animation on scroll
const aboutCards = document.querySelectorAll('.about-card');

const aboutObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.opacity = '1';
    }
  });
}, { threshold: 0.2 });

aboutCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  aboutObserver.observe(card);
});













const philosophySteps = document.querySelectorAll('.philosophy-step');

const philosophyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

philosophySteps.forEach(step => {
  step.style.opacity = '0';
  step.style.transform = 'translateY(30px)';
  philosophyObserver.observe(step);
});
