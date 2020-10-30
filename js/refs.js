import { createGalleryRef } from './create-gallery'; // eslint-disable-line
import gallery from './gallery-items'; // eslint-disable-line

// console.log(createGalleryRef);

// eslint-disable-next-line import/prefer-default-export
export const refs = {
  cardsGallery: createGalleryRef(gallery),
  ulGallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  backdropRef: document.querySelector('.lightbox__content'),
  largeImage: document.querySelector('.lightbox__image'),
  closeModalBnt: document.querySelector('button[data-action="close-lightbox"]'),
};
