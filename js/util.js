const RERENDER_DELAY = 500;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUniqueRandomElements = (photos, count) => {
  const copiedElements = photos.slice();
  const uniqueElements = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = getRandomInteger(0, copiedElements.length - 1);
    uniqueElements.push(copiedElements[randomIndex]);
    copiedElements.splice(randomIndex, 1);
  }
  return uniqueElements;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = RERENDER_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export{getRandomInteger, getUniqueRandomElements, isEscapeKey, debounce};
