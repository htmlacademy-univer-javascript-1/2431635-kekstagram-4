const RERENDER_DELAY = 500;

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUniqueRandomElementsArray = (photos, count) => {
  const copiedArray = photos.slice();
  const uniqueElementsArray = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = getRandomInt(0, copiedArray.length - 1);
    uniqueElementsArray.push(copiedArray[randomIndex]);
    copiedArray.splice(randomIndex, 1);
  }
  return uniqueElementsArray;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = RERENDER_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export{getRandomInt, getUniqueRandomElementsArray, isEscapeKey, debounce};
