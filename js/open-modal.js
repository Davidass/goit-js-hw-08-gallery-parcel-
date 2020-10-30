import { refs } from './refs';
import { onCloseModal, onNextImgGallery } from './close-modal';

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

function openGallery(event) {
  event.preventDefault(); //Подмена перехода по ссылке

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageRef = event.target;

  const largeImageURL = imageRef.dataset.source;

  refs.largeImage.src = largeImageURL; // Подмена значения атрибута src элемента img.lightbox__image.
  refs.largeImage.alt = imageRef.getAttribute('alt');

  // console.log(largeImageURL);
  refs.modal.classList.add('is-open'); // Открытие модального окна по клику на элементе галереи.
  window.addEventListener('keydown', onPressEscape);
  window.addEventListener('keydown', onNextImgGallery);

  setLargeImageSrc(largeImageURL);
}

//Подмена значения атрибута src элемента img.lightbox__image.

function setLargeImageSrc(url) {
  refs.largeImage.src = url;
}

// закрытие по клику на ESC
function onPressEscape(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

export { openGallery, setLargeImageSrc, onPressEscape };
