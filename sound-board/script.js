const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn-sounds");

  btn.innerText = sound;
  btn.addEventListener("click", function () {
    document.querySelector(`.${sound}`).play();
  });

  document.body.appendChild(btn);
});
