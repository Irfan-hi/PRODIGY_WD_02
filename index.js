let startTime, updatedTime, difference = 0, tInterval;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function start() {
  if (!running) {
    startTime = new Date().getTime() - difference;
    tInterval = setInterval(updateTime, 100); // update every 100ms
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(tInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(tInterval);
  running = false;
  difference = 0;
  display.innerHTML = "00:00:00";
  laps.innerHTML = "";
}

function lap() {
  if (running) {
    const li = document.createElement("li");
    li.innerText = display.innerText;
    laps.appendChild(li);
  }
}

function updateTime() {
  updatedTime = new Date().getTime() - startTime;

  let hours = Math.floor(updatedTime / (1000 * 60 * 60));
  let minutes = Math.floor((updatedTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((updatedTime % (1000 * 60)) / 1000);

  // add leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = `${hours}:${minutes}:${seconds}`;
}
