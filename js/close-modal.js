import { refs } from './refs';
import { onPressEscape } from './open-modal';
import gallery from './gallery-items';
// закрытие модального окна
function onCloseModal() {
  refs.modal.classList.remove('is-open');
  refs.largeImage.src = '';
  refs.largeImage.alt = '';
  window.removeEventListener('keydown', onPressEscape);
  window.removeEventListener('keydown', onNextImgGallery);
}

// закрытие по клику на Backdrop

function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

// Пролистование галереи фотографий

function onNextImgGallery(event) {
  const rightKey = 'ArrowRight';
  const leftKey = 'ArrowLeft';

  let findIndexImg = gallery.findIndex(
    img => img.original === refs.largeImage.src,
  );

  if (event.code === leftKey) {
    if (findIndexImg === 0) {
      return;
    }
    findIndexImg -= 1;
  }

  if (event.code === rightKey) {
    if (findIndexImg === gallery.length - 1) {
      return;
    }
    findIndexImg += 1;
  }
  refs.largeImage.src = gallery[findIndexImg].original;
  refs.largeImage.alt = gallery[findIndexImg].description;
}

export { onCloseModal, onBackDropClick, onNextImgGallery };
