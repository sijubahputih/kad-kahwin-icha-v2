// =============================
// LOAD WEDDING CONTENT
// =============================

const $ = (id) => document.getElementById(id);

$("openingGroom").textContent = wedding.groom.shortName;
$("openingBride").textContent = wedding.bride.shortName;
$("openingDate").textContent = wedding.dateShort;

$("heroGroom").textContent = wedding.groom.shortName;
$("heroBride").textContent = wedding.bride.shortName;
$("heroDate").textContent = `${wedding.day}, ${wedding.dateText}`;

// PAGE 2 DETAILS
$("groomFather").textContent = wedding.groomParents.father;
$("groomMother").textContent = wedding.groomParents.mother;
$("brideFather").textContent = wedding.brideParents.father;
$("brideMother").textContent = wedding.brideParents.mother;

$("fullGroom").textContent = wedding.groom.fullName;
$("fullBride").textContent = wedding.bride.fullName;

$("akadTime").textContent = wedding.akadTime;
$("receptionTime").textContent = wedding.receptionTime;

$("venueName").textContent = wedding.venue;
$("venueLocation").textContent = wedding.location;
$("mapButton").href = wedding.maps;



// =============================
// MUSIC
// =============================

const music = $("weddingMusic");
const musicControl = $("musicControl");

let currentTrack = "intro";
let musicEnabled = true;

function setMusicIcon() {
  musicControl.classList.toggle("playing", !music.paused);
  musicControl.textContent = music.paused ? "♫" : "♪";
}

async function playTrack(track, volume = 0.5, loop = true) {
  const source = track === "intro" ? "intro.mp3" : "main.mp3";

  currentTrack = track;
  music.pause();
  music.src = source;
  music.loop = loop;
  music.volume = volume;
  music.load();

  try {
    await music.play();
    musicEnabled = true;
  } catch (error) {
    console.log("Audio tidak dapat dimainkan:", error);
  }

  setMusicIcon();
}

function fadeOutMusic(duration = 500) {
  if (music.paused) return;

  const startVolume = music.volume;
  const steps = 15;
  let step = 0;

  const timer = setInterval(() => {
    step += 1;
    music.volume = Math.max(0, startVolume * (1 - step / steps));

    if (step >= steps) {
      clearInterval(timer);
      music.pause();
      music.volume = startVolume;
      setMusicIcon();
    }
  }, duration / steps);
}


// =============================
// OPEN INVITATION
// =============================

let invitationOpened = false;

async function openInvitation() {
  if (invitationOpened) return;
  invitationOpened = true;

  const opening = $("opening");
  const mainPage = $("mainPage");

  // Start intro directly from the user's click.
  await playTrack("intro", 0.45, false);

  opening.classList.add("is-opening");

  // Show Page 2 while the opening animation is running.
  setTimeout(() => {
    mainPage.classList.add("show");
    window.scrollTo(0, 0);
  }, 650);

  // Reuse the same unlocked audio element for the Page 2 song.
  setTimeout(async () => {
    await playTrack("main", 0.5, true);
  }, 1100);
}


// =============================
// MUSIC CONTROL
// =============================

musicControl.addEventListener("click", async function () {
  if (music.paused) {
    try {
      if (!music.src) {
        await playTrack(invitationOpened ? "main" : "intro", 0.5, invitationOpened);
      } else {
        await music.play();
      }
      musicEnabled = true;
    } catch (error) {
      console.log("Music failed:", error);
    }
  } else {
    music.pause();
    musicEnabled = false;
  }

  setMusicIcon();
});

music.addEventListener("play", setMusicIcon);
music.addEventListener("pause", setMusicIcon);


// =============================
// COUNTDOWN
// =============================

const targetDate = new Date(wedding.countdownDate).getTime();

function updateCountdown() {
  const distance = targetDate - Date.now();

  if (distance <= 0) {
    $("days").textContent = "0";
    $("hours").textContent = "0";
    $("minutes").textContent = "0";
    $("seconds").textContent = "0";
    return;
  }

  $("days").textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
  $("hours").textContent = Math.floor((distance / (1000 * 60 * 60)) % 24);
  $("minutes").textContent = Math.floor((distance / (1000 * 60)) % 60);
  $("seconds").textContent = Math.floor((distance / 1000) % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);


// =============================
// PETALS
// =============================

const petals = $("petals");

function createPetal() {
  if (!petals) return;

  const petal = document.createElement("span");
  petal.className = "petal";
  petal.style.left = Math.random() * 100 + "%";
  petal.style.animationDuration = 7 + Math.random() * 6 + "s";
  petal.style.opacity = 0.35 + Math.random() * 0.45;
  petal.style.width = 12 + Math.random() * 12 + "px";
  petal.style.height = 8 + Math.random() * 8 + "px";

  petals.appendChild(petal);

  setTimeout(() => petal.remove(), 14000);
}

setInterval(createPetal, 700);


// =============================
// FLORAL PARALLAX
// =============================

const floralTop = document.querySelector(".floral-top");
const floralBottom = document.querySelector(".floral-bottom");

window.addEventListener("mousemove", function (event) {
  const x = (event.clientX / window.innerWidth - 0.5) * 12;
  const y = (event.clientY / window.innerHeight - 0.5) * 12;

  if (floralTop) {
    floralTop.style.transform = `translate(${x}px, ${y}px)`;
  }

  if (floralBottom) {
    floralBottom.style.transform = `translate(${-x}px, ${-y}px)`;
  }
});


// =============================
// SCROLL REVEAL
// =============================

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.16
  }
);

document.querySelectorAll(".reveal-section").forEach((section) => {
  revealObserver.observe(section);
});
const heroPetals =
  document.getElementById("heroPetals");

function createHeroPetal() {

  if (!heroPetals) return;

  const petal =
    document.createElement("span");

  petal.className =
    "hero-petal";

  petal.style.left =
    Math.random() * 100 + "%";

  petal.style.animationDuration =
    8 + Math.random() * 6 + "s";

  petal.style.opacity =
    0.3 + Math.random() * 0.35;

  petal.style.width =
    10 + Math.random() * 10 + "px";

  petal.style.height =
    7 + Math.random() * 7 + "px";

  heroPetals.appendChild(petal);

  setTimeout(function () {
    petal.remove();
  }, 15000);
}

setInterval(
  createHeroPetal,
  1000
);
function renderContacts() {

  const groomContainer =
    document.getElementById("groomContacts");

  const brideContainer =
    document.getElementById("brideContacts");


  wedding.contacts.groom.forEach(function(contact) {

    const link =
      document.createElement("a");

    link.className =
      "contact-button";

    link.href =
      "https://wa.me/" + contact.phone;

    link.target =
      "_blank";

    link.innerHTML =
      `
      <span class="contact-icon">☎</span>

      <span class="contact-info">
        <strong>${contact.name}</strong>
        <small>${contact.display}</small>
      </span>
      `;

    groomContainer.appendChild(link);

  });


  wedding.contacts.bride.forEach(function(contact) {

    const link =
      document.createElement("a");

    link.className =
      "contact-button";

    link.href =
      "https://wa.me/" + contact.phone;

    link.target =
      "_blank";

    link.innerHTML =
      `
      <span class="contact-icon">☎</span>

      <span class="contact-info">
        <strong>${contact.name}</strong>
        <small>${contact.display}</small>
      </span>
      `;

    brideContainer.appendChild(link);

  });

}

renderContacts();
