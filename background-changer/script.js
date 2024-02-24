const btn = document.getElementById("btn");

const randNum = () => Math.floor(Math.random() * 256);

const randBgColor = () =>
  (document.body.style.backgroundColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})`);

btn.addEventListener("click", randBgColor);
