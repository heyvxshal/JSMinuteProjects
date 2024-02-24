const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");

let index = 0;

function imgSlider() {
  index++;

  if (index > img.length - 1) {
    index = 0;
  }

  imgs.style.transform = `translateX(${-index * 1000}px)`;
}

setInterval(imgSlider, 2000);
