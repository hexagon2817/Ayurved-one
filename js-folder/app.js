// Initialize Particles.js
document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#9CAF88" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#D4A76A",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
        },
      },
    });
  }
});

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".modern-nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");
const menuOverlay = document.getElementById("menuOverlay");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();

  const isOpen = navMenu.classList.toggle("active");

  hamburger.classList.toggle("active", isOpen);
  menuOverlay.classList.toggle("active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);

  document.body.style.overflow = isOpen ? "hidden" : "auto";
});

menuOverlay.addEventListener("click", function () {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  this.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Nav Link Hover Effect
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    const indicator = this.parentElement.querySelector(".nav-indicator");
    if (indicator) {
      indicator.style.width = "80%";
    }
  });

  link.addEventListener("mouseleave", function () {
    const indicator = this.parentElement.querySelector(".nav-indicator");
    if (indicator && !this.classList.contains("active")) {
      indicator.style.width = "0";
    }
  });
});

// CTA Button Ripple Effect
const ctaButtons = document.querySelectorAll(".hero-btn");
ctaButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${Math.max(rect.width, rect.height)}px;
                height: ${Math.max(rect.width, rect.height)}px;
                top: ${y - Math.max(rect.width, rect.height) / 2}px;
                left: ${x - Math.max(rect.width, rect.height) / 2}px;
                pointer-events: none;
            `;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation CSS
const rippleStyle = document.createElement("style");
rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
document.head.appendChild(rippleStyle);

// Scroll Animations for Features
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

// Animate feature cards on scroll
document.querySelectorAll(".feature-card").forEach((card) => {
  card.style.animation = "none";
  observer.observe(card);
});

// Interactive Title Effect
const heroTitle = document.querySelector(".hero-title");
const titleChars = heroTitle.textContent.split("");
heroTitle.innerHTML = "";

titleChars.forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.display = "inline-block";
  span.style.transition = "all 0.3s ease";
  span.style.transform = "translateY(0)";
  heroTitle.appendChild(span);

  span.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)";
    this.style.color = "var(--gold)";
    this.style.textShadow = "0 5px 15px rgba(212, 167, 106, 0.3)";
  });

  span.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.color = "";
    this.style.textShadow = "";
  });
});

// Parallax Effect for Floating Herbs
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const herbs = document.querySelectorAll(".floating-herb");

  herbs.forEach((herb, index) => {
    const speed = 0.5 + index * 0.1;
    const yPos = -(scrolled * speed * 0.1);
    herb.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
  });
});

// Typewriter Effect for Subtitle (Optional)
const subtitle = document.querySelector(".hero-subtitle");
const originalText = subtitle.textContent;
subtitle.textContent = "";

let charIndex = 0;
function typeWriter() {
  if (charIndex < originalText.length) {
    subtitle.textContent += originalText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 20);
  }
}

// Start typewriter after 2 seconds
setTimeout(typeWriter, 2000);

// Glow Effect on Brand Hover
const brand = document.querySelector(".nav-brand");
const brandGlow = document.querySelector(".brand-glow");

brand.addEventListener("mouseenter", function () {
  brandGlow.style.animation = "brandPulse 1s infinite";
  brandGlow.style.opacity = "0.5";
});

brand.addEventListener("mouseleave", function () {
  brandGlow.style.animation = "brandPulse 4s infinite";
  brandGlow.style.opacity = "0.3";
});



















