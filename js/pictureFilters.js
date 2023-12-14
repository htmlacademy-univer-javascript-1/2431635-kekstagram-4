const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const picturePreview = document.querySelector('.img-upload__preview img');
const sliderValue = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.effect-level__slider');
const filterItems = document.querySelectorAll('.effects__item');
let filterName = '';

scaleSmallerButton.addEventListener('click', () => {
  const scaleInputValue = Number(scaleInput.value.split('%')[0]);
  if (scaleInputValue - 25 >= 25) {
    scaleInput.value = `${scaleInputValue - 25}%`;
    picturePreview.style.transform = `scale(${Number(scaleInput.value.split('%')[0])/100})`;
  }
});

scaleBiggerButton.addEventListener('click', () => {
  const scaleInputValue = Number(scaleInput.value.split('%')[0]);
  if (scaleInputValue + 25  <= 100) {
    scaleInput.value = `${scaleInputValue + 25}%`;
    picturePreview.style.transform = `scale(${Number(scaleInput.value.split('%')[0])/100})`;
  }
});

noUiSlider.create(sliderContainer, {
  connect: 'lower',
  start: 1,
  step: 0.1,
  range: {'min': 0, 'max': 1},
});

sliderContainer.noUiSlider.on('update', () => {
  sliderValue.value = sliderContainer.noUiSlider.get();
  picturePreview.style.filter = `${filterName.split(' ')[0]}(${sliderValue.value}${filterName.split(' ')[1]})`;
});

filterItems.forEach((filter) => {
  const filterValue = filter.querySelector('input').value;
  switch (filterValue) {
    case 'none':
      filter.addEventListener('click', () => {
        sliderContainer.parentNode.classList.add('hidden');
        picturePreview.style.filter = 'none';
      });
      break;
    case 'chrome':
      filter.addEventListener('click', () => {
        sliderContainer.parentNode.classList.remove('hidden');
        filterName = 'grayscale ';
        sliderContainer.noUiSlider.updateOptions({
          start: 1,
          step: 0.1,
          range: {'min': 0, 'max': 1},
        });
      });
      break;
    case 'sepia':
      filter.addEventListener('click', () => {
        sliderContainer.parentNode.classList.remove('hidden');
        filterName = 'sepia ';
        sliderContainer.noUiSlider.updateOptions({
          start: 1,
          step: 0.1,
          range: {'min': 0, 'max': 1},
        });
      });
      break;
    case 'marvin':
      filter.addEventListener('click', () => {
        sliderContainer.parentNode.classList.remove('hidden');
        filterName = 'invert %';
        sliderContainer.noUiSlider.updateOptions({
          step: 1,
          start: 100,
          range: { 'min': 0, 'max': 100 }
        });
      });
      break;
    case 'phobos':
      filter.addEventListener('click', () => {
        sliderContainer.parentNode.classList.remove('hidden');
        filterName = 'blur px';
        sliderContainer.noUiSlider.updateOptions({
          step: 0.1,
          start: 3,
          range: { 'min': 0, 'max': 3 }
        });
      });
      break;
    case 'heat':
      filter.addEventListener('click', () => {
        sliderContainer.parentNode.classList.remove('hidden');
        filterName = 'brightness ';
        sliderContainer.noUiSlider.updateOptions({
          step: 0.1,
          start: 3,
          range: { 'min': 1, 'max': 3}
        });
      });
      break;
  }
});
