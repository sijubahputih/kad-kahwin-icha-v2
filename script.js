// =============================
// LOAD WEDDING DATA
// =============================

const openingGroom =
  document.getElementById("openingGroom");

const openingBride =
  document.getElementById("openingBride");

const heroGroom =
  document.getElementById("heroGroom");

const heroBride =
  document.getElementById("heroBride");

openingGroom.textContent =
  wedding.groom.first;

openingBride.textContent =
  wedding.bride.first;

heroGroom.textContent =
  wedding.groom.first;

heroBride.textContent =
  wedding.bride.first;

document.getElementById(
  "openingDate"
).textContent = wedding.dateShort;

document.getElementById(
  "heroDate"
).textContent =
  wedding.day + ", " + wedding.date;


// =============================
// OPEN INVITATION
// =============================

function openInvitation() {

  const opening =
    document.getElementById("opening");

  const main =
    document.getElementById("mainContent");

  opening.classList.add(
    "opening-hide"
  );

  setTimeout(function () {

    main.classList.add("show");

    window.scrollTo(0, 0);

  }, 900);

}


// =============================
// COUNTDOWN
// =============================

const targetDate =
  new Date(
    wedding.countdown
  ).getTime();

function updateCountdown() {

  const now =
    new Date().getTime();

  const distance =
    targetDate - now;

  if (distance <= 0) {
    return;
  }

  const days =
    Math.floor(
      distance /
      (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      (
        distance /
        (1000 * 60 * 60)
      ) % 24
    );

  const minutes =
    Math.floor(
      (
        distance /
        (1000 * 60)
      ) % 60
    );

  const seconds =
    Math.floor(
      (
        distance /
        1000
      ) % 60
    );

  document.getElementById(
    "days"
  ).textContent = days;

  document.getElementById(
    "hours"
  ).textContent = hours;

  document.getElementById(
    "minutes"
  ).textContent = minutes;

  document.getElementById(
    "seconds"
  ).textContent = seconds;

}

updateCountdown();

setInterval(
  updateCountdown,
  1000
);
