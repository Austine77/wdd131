// Inject navigation links dynamically
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav ul");

  if (nav) {
    nav.innerHTML = `
      <li><a href="https://austine77.github.io/wdd131/Week06/index.html">Home</a></li>
      <li><a href="https://austine77.github.io/wdd131/Week06/index-shop.html">Shop</a></li>
      <li><a href="https://austine77.github.io/wdd131/Week06/about.html">About</a></li>
      <li><a href="https://austine77.github.io/wdd131/Week06/contact.html">Contact</a></li>
    `;
  }

  // Shop Now scroll (only for Home page)
  const shopBtn = document.querySelector("#shopNowBtn");
  if (shopBtn) {
    shopBtn.addEventListener("click", () => {
      window.location.href = "#shop";
    });
  }

  // Contact form handling (only for Contact page)
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      alert(Thank you, ${name}! Your message has been sent.);
      form.reset();
    });
  }
});