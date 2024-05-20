
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function pad(number) {
    return (number < 10) ? "0" + number : number;
}

function displayTime() {
    const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.querySelector(".timer").textContent = formattedTime;
}


function handleStart() {
    if(!timer){
        timer = setInterval(() => {
            seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
        }, 1000);
    }
}

function handleStop() {
    clearInterval(timer);
    timer=null;
    displayTime();
    
}


function handleReset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
}

