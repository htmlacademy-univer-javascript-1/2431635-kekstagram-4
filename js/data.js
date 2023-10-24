import {getRandomArrayElement, getRandomInt, generateID} from "./util.js"

const PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 38;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Красивый закат на пляже',
  'Уютный домик среди зелени',
  'Милый котенок на подоконнике',
  'Интересный фасад здания',
  'Красивые листья осени на земле',
];

const NAMES = [
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

const generateCommentID = generateID();

const createMessage = () => Array.from (
  {length: getRandomInt(1,2)},
  () => getRandomArrayElement (MESSAGES),
).join(' ');

const createComment = () => {
  return {
    id:generateCommentID(),
    avatar: 'img/avatar-' + getRandomInt(1,AVATAR_COUNT) + '.svg',
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  }
};

const creatPhotos = (index) => {
  return {
    id: index,
    url: photos/{{index}}.jpg,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInt(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
    comments: Array.from (
      {length: getRandomInt(0, COMMENT_COUNT)},
      createComment,
    ),
  }
};

const generatePhotos = () => Array.from (
  {length: PHOTO_COUNT},
  {_, photoIndex} => creatPhotos(photoIndex + 1),
);

export {generatePhotos};