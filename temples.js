document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        if (navMenu.style.display === "block") {
            navMenu.style.display = "none";
            menuToggle.textContent = "☰";
        } else {
            navMenu.style.display = "block";
            menuToggle.textContent = "✖";
        }
    });

    // Dynamic Footer Year and Last Modified Date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
