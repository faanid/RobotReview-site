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
