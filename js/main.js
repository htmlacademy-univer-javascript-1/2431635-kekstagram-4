const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateComment = () => {
  const avatars = [
    'img/avatar-1.svg',
    'img/avatar-2.svg',
    'img/avatar-3.svg',
    'img/avatar-4.svg',
    'img/avatar-5.svg',
    'img/avatar-6.svg',
  ];
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];
  const names = [
    'Алексей',
    'Дмитрий',
    'Иван',
    'Мария',
    'Елена',
    'Ольга',
    'Андрей',
    'Сергей',
    'Владимир',
    'Наталья',
  ];
  const comment = {
    id: getRandomInt(1, 100000),
    avatar: getRandomArrayElement(avatars),
    message: getRandomArrayElement(messages),
    name: getRandomArrayElement(names),
  };
  return comment;
};

const characteristics = [
  'Красивый закат на пляже',
  'Уютный домик среди зелени',
  'Милый котенок на подоконнике',
  'Интересный фасад здания',
  'Красивые листья осени на земле',
];

const generatePhotos = (count) => {
  const photos = [];

  for (let i = 1; i <= count; i++) {
    const photo = {
      id: i,
      url: photos/{{i}}.jpg,
      description: getRandomArrayElement(characteristics),
      likes: getRandomInt(15, 200),
      comments: [],
    };
    for (let j = 1; j <= getRandomInt(1, 10); j++) {
      photo.comments.push(generateComment());
    }
    photos.push(photo);
  }

  return photos;
};
