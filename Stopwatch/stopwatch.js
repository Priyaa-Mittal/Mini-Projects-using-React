let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

console.log("hello");
function start() {
    timer = true;
    stopwatch();
}
function reset() {
    location.reload();
}
function stop() {
    timer = false;
}
function stopwatch() {
    if (timer == true) {
        count = count + 1;
        if (count == 100) {
            count = 0;
            sec = sec + 1;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        let hrstr = hr;
        let minstr = min;
        let secstr = sec;
        let countstr = count;
        if (hrstr < 10) {
            hrstr = "0" + hrstr;
        }
        if (minstr < 10) {
            minstr = "0" + minstr;
        }
        if (secstr < 10) {
            secstr = "0" + secstr;
        }
        if (countstr < 10) {
            countstr = "0" + countstr;
        }
        document.getElementById("count").innerHTML = countstr;
        document.getElementById("sec").innerHTML = secstr;
        document.getElementById("min").innerHTML = minstr;
        document.getElementById("hour").innerHTML = hrstr;
        setTimeout("stopwatch()", 10);
    }
}