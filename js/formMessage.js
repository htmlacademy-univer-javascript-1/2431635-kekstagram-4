import {isEscapeKey} from './util.js';

const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;
const body = document.body;

const hideMessage = () => {
  const message = document.querySelector('.success') || document.querySelector('.error');
  const messageCloseButton = document.querySelector('.success__button') ||
  document.querySelector('.error__button');
  document.removeEventListener('keydown', onEscapeKeydown);
  body.removeEventListener('click', onBodyClick);
  messageCloseButton.removeEventListener('click', hideMessage);
  message.remove();
};

function onBodyClick(evt) { //function должна использоваться совместно с hideMessage,  важно для предотвращения зацикливания
  if (!(evt.target.closest('.success__inner') || evt.target.closest('.error__inner'))) {
    hideMessage();
  }
}

function onEscapeKeydown(evt) { //function должна использоваться совместно с hideMessage,  важно для предотвращения зацикливания
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
}

const showMessage = (messageElement, messageCloseButton) => {
  body.append(messageElement.cloneNode(true));
  document.addEventListener('keydown', onEscapeKeydown);
  body.addEventListener('click', onBodyClick);
  body.querySelector(messageCloseButton).addEventListener('click', hideMessage);
};

const showSuccessMessage = () => showMessage(successMessageTemplate, '.success__button');

const showErrorMessage = () => showMessage(errorMessageTemplate, '.error__button');

export {showSuccessMessage, showErrorMessage};
