const navBtn = document.querySelector(".mobile__nav");
const mobileNav = document.querySelector(".mobile__menu");

navBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("mobile__menu-active");
  navBtn.classList.toggle("mobile__nav-close");
});
