const newYears = "1 Jan 2023";

const daysEl = document.getElementById("days-el");
const hoursEl = document.getElementById("hours-el");
const minsEl = document.getElementById("mins-el");
const secondsEl = document.getElementById("seconds-el");

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const diff = Math.abs(newYearsDate - currentDate);
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = days;
  hoursEl.textContent = formatTime(hours);
  minsEl.textContent = formatTime(mins);
  secondsEl.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
