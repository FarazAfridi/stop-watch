var sec = 0;
var min = 0;
var hour = 0;

var secElement = document.getElementById("sec");
var minElement = document.getElementById('min');
var hourElement = document.getElementById('hour');

var interval;

function timer(){
    sec++;
    secElement.innerHTML = sec;
    if(sec >= 60){
        sec = 0;
        min++;
        minElement.innerHTML = min;
    }
    if (min >= 60){
        min = 0;
        hour++;
        hourElement.innerHTML = hour;
    }
}

function start (){
    interval = setInterval(timer, 1000);
    button.setAttribute('disabled', 'disabled');
}

function stop (){
    clearInterval(interval);
    button.removeAttribute("disabled");
}

function reset (){
    sec = 0;
    min = 0;
    hour = 0;
    secElement.innerHTML = sec;
    minElement.innerHTML = min;
    hourElement.innerHTML = hour;
    stop()
}
var button = document.getElementById('start-button');
button.setAttribute('disabled', 'disabled');

interval = setInterval(timer, 1000);
