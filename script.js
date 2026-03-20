// Preloader
window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");
  preloader.style.display = "none";
  content.style.display = "block";
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form animation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your details have been captured.");
});
