const slides = document.querySelectorAll('.slide');
let current = 0;

function showNextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

// Change slide every 4 seconds
setInterval(showNextSlide, 4000);
