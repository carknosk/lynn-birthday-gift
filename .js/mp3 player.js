//misc variables
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");
const button = document.getElementById('play-pause-btn');
let currenttrackDisplay = document.querySelector(".current-track");

//button variables
const deadmilkmenbtn1 = document.getElementById("deadmilkmenbtn1")
const phantogrambtn1 = document.getElementById("phantogrambtn1")
const femtanylbtn1 = document.getElementById("femtanylbtn1")
const lemondemonbtn1 = document.getElementById("lemondemonbtn1")
const lemondemonbtn2 = document.getElementById("lemondemonbtn2")

//song variables
const deadmilkmentrack1 = document.getElementById("dead-milkmen")
const phantogramtrack1 = document.getElementById("futuristic-casket")
const femtanyltrack1 = document.getElementById("man-bites-dog")
const lemondemontrack1 = document.getElementById("mask-of-my-own-face")
const lemondemontrack2 = document.getElementById("ultimate-showdown")

//current track variable
let track = deadmilkmentrack1;

//play button
button.addEventListener('click', () => {
  if (track.paused) {
    track.play();
    button.textContent = '⏸ Pause';

  } else {
    track.pause();
    button.textContent = '▶ Play';
  }
});

//song selector
dropdownBtn.addEventListener("click", function (event) {
  event.stopPropagation(); 
  dropdownContent.classList.toggle("show");
});

window.addEventListener("click", function (event) {
  if (!dropdownContent.contains(event.target)) {
    dropdownContent.classList.remove("show");
  }
});

deadmilkmenbtn1.addEventListener('click', () => {
    if (track && track !== deadmilkmentrack1) {
        track.pause();
        track.currentTime = 0;
    }

    track = deadmilkmentrack1;
    track.play();
    button.textContent = '⏸ Pause';

    currenttrackDisplay.textContent = "Current Song: Lesbian Eskimo Midget Left-Handed Ninja Albino";
    dropdownContent.classList.remove("show");
});

phantogrambtn1.addEventListener('click', () => {
    if (track && track !== phantogramtrack1) {
        track.pause();
        track.currentTime = 0;
    }

    track = phantogramtrack1;
    track.play();
    button.textContent = '⏸ Pause';

    currenttrackDisplay.textContent = "Current Song: Futuristic Casket";
    dropdownContent.classList.remove("show");
});

femtanylbtn1.addEventListener('click', () => {
    if (track && track !== femtanyltrack1) {
        track.pause();
        track.currentTime = 0;
    }

    track = femtanyltrack1;
    track.play();
    button.textContent = '⏸ Pause';

    currenttrackDisplay.textContent = "Current Song: Man Bites Dog";
    dropdownContent.classList.remove("show");
});

lemondemonbtn1.addEventListener('click', () => {
    if (track && track !== lemondemontrack1) {
        track.pause();
        track.currentTime = 0;
    }

    track = lemondemontrack1;
    track.play();
    button.textContent = '⏸ Pause';

    currenttrackDisplay.textContent = "Current Song: A Mask of My Own Face";
    dropdownContent.classList.remove("show");
});

lemondemonbtn2.addEventListener('click', () => {
    if (track && track !== lemondemontrack2) {
        track.pause();
        track.currentTime = 0;
    }

    track = lemondemontrack2;
    track.play();
    button.textContent = '⏸ Pause';

    currenttrackDisplay.textContent = "Current Song: Ultimate Showdown Of Ultimate Destiny";
    dropdownContent.classList.remove("show");
});