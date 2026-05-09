/* PLATILLOS */
const crash = document.getElementById("crash");
const ride = document.getElementById("ride");

/* TAMBORES */
const snare = document.getElementById("snare");
const tom = document.getElementById("tom");
const kick = document.getElementById("kick");

/* PLATILLO IZQUIERDO */
crash.addEventListener("click", () => {

    const audio = new Audio("assets/crash.mp3");

    audio.currentTime = 0;

    audio.play();
});

/* PLATILLO DERECHO */
ride.addEventListener("click", () => {

    const audio = new Audio("assets/Ride.mp3");

    audio.currentTime = 0;

    audio.play();
});

/* REDOBLANTE */
snare.addEventListener("click", () => {

    const audio = new Audio("assets/snare.mp3");

    audio.currentTime = 0;

    audio.play();
});

/* TOM */
tom.addEventListener("click", () => {

    const audio = new Audio("assets/tom.mp3");

    audio.currentTime = 0;

    audio.play();
});

/* BOMBO */
kick.addEventListener("click", () => {

    const audio = new Audio("assets/kick.mp3");

    audio.currentTime = 0;

    audio.play();
});