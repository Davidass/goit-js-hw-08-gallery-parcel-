const addSrcAttrTolazyImages = function() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => {
    // eslint-disable-next-line no-param-reassign
    img.src = img.dataset.src;
  });
};

const addlazySizesScript = function() {
  const script = document.creatElement('script');
  script.srs =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';
  document.body.appendChild(script);
};

// const supporBrower = function() {
//   if ('loading' in HTMLIFrameElement.prototype) {
//     // supported in browser
//     addSrcAttrTolazyImages();
//   } else {
//     // fetch polyfill/third-party library
//     addlazySizesScript();
//   }
// };
// supporBrower();

export { addSrcAttrTolazyImages, addlazySizesScript };
