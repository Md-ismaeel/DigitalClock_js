let clock = document.querySelector(".clock").children;

function digitalTime() {
  let day = new Date();
  let hours = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();
  let AmPm = "";

  if (hours > 12) {
    hours = hours - 12;
  }

  if (hours >= 12) {
    AmPm = "Am";
  } else {
    AmPm = "Pm";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock[0].children[0].innerHTML = hours;
  clock[1].children[0].innerHTML = minutes;
  clock[2].children[0].innerHTML = seconds;
  clock[3].innerHTML = AmPm;
  setTimeout(digitalTime, 1000);
}

window.onload = () => digitalTime();
