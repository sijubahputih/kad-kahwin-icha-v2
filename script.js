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

function openInvitation() {

  const opening =
    document.getElementById(
      "opening"
    );

  const mainPage =
    document.getElementById(
      "mainPage"
    );

  opening.classList.add(
    "is-opening"
  );

  setTimeout(function () {

    mainPage.classList.add(
      "show"
    );

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

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
