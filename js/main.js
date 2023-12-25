import {getData} from './api.js';
import './form.js';
import './pictureFilters.js';
import {showFilteredPhotos} from './gallerySort.js';

const loadPictures = async () => {
  try {
    showFilteredPhotos(await getData());
  }
  catch (err){
    const alertMessageTemplate = document.querySelector('#alert').content;
    alertMessageTemplate.querySelector('.alert_message').textContent = err.message;
    document.body.append(alertMessageTemplate);
  }
};

loadPictures();
