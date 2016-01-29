

function getTime(){
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
if(hour>12){
	hour=hour-12;
}
var time = hour + ":" + minute + ":" + second;

var clock = document.getElementById("div");

clock.innerHTML = time
requestAnimationFrame(getTime);
}

getTime()

