let inp = document.querySelector("#tej");
let bar = document.querySelector("#searchbar");

let photo = [
  "https://m.media-amazon.com/images/I/71h15GsHkvL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg"
];

let index = 0;
let slider = document.querySelector(".image-1");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

slider.style.backgroundImage = `url(${photo[index]})`;

left.onclick = function () {
  index = (index - 1 + photo.length) % photo.length;
  slider.style.backgroundImage = `url(${photo[index]})`;
};


right.onclick = function () {
  index = (index + 1) % photo.length;
  slider.style.backgroundImage = `url(${photo[index]})`;
};

bar.onclick = function () {
  window.open(`https://www.amazon.in/s?k=${inp.value}`, '_blank');
};
