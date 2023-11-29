import { isEscapeKey } from './util.js';

const fullsizePictureElement = document.querySelector('.big-picture');
const bodyElement = document.body;
const closeButtonElement = fullsizePictureElement.querySelector('#picture-cancel');

const fillComments = (comments) => {
  const commentsContainerElement = fullsizePictureElement.querySelector('.social__comments');
  const commentTemplateElement = fullsizePictureElement.querySelector('.social__comment');
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const clonedCommentElement = commentTemplateElement.cloneNode(true);
    const { avatar, name, message } = comment;
    clonedCommentElement.querySelector('.social__picture').src = avatar;
    clonedCommentElement.querySelector('.social__picture').alt = name;
    clonedCommentElement.querySelector('.social__text').textContent = message;
    fragment.append(clonedCommentElement);
  });
  commentsContainerElement.innerHTML = '';
  commentsContainerElement.append(fragment);
};

const closePicture = () => {
  bodyElement.classList.remove('modal-open');
  fullsizePictureElement.classList.add('hidden');
  document.removeEventListener('keydown', closeByEscape);
};

function closeByEscape() {
  if (isEscapeKey) {
    closePicture();
  }
}

const openPicture = (picture) => {
  bodyElement.classList.add('modal-open');
  fullsizePictureElement.classList.remove('hidden');
  const { url, description, likes, comments } = picture;
  fullsizePictureElement.querySelector('.big-picture__img img').src = url;
  fullsizePictureElement.querySelector('.likes-count').textContent = likes;
  fullsizePictureElement.querySelector('.comments-count').textContent = comments.length;
  fillComments(picture.comments);
  fullsizePictureElement.querySelector('.social__caption').textContent = description;
  fullsizePictureElement.querySelector('.social__comment-count').classList.add('hidden');
  fullsizePictureElement.querySelector('.comments-loader').classList.add('hidden');
  closeButtonElement.addEventListener('click', closePicture);
  document.addEventListener('keydown', closeByEscape);
};

export { openPicture };
