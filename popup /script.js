const open = document.getElementById("open");
const close = document.getElementById("close");
const popupCon = document.querySelector(".popup-container");

open.addEventListener("click", function () {
  popupCon.classList.add("active");
});

close.addEventListener("click", function () {
  popupCon.classList.remove("active");
});
