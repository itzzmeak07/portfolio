// script.js

// Smooth scroll effect for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll animation: reveal elements as they enter the viewport
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

hiddenElements.forEach(el => observer.observe(el));

// Navigation bar highlight on scroll
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNav() {
  let index = -1;
  const sections = ['#introduction', '#milestones', '#influencers', '#gallery'];
  sections.forEach((sec, i) => {
    const section = document.querySelector(sec);
    if (section && window.scrollY >= section.offsetTop - 100) {
      index = i;
    }
  });

  navLinks.forEach(link => link.classList.remove('active'));
  if (index !== -1) {
    navLinks[index].classList.add('active');
  }
}

window.addEventListener('scroll', highlightNav);

// Mobile-friendly: Toggle nav (if implemented later)
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
}
