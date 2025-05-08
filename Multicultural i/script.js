let list = document.querySelector(".carousel .list");
let items = document.querySelectorAll(".carousel .list .item");
let dots = document.querySelectorAll(".carousel .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadCarousel();
};
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  reloadCarousel();
};
let refreshCarousel = setInterval(() => {
  next.click();
}, 3000);
function reloadCarousel() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lastActiveDot = document.querySelector(".carousel .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");
  clearInterval(refreshCarousel);
  refreshCarousel = setInterval(() => {
    next.click();
  }, 3000);
}
dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadCarousel();
  });
});
