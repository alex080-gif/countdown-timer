const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");
let image = document.getElementById('image');
//let images = ['./img/pexels-sebastian-palomino-1862402.jpg', './img/pexels-johannes-plenio-2816284.jpg', './img/pexels-thgusstavo-santana-2102587.jpg', './img/Traditional.JPG', './img/pexels-fomstock-com-1115804.jpg']

const newYears = "2024";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60)%60;
    const secs = Math.floor(totalSeconds)%60;

    daysEl.innerHTML =days;
    hoursEl.innerHTML =formatTime(hours);
    minsEl.innerHTML =formatTime(mins);
    secsEl.innerHTML =formatTime(secs);


}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
};

function changePicture(){

};

//Try Changing Background images with setInterval
//setInterval(function() => {
//    let random = Math.floor(Math.random() * 4);
//    image.src = images[random];
//}, 800);

countdown();

setInterval(countdown, 1000);