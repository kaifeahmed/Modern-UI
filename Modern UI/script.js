const inputs = document.querySelectorAll(".inputField");
const toggleBtn = document.querySelectorAll(".toggle");
const main = document.querySelector('main');
const bullets = document.querySelectorAll(".bulletSlider span");
const images = document.querySelectorAll(".images");

inputs.forEach((arrItem) => {
  arrItem.addEventListener("focus", () => {
    arrItem.classList.add("active");
  });
  arrItem.addEventListener("blur", () => {
    if (arrItem.value != "") return;
    arrItem.classList.remove("active");
  });
});

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle('signUpMode');
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".textGroup");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((arrItem) => arrItem.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});