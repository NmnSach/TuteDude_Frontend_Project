const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;
let isRunning = true; // Flag to track if carousel is running
let interval = setInterval(run, 2000);

function run() {
    if (isRunning) { // Check if carousel is running
        idx++;
        changeImage();
    }
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 945}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
});

leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
});

// Toggle the carousel state on clicking the container
imgs.addEventListener('click', () => {
    isRunning = !isRunning; // Toggle the flag
    if (isRunning) {
        run(); // If running, show the next image immediately
        interval = setInterval(run, 2000); // Restart the interval
    }
});

// Pause the carousel when hovered upon
imgs.addEventListener('mouseover', () => {
    isRunning = false;
});

// Resume the carousel when mouse is moved away
imgs.addEventListener('mouseout', () => {
    isRunning = true;
});
