// =============================
// LOAD WEDDING CONTENT
// =============================

document.getElementById(
  "openingGroom"
).textContent =
  wedding.groom.shortName;

document.getElementById(
  "openingBride"
).textContent =
  wedding.bride.shortName;

document.getElementById(
  "openingDate"
).textContent =
  wedding.dateShort;

document.getElementById(
  "heroGroom"
).textContent =
  wedding.groom.shortName;

document.getElementById(
  "heroBride"
).textContent =
  wedding.bride.shortName;

document.getElementById(
  "heroDate"
).textContent =
  `${wedding.day}, ${wedding.dateText}`;


//
// OPEN INVITATION
//
function fadeOutAudio(audio, duration = 800) {

  if (!audio || audio.paused) return;

  const startVolume = audio.volume;
  const steps = 20;
  const intervalTime = duration / steps;

  let step = 0;

  const fade = setInterval(function () {

    step++;

    audio.volume =
      Math.max(
        0,
        startVolume * (1 - step / steps)
      );

    if (step >= steps) {

      clearInterval(fade);

      audio.pause();
      audio.currentTime = 0;
      audio.volume = startVolume;
    }

  }, intervalTime);
}


async function startMainMusic() {

  const main =
    document.getElementById("mainMusic");

  try {

    main.volume = 0;

    await main.play();

    fadeInAudio(main, 1200, 0.5);

  } catch (error) {

    console.log(
      "Main music blocked:",
      error
    );

  }
}


function fadeInAudio(
  audio,
  duration = 1000,
  targetVolume = 0.5
) {

  const steps = 20;
  const intervalTime = duration / steps;

  let step = 0;

  const fade = setInterval(function () {

    step++;

    audio.volume =
      Math.min(
        targetVolume,
        targetVolume * step / steps
      );

    if (step >= steps) {

      clearInterval(fade);

      audio.volume = targetVolume;
    }

  }, intervalTime);
}
async function openInvitation() 
function fadeOutAudio(audio, duration = 800) {

  if (!audio || audio.paused) return;

  const startVolume = audio.volume;
  const steps = 20;
  const intervalTime = duration / steps;

  let step = 0;

  const fade = setInterval(function () {

    step++;

    audio.volume =
      Math.max(
        0,
        startVolume * (1 - step / steps)
      );

    if (step >= steps) {

      clearInterval(fade);

      audio.pause();
      audio.currentTime = 0;
      audio.volume = startVolume;
    }

  }, intervalTime);
}


async function startMainMusic() {

  const main =
    document.getElementById("mainMusic");

  try {

    main.volume = 0;

    await main.play();

    fadeInAudio(main, 1200, 0.5);

  } catch (error) {

    console.log(
      "Main music blocked:",
      error
    );

  }
}


function fadeInAudio(
  audio,
  duration = 1000,
  targetVolume = 0.5
) {

  const steps = 20;
  const intervalTime = duration / steps;

  let step = 0;

  const fade = setInterval(function () {

    step++;

    audio.volume =
      Math.min(
        targetVolume,
        targetVolume * step / steps
      );

    if (step >= steps) {

      clearInterval(fade);

      audio.volume = targetVolume;
    }

  }, intervalTime);
}
{

  const opening =
    document.getElementById("opening");

  const mainPage =
    document.getElementById("mainPage");

  const intro =
    document.getElementById("introMusic");

  const main =
    document.getElementById("mainMusic");

  // Mainkan intro kerana pengguna sudah klik
  try {
    intro.volume = 0.55;
    intro.currentTime = 0;
    await intro.play();
  } catch (error) {
    console.log("Intro music blocked:", error);
  }

  opening.classList.add("is-opening");

  // Fade-out intro
  setTimeout(function () {

    fadeOutAudio(intro, 700);

  }, 300);

  // Masuk Page 2
  setTimeout(function () {

    mainPage.classList.add("show");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

    startMainMusic();

  }, 850);
}


// =============================
// COUNTDOWN
// =============================

const targetDate =
  new Date(
    wedding.countdownDate
  ).getTime();

