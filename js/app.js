const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtnModal = document.querySelector(".close-btn-modal");
const vidBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

const aboutBtns = document.querySelectorAll(".tab-btn");
const about = documetn.querySelector(".about");
const articles = document.querySelectorAll(".content");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  sidebar.classList.toggle("show-sidebar");
});

// or
// navToggle.addEventListener("click", function () {
// if(links.classList.contains('show-links')){
//     links.classList.remove('show-links')
// }else{
//     links.classList.add("show-links")
// }
// });

// sidebar

// toggleBtn.addEventListener("click", function () {

// });
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// toggleBtn.addEventListener("click", () => {
//   if (sidebar.classList.contains("show-sidebar")) {
//     sidebar.classList.remove("show-sidebar");
//   } else {
//     sidebar.classList.add("show-sidebar");
//   }
// });

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

closeBtnModal.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

//show Qustion text//
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });

//video
vidBtn.addEventListener("click", function () {
  if (!vidBtn.classList.contains("slide")) {
    vidBtn.classList.add("slide");
    video.pause();
  } else {
    vidBtn.classList.remove("slide");
    video.play();
  }
});

//preloader
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

//about section
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    //remove active from other buttons
    aboutBtns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// ---------
// countdown

const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();
