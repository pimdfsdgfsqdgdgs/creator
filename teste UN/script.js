// JavaScript for Carousel
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

showSlide(currentSlide);

let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});
