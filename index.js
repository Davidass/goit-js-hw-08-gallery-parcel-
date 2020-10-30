/* eslint-disable no-unused-vars */
import { refs } from './js/refs';
import { openGallery } from './js/open-modal';
import {
  onCloseModal,
  onBackDropClick,
  onNextImgGallery,
} from './js/close-modal';

import { addSrcAttrTolazyImages, addlazySizesScript } from './js/native-lazy';

refs.ulGallery.insertAdjacentHTML('beforeend', refs.cardsGallery);
refs.ulGallery.addEventListener('click', openGallery);
refs.backdropRef.addEventListener('click', onBackDropClick);
refs.closeModalBnt.addEventListener('click', onCloseModal);

const supporBrower = function() {
  if ('loading' in HTMLIFrameElement.prototype) {
    // supported in browser
    addSrcAttrTolazyImages();
  } else {
    // fetch polyfill/third-party library
    addlazySizesScript();
  }
};
supporBrower();
