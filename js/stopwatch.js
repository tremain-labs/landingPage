const startStopButton = document.getElementById('startStop');
const display = document.getElementById('stopwatch'); // your timer text
const resetButton = document.getElementById('reset');
let isRunning = false;
let intervalId = null;
let time = 0;

startStopButton.addEventListener('click', function () {

    if (isRunning) {
        // STOP
        clearInterval(intervalId);
        startStopButton.textContent = 'Start';
    } else {
        // START
        intervalId = setInterval(function () {
            time++;

            // format: hh:mm:ss
            let hours = Math.floor(time / 3600);
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;

            // pad with 0 if needed
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.textContent = `${hours}:${minutes}:${seconds}`;
        }, 1000);

        startStopButton.textContent = 'Stop';
    }

    isRunning = !isRunning;
});

resetButton.addEventListener('click', function () {

    // stop interval if running
    clearInterval(intervalId);

    // reset time
    time = 0;

    // reset display
    display.textContent = '00:00:00';

    // reset button text
    startStopButton.textContent = 'Start';

    // reset state
    isRunning = false;
});