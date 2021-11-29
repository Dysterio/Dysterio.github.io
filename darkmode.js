let darkModeEnabled = true;

// let button = document.querySelector("input");
// button.addEventListener("click", toggleLightMode);

function toggleLightMode() {
    let element = document.body;
    element.classList.toggle("light-mode");
    darkModeEnabled = !darkModeEnabled;
    flipImages();
}

function flipImages() {
    let angle = darkModeEnabled ? 0 : 180;
    document.querySelectorAll(".flip-card .flip-card-inner").forEach((elem) => {
        elem.style.transform = `rotateY(${angle}deg)`;
    });
}
