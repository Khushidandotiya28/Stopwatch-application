let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Function to start the stopwatch
function startStopwatch() {
    if (!running) {
        running = true;
        timer = setInterval(updateStopwatch, 1000);
    }
}

// Function to update the stopwatch
function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    document.querySelector("#container p").textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to pause the stopwatch
function stopStopwatch() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
}

// Function to reset the stopwatch
function resetStopwatch() {
    stopStopwatch();
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector("#container p").textContent = "00:00:00";
}

// Event listeners for buttons
document.querySelector("#start").addEventListener("click", startStopwatch);
document.querySelector("#pause").addEventListener("click", stopStopwatch);
document.querySelector("#reset").addEventListener("click", resetStopwatch);
 