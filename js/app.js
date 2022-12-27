const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

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
