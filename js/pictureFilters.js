const SCALE_STEP = 25;
const MAX_SCALE = 100;
const STANDARD_SCALE =100;

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const picturePreview = document.querySelector('.img-upload__preview img');
const sliderValue = document.querySelector('.effect-level__value');
const sliderContainerElement = document.querySelector('.effect-level__slider');
const filterItems = document.querySelectorAll('.effects__item');
let filterName = '';

scaleSmallerButton.addEventListener('click', () => {
  const scaleInputValue = Number(scaleInput.value.split('%')[0]);
  if (scaleInputValue - SCALE_STEP >= SCALE_STEP) {
    scaleInput.value = `${scaleInputValue - SCALE_STEP}%`;
    picturePreview.style.transform = `scale(${Number(scaleInput.value.split('%')[0])/STANDARD_SCALE})`;
  }
});

scaleBiggerButton.addEventListener('click', () => {
  const scaleInputValue = Number(scaleInput.value.split('%')[0]);
  if (scaleInputValue + SCALE_STEP <= MAX_SCALE) {
    scaleInput.value = `${scaleInputValue + SCALE_STEP}%`;
    picturePreview.style.transform = `scale(${Number(scaleInput.value.split('%')[0])/STANDARD_SCALE})`;
  }
});

noUiSlider.create(sliderContainerElement, {
  connect: 'lower',
  start: 1,
  step: 0.1,
  range: {'min': 0, 'max': 1},
});

sliderContainerElement.noUiSlider.on('update', () => {
  sliderValue.value = sliderContainerElement.noUiSlider.get();
  const filter = filterName.split(' ');
  picturePreview.style.filter = `${filter[0]}(${sliderValue.value}${filter[1]})`;
});

filterItems.forEach((filter) => {
  const filterValue = filter.querySelector('input').value;
  switch (filterValue) {
    case 'none':
      filter.addEventListener('click', () => {
        sliderContainerElement.parentNode.classList.add('hidden');
        picturePreview.style.filter = 'none';
      });
      break;
    case 'chrome':
      filter.addEventListener('click', () => {
        sliderContainerElement.parentNode.classList.remove('hidden');
        filterName = 'grayscale ';
        sliderContainerElement.noUiSlider.updateOptions({
          start: 1,
          step: 0.1,
          range: {'min': 0, 'max': 1},
        });
      });
      break;
    case 'sepia':
      filter.addEventListener('click', () => {
        sliderContainerElement.parentNode.classList.remove('hidden');
        filterName = 'sepia ';
        sliderContainerElement.noUiSlider.updateOptions({
          start: 1,
          step: 0.1,
          range: {'min': 0, 'max': 1},
        });
      });
      break;
    case 'marvin':
      filter.addEventListener('click', () => {
        sliderContainerElement.parentNode.classList.remove('hidden');
        filterName = 'invert %';
        sliderContainerElement.noUiSlider.updateOptions({
          step: 1,
          start: 100,
          range: { 'min': 0, 'max': 100 }
        });
      });
      break;
    case 'phobos':
      filter.addEventListener('click', () => {
        sliderContainerElement.parentNode.classList.remove('hidden');
        filterName = 'blur px';
        sliderContainerElement.noUiSlider.updateOptions({
          step: 0.1,
          start: 3,
          range: { 'min': 0, 'max': 3 }
        });
      });
      break;
    case 'heat':
      filter.addEventListener('click', () => {
        sliderContainerElement.parentNode.classList.remove('hidden');
        filterName = 'brightness ';
        sliderContainerElement.noUiSlider.updateOptions({
          step: 0.1,
          start: 3,
          range: { 'min': 1, 'max': 3}
        });
      });
      break;
  }
});
