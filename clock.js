var hour = document.querySelector(".hour");
var min = document.querySelector(".min");
var sec = document.querySelector(".sec");

function hourFormat(){
    var hh = new Date().getHours();
    return hh >= 12 ? hh -12 : hh;
}


setInterval(function(){
    // console.log("ola");
    var day = new Date();
    hour.style.transform = `translate(-50%) rotate(${hourFormat()*30}deg)`
    min.style.transform = `translate(-50%) rotate(${day.getMinutes()*6}deg)`
    sec.style.transform = `translate(-50%) rotate(${day.getSeconds()*6}deg)`
}, 1000)
