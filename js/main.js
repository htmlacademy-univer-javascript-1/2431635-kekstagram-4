import {renderPictures} from './renderPictures.js';
import {getData} from './api.js';
import './form.js';
import './pictureFilters.js';

const loadPictures = async () => {
  try {
    renderPictures(await getData());
  }
  catch (err){
    const alertMessage = document.querySelector('#alert').content;
    alertMessage.querySelector('.alert_message').textContent = err.message;
    document.body.append(alertMessage);
  }
};

loadPictures();
