function Stopwatch(elem) {
    let time = 0;
    let offset;
    let interval;

    function lapOn() {
        let lapTime = lap_box.appendChild(document.createElement("li"))
        lapTime.innerHTML = elem.textContent;
        lapTime.classList = 'lapItem'
    }

    function lapOff() {
        return;
    }

    function update() {
        if (this.isOn) {
            time += delta();
        }
        elem.textContent = timeFormatter(time);
    }

    function delta() {
        let now = Date.now();
        let timePassed = now - offset;

        offset = now;

        return timePassed;
    }

    function timeFormatter(time) {
        time = new Date(time);

        let minutes = time.getMinutes().toString();
        let seconds = time.getSeconds().toString();
        let milliseconds = time.getMilliseconds().toString();

        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }

        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds;
        }

        let result = minutes + ' : ' + seconds + ' : ' + milliseconds;

        return result;
    }

    this.start = function() {
        interval = setInterval(update.bind(this), 1);
        offset = Date.now();
        this.isOn = true;
    };

    this.stop = function() {
        clearInterval(interval);
        interval = null;
        this.isOn = false;
    };

    this.reset = function() {
        time = 0;
        lap_box.innerHTML = '';
        interval = null;
        this.isOn = false;
        update();
    };

    this.lapOn = function() {
        lapOn();
    }

    this.lapOff = function() {
        lapOff();
    }

    this.isOn = false;
}