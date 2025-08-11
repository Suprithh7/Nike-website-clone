// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

// Feedback Form Submission
document.getElementById("feedback-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("form-message").textContent = "✅ Thank you for your feedback!";
    this.reset();
});
