

function timer(){
    let dedlain = '2022-11-01';

     function geTtimeRemaring(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),

        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60)% 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
      };

     }
     function setClock( id ,endtime){
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(upDateclok, 1000);

        function upDateclok(){
            let t = geTtimeRemaring(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
     }
     setClock('timer', dedlain);
}
module.exports = timer;


function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);