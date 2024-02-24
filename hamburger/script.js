const btnOpen = document.getElementById("btn");
const nav = document.getElementById("nav");

btnOpen.addEventListener("click", function () {
  nav.classList.toggle("active");
  btnOpen.classList.toggle("active");
});
