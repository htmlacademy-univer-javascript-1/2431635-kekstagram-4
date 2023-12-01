const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const generateID = () => {
  let lastGeneretedID = 0;
  return () => {
    lastGeneretedID += 1;
    return lastGeneretedID;
  };
};

const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];
const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomArrayElement, getRandomInt, generateID, isEscapeKey};