function updateCountdown() {

  const now =
    Date.now();

  const distance =
    targetDate - now;

  if (distance <= 0) {

    document.getElementById(
      "days"
    ).textContent = "0";

    document.getElementById(
      "hours"
    ).textContent = "0";

    document.getElementById(
      "minutes"
    ).textContent = "0";

    document.getElementById(
      "seconds"
    ).textContent = "0";

    return;
  }

  const days =
    Math.floor(
      distance /
      (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      distance /
      (1000 * 60 * 60) %
      24
    );

  const minutes =
    Math.floor(
      distance /
      (1000 * 60) %
      60
    );

  const seconds =
    Math.floor(
      distance /
      1000 %
      60
    );

  document.getElementById(
    "days"
  ).textContent =
    days;

  document.getElementById(
    "hours"
  ).textContent =
    hours;

  document.getElementById(
    "minutes"
  ).textContent =
    minutes;

  document.getElementById(
    "seconds"
  ).textContent =
    seconds;

}

updateCountdown();

setInterval(
  updateCountdown,
  1000
);
const petals =
  document.getElementById("petals");

function createPetal() {

  const petal =
    document.createElement("span");

  petal.className = "petal";

  petal.style.left =
    Math.random() * 100 + "%";

  petal.style.animationDuration =
    7 + Math.random() * 6 + "s";

  petal.style.opacity =
    0.35 + Math.random() * 0.45;

  petal.style.width =
    12 + Math.random() * 12 + "px";

  petal.style.height =
    8 + Math.random() * 8 + "px";

  petals.appendChild(petal);

  setTimeout(function () {
    petal.remove();
  }, 14000);

}

setInterval(
  createPetal,
  700
);
const floralTop =
  document.querySelector(".floral-top");

const floralBottom =
  document.querySelector(".floral-bottom");

window.addEventListener(
  "mousemove",
  function (e) {

    const x =
      (e.clientX / window.innerWidth - 0.5) * 14;

    const y =
      (e.clientY / window.innerHeight - 0.5) * 14;

    if (floralTop) {
      floralTop.style.transform =
        `translate(${x}px, ${y}px)`;
    }

    if (floralBottom) {
      floralBottom.style.transform =
        `translate(${-x}px, ${-y}px)`;
    }

  }
);
window.addEventListener(
  "scroll",
  function () {

    const move =
      window.scrollY * 0.05;

    if (floralTop) {
      floralTop.style.transform =
        `translateY(${move}px)`;
    }

    if (floralBottom) {
      floralBottom.style.transform =
        `translateY(${-move}px)`;
    }

  }
);
const musicControl =
  document.getElementById("musicControl");

musicControl.addEventListener(
  "click",
  async function () {

    const opening =
      document.getElementById("opening");

    const intro =
      document.getElementById("introMusic");

    const main =
      document.getElementById("mainMusic");

    const openingActive =
      !opening.classList.contains("is-opening");

    const activeMusic =
      openingActive ? intro : main;

    if (activeMusic.paused) {

      try {

        activeMusic.volume = 0.5;

        await activeMusic.play();

        musicControl.classList.add(
          "playing"
        );

      } catch (error) {

        console.log(
          "Music failed:",
          error
        );

      }

    } else {

      activeMusic.pause();

      musicControl.classList.remove(
        "playing"
      );

    }

  }
);
const musicControl =
  document.getElementById("musicControl");

musicControl.addEventListener(
  "click",
  async function () {

    const opening =
      document.getElementById("opening");

    const intro =
      document.getElementById("introMusic");

    const main =
      document.getElementById("mainMusic");

    const openingActive =
      !opening.classList.contains("is-opening");

    const activeMusic =
      openingActive ? intro : main;

    if (activeMusic.paused) {

      try {

        activeMusic.volume = 0.5;

        await activeMusic.play();

        musicControl.classList.add(
          "playing"
        );

      } catch (error) {

        console.log(
          "Music failed:",
          error
        );

      }

    } else {

      activeMusic.pause();

      musicControl.classList.remove(
        "playing"
      );

    }

  }
);
