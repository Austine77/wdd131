// Scroll to shop section when button is clicked
function shopNow() {
  window.location.href = "#shop";
}

// Contact form submit handler (optional enhancement)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect form data
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate sending the message
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Reset form
    form.reset();
  });
});
