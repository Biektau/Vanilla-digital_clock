let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

let description = document.querySelector(".description");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const setDescription = (hour) => {
  
  if (hour >= 0 && hour <= 5) {
    return message = "Good night!";
  } else if (hour >= 6 && hour <= 11) {
    return message = "Good morning!";
  } else if (hour >= 12 && hour <= 23) {
    return message = "Good evening!";
  }
  return "error"
};

setInterval(() => {
  let currentDay = new Date();
  day.innerHTML = currentDay.getDate();
  month.innerHTML = monthNames[currentDay.getMonth()];
  year.innerHTML = currentDay.getFullYear();
  description.innerHTML = setDescription(currentDay.getHours());
}, 1000);

setInterval(() => {
  let currentTime = new Date();
  hours.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minutes.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  seconds.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
