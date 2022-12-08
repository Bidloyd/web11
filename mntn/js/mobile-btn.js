const navBtn = document.querySelector(".mobile__nav");
const mobileNav = document.querySelector(".mobile__menu");
const mobileNavActive = document.querySelector("mobile__menu-active");
//Opening mmobile menu and switching mobile btn
navBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("mobile__menu-active");
  navBtn.classList.toggle("mobile__nav-close");
});
//Closing mobile menu when click is outside the div
window.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest(".mobile__menu") && !target.closest(".mobile__nav")) {
    mobileNav.classList.remove("mobile__menu-active");
    navBtn.classList.remove("mobile__nav-close");
  }
});
