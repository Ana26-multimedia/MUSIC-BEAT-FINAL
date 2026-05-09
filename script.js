
const crash = document.getElementById("crash");
const ride = document.getElementById("ride");


const snare = document.getElementById("snare");
const tom = document.getElementById("tom");
const kick = document.getElementById("kick");


crash.addEventListener("click", () => {

    const audio = new Audio("assets/crash.mp3");

    audio.currentTime = 0;

    audio.play();
});

ride.addEventListener("click", () => {

    const audio = new Audio("assets/Ride.mp3");

    audio.currentTime = 0;

    audio.play();
});

snare.addEventListener("click", () => {

    const audio = new Audio("assets/snare.mp3");

    audio.currentTime = 0;

    audio.play();
});


tom.addEventListener("click", () => {

    const audio = new Audio("assets/tom.mp3");

    audio.currentTime = 0;

    audio.play();
});

kick.addEventListener("click", () => {

    const audio = new Audio("assets/kick.mp3");

    audio.currentTime = 0;

    audio.play();
});