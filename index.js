let clock = document.querySelector(".clock").children;

function digitalTime() {
  let day = new Date();
  console.log(day);
  let hours = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();
  let amPm = "";

  if (hours > 12) {
    hours = hours - 12;
  }

  if (hours >= 12) {
    amPm = "Am";
  } else {
    amPm = "Pm";
  }

  // hours = hours < 10 ? "0" + hours : hours;
  // minutes = minutes < 10 ? "0" + minutes : minutes;
  // seconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours < 10) {
    hours += "0";
  } else {
    hours = hours;
  }

  if (minutes < 10) {
    minutes += "0";
  } else {
    minutes = minutes;
  }

  if (seconds < 10) {
    seconds += "0";
  } else {
    seconds = seconds;
  }

  clock[0].children[0].innerHTML = hours;
  clock[1].children[0].innerHTML = minutes;
  clock[2].children[0].innerHTML = seconds;
  clock[3].innerHTML = amPm;
  setTimeout(digitalTime, 1000);
}

window.onload = () => digitalTime();
