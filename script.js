// Fade-in effect on page load
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
});

// Smooth transition when clicking links
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent immediate navigation
        const targetUrl = this.href;

        document.body.style.opacity = "0"; // Fade out
        setTimeout(() => {
            window.location.href = targetUrl; // Navigate after fade-out
        }, 500); // Adjust timing to match transition
    });
});
