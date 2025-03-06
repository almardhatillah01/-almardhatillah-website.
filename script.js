document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("background-music");

    // Try playing music automatically (Some browsers may block it)
    let playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // If autoplay is blocked, wait for user interaction
            document.body.addEventListener("click", function () {
                music.play();
            }, { once: true }); // Ensures it runs only once
        });
    }
});
