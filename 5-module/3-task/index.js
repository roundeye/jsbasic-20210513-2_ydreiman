function initCarousel() {
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  let slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  let currentSlide = 1;
  carouselArrowLeft.style.display = 'none';

  function right() {
    currentSlide++;
    carouselInner.style.transform = `translateX(-${slideWidth * (currentSlide - 1)}px)`;
    if (currentSlide === 4) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }
  }

  function left() {
    currentSlide--;
    carouselInner.style.transform = `translateX(-${slideWidth * (currentSlide - 1)}px)`;
    if (currentSlide === 1) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowRight.style.display = '';
    }
  }

  carouselArrowRight.addEventListener('click', right);
  carouselArrowLeft.addEventListener('click', left);
}
