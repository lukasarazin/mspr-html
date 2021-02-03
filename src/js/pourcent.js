const counterNumber = {
    element : document.querySelector(".number span"),

    init: function(){
        let pourcent = 100;
        let numberEnd = this.element.innerHTML;
        let numberStart =  Math.round(numberEnd - (numberEnd/100)*pourcent);
        this.anim(numberStart,numberEnd, 500);
    },
    anim: function(start,end,speed){

        this.speed = speed/30;
        setInterval(()=>{

            if(start<end) { this.element.innerHTML= start++}
            else{this.element.innerHTML = end; }
        },this.speed)

    }
}
counterNumber.init();