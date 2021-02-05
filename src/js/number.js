const counterNumber = {

    element: document.getElementById("number-one"),

    init: function () {
        let numberStart = 0;
        let numberEnd = 4;
        let speed = 2000 / numberEnd;
        this.anim(numberStart, numberEnd, speed);
    },

    anim: function (start, end, speed) {
        let interval = setInterval(() => {
            if (start <= end) {
                this.element.innerHTML = start++;
            } else {
                clearInterval(interval);
            }
        }, speed)
    }
}

counterNumber.init();



