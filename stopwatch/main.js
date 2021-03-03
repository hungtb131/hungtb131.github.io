let timer = document.querySelector('.timer');
let toggleBtn = document.querySelector('.toggle');
let resetBtn = document.querySelector('.reset');
let lapBtn = document.querySelector('.lap');
let lap_box = document.querySelector('.lap_box');

let watch = new Stopwatch(timer);

function start() {
    toggleBtn.textContent = 'Stop';
    toggleBtn.classList.toggle("on");
    watch.start();
}

function stop() {
    toggleBtn.textContent = 'Start';
    toggleBtn.classList.toggle("on")
    watch.stop();
}

function stopWhenOn() {
    toggleBtn.textContent = 'Start';
    toggleBtn.classList.toggle("on")
    watch.stop();
    watch.reset();
}

toggleBtn.addEventListener('click', function() {
    watch.isOn ? stop() : start();
});

resetBtn.addEventListener('click', function() {
    watch.isOn ? stopWhenOn() : watch.reset();
    // stop();
});

lapBtn.addEventListener('click', function() {
    watch.isOn ? watch.lapOn() : watch.lapOff();
})