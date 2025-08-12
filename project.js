// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});

// Feedback Form Submission
document.getElementById("feedback-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("form-message").textContent = "✅ Thank you for your feedback!";
    this.reset();
});

// Highlight active nav link
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const dropdownMenu = document.getElementById("dropdown-menu");

hamburger.addEventListener("click", () => {
    dropdownMenu.style.display =
        dropdownMenu.style.display === "flex" ? "none" : "flex";
});
