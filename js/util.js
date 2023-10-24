const getRandomArrayElement = {elements} => elements[getRandomInt(0, elements.length - 1)];

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

export {getRandomArrayElement, getRandomInt, generateID};

