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



/* ================= FAQ ACCORDION ================= */
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function() {
    const item = this.parentElement;
    const isActive = item.classList.contains('active');

    // Close all other items
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      otherItem.classList.remove('active');
    });

    // Toggle current item
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

/* ================= MAP CLICK HANDLER ================= */
document
  .querySelector('.map-container')
  .addEventListener('click', function() {
    alert(
      'This would open Google Maps with our location. In a real implementation, this would embed an actual Google Map.'
    );
  });