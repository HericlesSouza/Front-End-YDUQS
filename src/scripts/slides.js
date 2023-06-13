const cardList = document.querySelector('.card-list');
const dotsContainer = document.querySelector('.dots');
const arrows = document.querySelectorAll('.arrow');
const dotWrappers = [];
const dots = [];
let currentSlide = 0;

const originalSlides = Array.from(cardList.children);
const duplicatedSlides = originalSlides.map((slide) => slide.cloneNode(true));
cardList.append(...duplicatedSlides);

for (let i = 0; i < originalSlides.length; i++) {
  const dotWrapper = document.createElement('div');
  dotWrapper.classList.add('dot-wrapper');

  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) {
    dot.classList.add('active');
    dotWrapper.style.borderColor = 'blue';
  }

  dotWrapper.appendChild(dot);
  dotWrappers.push(dotWrapper);
  dots.push(dot);
  dotsContainer.appendChild(dotWrapper);
}

arrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    if (arrow.classList.contains('left')) {
      slideTo(currentSlide - 1);
    } else if (arrow.classList.contains('right')) {
      slideTo(currentSlide + 1);
    }
  });
});


dotWrappers.forEach((dotWrapper, index) => {
  dotWrapper.addEventListener('click', () => {
    slideTo(index);
  });
});


function slideTo(slideIndex) {
  const totalSlides = originalSlides.length;

  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  cardList.style.transform = `translateX(-${slideIndex * 370}px)`;

  dots[currentSlide].parentNode.classList.remove('active');
  dots[slideIndex].parentNode.classList.add('active');

  dotWrappers[currentSlide].style.borderColor = 'transparent'; 
  dotWrappers[slideIndex].style.borderColor = '#12284C'; 
  currentSlide = slideIndex;
}
