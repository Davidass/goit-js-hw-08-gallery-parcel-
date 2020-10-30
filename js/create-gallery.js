const createGalleryRef = function(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item"> <a class = "gallery___link" href="${original}"> <img loading= "lazy" class = "gallery__image lazyload" data-src="${preview}" data-source="${original}" alt="${description}"/></a> </li>
    `;
    })
    .join('');
};

// eslint-disable-next-line import/prefer-default-export
export { createGalleryRef };
