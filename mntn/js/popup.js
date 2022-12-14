const popupBtn = document.querySelector(".read-more");
const popupBtn2 = document.querySelector(".read-more2");
const popupBtn3 = document.querySelector(".read-more3");
const popupClose = document.querySelector(".popup__close");
const popupClose2 = document.querySelector(".popup__close2");
const popupClose3 = document.querySelector(".popup__close3");
const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");
const popup3 = document.querySelector(".popup3");

popupBtn.addEventListener("click", function (e) {
  popup.classList.add("active");
});
popupBtn2.addEventListener("click", function (e) {
  popup2.classList.add("active");
});
popupBtn3.addEventListener("click", function (e) {
  popup3.classList.add("active");
});
popupClose.addEventListener("click", () => {
  popup.classList.remove("active");
});
popupClose2.addEventListener("click", () => {
  popup2.classList.remove("active");
});
popupClose3.addEventListener("click", () => {
  popup3.classList.remove("active");
});
window.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest(".popup") && !target.closest(".read-more")) {
    popup.classList.remove("active");
  }
});
