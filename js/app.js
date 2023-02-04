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

const giveaway = document.queryselector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);

let futureDate = new Date(2023, 4, 23, 17, 30, 0);
//console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = future.getDate();

const weekday = weekdays[futureDate.getDate()];

giveaway.textContent =
  "giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am ";

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  //values in ms
  const oneDay = 24 + 60 * 60;
}

getRemainingTime();
