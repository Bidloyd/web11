const popupBtn4 = document.querySelector(".read-more__top");
const popupBtn5 = document.querySelector(".read-more__bottom");
const popupBtn6 = document.querySelector(".read-more__news-top");
const popupBtn7 = document.querySelector(".read-more__news-bottom");

const popupClose4 = document.querySelector(".popup__close4");
const popupClose5 = document.querySelector(".popup__close5");
const popupClose6 = document.querySelector(".popup__close6");
const popupClose7 = document.querySelector(".popup__close7");

const popupAbout = document.querySelector(".popup__about");
const popupAbout2 = document.querySelector(".popup__about2");
const popupNews = document.querySelector(".popup__news");
const popupNews2 = document.querySelector(".popup__news2");

popupBtn4.addEventListener("click", function (e) {
  popupAbout.classList.add("active");
});
popupClose4.addEventListener("click", () => {
  popupAbout.classList.remove("active");
});
window.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest(".popup") && !target.closest(".read-more")) {
    popupAbout.classList.remove("active");
  }
});

popupBtn5.addEventListener("click", function (e) {
  popupAbout2.classList.add("active");
});
popupClose5.addEventListener("click", () => {
  popupAbout2.classList.remove("active");
});
window.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest(".popup") && !target.closest(".read-more")) {
    popupAbout2.classList.remove("active");
  }
});

popupBtn6.addEventListener("click", function (e) {
  popupNews.classList.add("active");
});
popupClose6.addEventListener("click", () => {
  popupNews.classList.remove("active");
});
window.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest(".popup") && !target.closest(".read-more")) {
    popupNews.classList.remove("active");
  }
});

popupBtn7.addEventListener("click", function (e) {
  popupNews2.classList.add("active");
});
popupClose7.addEventListener("click", () => {
  popupNews2.classList.remove("active");
});
window.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest(".popup") && !target.closest(".read-more")) {
    popupNews2.classList.remove("active");
  }
});
