const popupBtn = document.querySelector(".read-more");
const popupBtn2 = document.querySelector(".read-more2");
const popupBtn3 = document.querySelector(".read-more3");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

popupBtn.addEventListener("click", function (e) {
  popup.classList.add("active");
});
popupBtn2.addEventListener("click", function (e) {
  popup.classList.add("active");
});
popupBtn3.addEventListener("click", function (e) {
  popup.classList.add("active");
});
popupClose.addEventListener("click", () => {
  popup.classList.remove("active");
});
window.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest(".popup") && !target.closest(".read-more")) {
    popup.classList.remove("active");
  }
});
