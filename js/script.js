const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let interval;

// Function to move slides automatically
function moveSlides() {
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    updateSlidePosition();
}

// Update slide position based on index
function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Function to manually change slides (left/right buttons)
function changeSlide(direction) {
    slideIndex += direction;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    updateSlidePosition();
}

// Auto slide every 3 seconds
function startSlideshow() {
    interval = setInterval(moveSlides, 3000);
}

// Start slideshow when page loads
document.addEventListener("DOMContentLoaded", startSlideshow);
