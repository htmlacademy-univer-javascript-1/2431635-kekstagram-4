import {getData} from './api.js';
import './form.js';
import './pictureFilters.js';
import { showFilteredPhotos } from './gallerySort.js';

const loadPictures = async () => {
  try {
    showFilteredPhotos(await getData());
  }
  catch (err){
    const alertMessage = document.querySelector('#alert').content;
    alertMessage.querySelector('.alert_message').textContent = err.message;
    document.body.append(alertMessage);
  }
};

loadPictures();
