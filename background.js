// background.js

let timerId;

function startTimer() {
    // Your timer logic here
    // ...
}

chrome.runtime.onInstalled.addListener(() => {
    // Start the timer when the extension is installed or updated
    startTimer();
});

chrome.runtime.onStartup.addListener(() => {
    // Start the timer when Chrome starts
    startTimer();
});
