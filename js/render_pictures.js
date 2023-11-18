const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const renderPicture = ({url, description, likes, comments}) => {
  const clonedPicture = pictureTemplate.cloneNode(true);
  clonedPicture.querySelector('img').src = url;
  clonedPicture.querySelector('img').alt = description;
  clonedPicture.querySelector('.picture__likes').textContent = likes;
  clonedPicture.querySelector('.picture__comments').textContent = comments.length;
  return clonedPicture;
};

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    fragment.append(renderPicture(picture));
  });
  picturesContainer.append(fragment);
};

export {renderPictures};
