// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/create-gallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGalleryRef = void 0;

var createGalleryRef = function createGalleryRef(images) {
  return images.map(function (_ref) {
    var preview = _ref.preview,
        original = _ref.original,
        description = _ref.description;
    return "<li class=\"gallery__item\"> <a class = \"gallery___link\" href=\"".concat(original, "\"> <img loading= \"lazy\" class = \"gallery__image lazyload\" data-src=\"").concat(preview, "\" data-source=\"").concat(original, "\" alt=\"").concat(description, "\"/></a> </li>\n    ");
  }).join('');
}; // eslint-disable-next-line import/prefer-default-export


exports.createGalleryRef = createGalleryRef;
},{}],"js/gallery-items.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
  description: 'Hokkaido Flower'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
  description: 'Container Haulage Freight'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
  description: 'Aerial Beach View'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
  description: 'Flower Blooms'
}, {
  preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
  description: 'Alpine Mountains'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
  description: 'Mountain Lake Sailing'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
  description: 'Alpine Spring Meadows'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
  description: 'Nature Landscape'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
  description: 'Lighthouse Coast Sea'
}, {
  preview: 'https://cdn.pixabay.com/photo/2020/06/17/18/03/lights-5310589__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2020/06/17/18/03/lights-5310589_960_720.jpg',
  description: 'Огни Светлячков Свечения Светлячки Молния Ошибки'
}, {
  preview: 'https://cdn.pixabay.com/photo/2020/10/07/15/20/man-5635507__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2020/10/07/15/20/man-5635507_960_720.jpg',
  description: 'Человек Танец Производительность Балет Танцор Гай'
}, {
  preview: 'https://cdn.pixabay.com/photo/2020/09/29/13/27/woman-5612838__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2020/09/29/13/27/woman-5612838_960_720.jpg',
  description: 'Женщина Очки Мода'
}, {
  preview: 'https://cdn.pixabay.com/photo/2020/10/05/20/03/boys-5630669__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2020/10/05/20/03/boys-5630669_960_720.jpg',
  description: 'Мальчики дети в пути'
}, {
  preview: 'https://cdn.pixabay.com/photo/2017/04/25/06/15/father-and-son-2258681__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2017/04/25/06/15/father-and-son-2258681_960_720.jpg',
  description: 'Отец И Сын Ходьба'
}, {
  preview: 'https://cdn.pixabay.com/photo/2017/08/12/19/01/walk-2635038__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2017/08/12/19/01/walk-2635038_960_720.jpg',
  description: 'Дети Дороги Далекие'
}, {
  preview: 'https://cdn.pixabay.com/photo/2013/07/24/03/33/road-166543__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2013/07/24/03/33/road-166543_960_720.jpg',
  description: 'Дороги Дорожной Разметки'
}, {
  preview: 'https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_960_720.jpg',
  description: 'Люди Женщина'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/03/17/23/00/world-1264062__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/03/17/23/00/world-1264062_960_720.jpg',
  description: 'Мир на карте'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817_960_720.jpg',
  description: 'Приключение'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_960_720.jpg',
  description: 'Архитектуры Здание'
}, {
  preview: 'https://cdn.pixabay.com/photo/2015/07/02/10/13/cycling-828646__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2015/07/02/10/13/cycling-828646_960_720.jpg',
  description: 'Велоспорт Руль Леса'
}, {
  preview: 'https://cdn.pixabay.com/photo/2015/05/18/23/53/norway-772991__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2015/05/18/23/53/norway-772991_960_720.jpg',
  description: 'Велосипедная дорожка'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/11/29/09/14/walking-1868652__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/11/29/09/14/walking-1868652_960_720.jpg',
  description: 'Ходьба Фитнес Девочка'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/01/19/17/46/kayaking-1149886__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/01/19/17/46/kayaking-1149886_960_720.jpg',
  description: 'Каякинг Canoing Озера'
}, {
  preview: 'https://cdn.pixabay.com/photo/2020/07/20/12/49/milky-way-5422901__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2020/07/20/12/49/milky-way-5422901_960_720.jpg',
  description: 'Млечный Путь Небо Ночь'
}, {
  preview: 'https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727_960_720.jpg',
  description: 'Луна Вселенной'
}, {
  preview: 'https://cdn.pixabay.com/photo/2018/11/04/10/42/way-3793595__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2018/11/04/10/42/way-3793595_960_720.jpg',
  description: 'Путь Лес Дерево Пейзаж'
}, {
  preview: 'https://cdn.pixabay.com/photo/2017/10/12/20/15/photoshop-2845779__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2017/10/12/20/15/photoshop-2845779_960_720.jpg',
  description: 'Photoshop Пространство'
}, {
  preview: 'https://cdn.pixabay.com/photo/2015/08/27/05/07/dad-909510__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2015/08/27/05/07/dad-909510_960_720.jpg',
  description: 'Папа Сын Ходьба Семья'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/11/08/05/39/girl-1807556__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/11/08/05/39/girl-1807556_960_720.jpg',
  description: 'Девочки'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/03/05/21/21/agree-1238964__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/03/05/21/21/agree-1238964_960_720.jpg',
  description: 'Дружба'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/10/22/07/36/levitation-1760046__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/10/22/07/36/levitation-1760046_960_720.jpg',
  description: 'Девочка Природа'
}, {
  preview: 'https://cdn.pixabay.com/photo/2017/12/01/22/16/people-2991882__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2017/12/01/22/16/people-2991882_960_720.jpg',
  description: 'Люди Пара Пожилые Люди'
}];
exports.default = _default;
},{}],"js/refs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refs = void 0;

var _createGallery = require("./create-gallery");

var _galleryItems = _interopRequireDefault(require("./gallery-items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line
// eslint-disable-line
// console.log(createGalleryRef);
// eslint-disable-next-line import/prefer-default-export
var refs = {
  cardsGallery: (0, _createGallery.createGalleryRef)(_galleryItems.default),
  ulGallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  backdropRef: document.querySelector('.lightbox__content'),
  largeImage: document.querySelector('.lightbox__image'),
  closeModalBnt: document.querySelector('button[data-action="close-lightbox"]')
};
exports.refs = refs;
},{"./create-gallery":"js/create-gallery.js","./gallery-items":"js/gallery-items.js"}],"js/close-modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onCloseModal = onCloseModal;
exports.onBackDropClick = onBackDropClick;
exports.onNextImgGallery = onNextImgGallery;

var _refs = require("./refs");

var _openModal = require("./open-modal");

var _galleryItems = _interopRequireDefault(require("./gallery-items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// закрытие модального окна
function onCloseModal() {
  _refs.refs.modal.classList.remove('is-open');

  _refs.refs.largeImage.src = '';
  _refs.refs.largeImage.alt = '';
  window.removeEventListener('keydown', _openModal.onPressEscape);
  window.removeEventListener('keydown', onNextImgGallery);
} // закрытие по клику на Backdrop


function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
} // Пролистование галереи фотографий


function onNextImgGallery(event) {
  var rightKey = 'ArrowRight';
  var leftKey = 'ArrowLeft';

  var findIndexImg = _galleryItems.default.findIndex(function (img) {
    return img.original === _refs.refs.largeImage.src;
  });

  if (event.code === leftKey) {
    if (findIndexImg === 0) {
      return;
    }

    findIndexImg -= 1;
  }

  if (event.code === rightKey) {
    if (findIndexImg === _galleryItems.default.length - 1) {
      return;
    }

    findIndexImg += 1;
  }

  _refs.refs.largeImage.src = _galleryItems.default[findIndexImg].original;
  _refs.refs.largeImage.alt = _galleryItems.default[findIndexImg].description;
}
},{"./refs":"js/refs.js","./open-modal":"js/open-modal.js","./gallery-items":"js/gallery-items.js"}],"js/open-modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openGallery = openGallery;
exports.setLargeImageSrc = setLargeImageSrc;
exports.onPressEscape = onPressEscape;

var _refs = require("./refs");

var _closeModal = require("./close-modal");

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
function openGallery(event) {
  event.preventDefault(); //Подмена перехода по ссылке

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  var imageRef = event.target;
  var largeImageURL = imageRef.dataset.source;
  _refs.refs.largeImage.src = largeImageURL; // Подмена значения атрибута src элемента img.lightbox__image.

  _refs.refs.largeImage.alt = imageRef.getAttribute('alt'); // console.log(largeImageURL);

  _refs.refs.modal.classList.add('is-open'); // Открытие модального окна по клику на элементе галереи.


  window.addEventListener('keydown', onPressEscape);
  window.addEventListener('keydown', _closeModal.onNextImgGallery);
  setLargeImageSrc(largeImageURL);
} //Подмена значения атрибута src элемента img.lightbox__image.


function setLargeImageSrc(url) {
  _refs.refs.largeImage.src = url;
} // закрытие по клику на ESC


function onPressEscape(event) {
  if (event.code === 'Escape') {
    (0, _closeModal.onCloseModal)();
  }
}
},{"./refs":"js/refs.js","./close-modal":"js/close-modal.js"}],"js/native-lazy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addlazySizesScript = exports.addSrcAttrTolazyImages = void 0;

var addSrcAttrTolazyImages = function addSrcAttrTolazyImages() {
  var lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(function (img) {
    // eslint-disable-next-line no-param-reassign
    img.src = img.dataset.src;
  });
};

exports.addSrcAttrTolazyImages = addSrcAttrTolazyImages;

var addlazySizesScript = function addlazySizesScript() {
  var script = document.creatElement('script');
  script.srs = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity = 'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';
  document.body.appendChild(script);
}; // const supporBrower = function() {
//   if ('loading' in HTMLIFrameElement.prototype) {
//     // supported in browser
//     addSrcAttrTolazyImages();
//   } else {
//     // fetch polyfill/third-party library
//     addlazySizesScript();
//   }
// };
// supporBrower();


exports.addlazySizesScript = addlazySizesScript;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _refs = require("./js/refs");

var _openModal = require("./js/open-modal");

var _closeModal = require("./js/close-modal");

var _nativeLazy = require("./js/native-lazy");

/* eslint-disable no-unused-vars */
_refs.refs.ulGallery.insertAdjacentHTML('beforeend', _refs.refs.cardsGallery);

_refs.refs.ulGallery.addEventListener('click', _openModal.openGallery);

_refs.refs.backdropRef.addEventListener('click', _closeModal.onBackDropClick);

_refs.refs.closeModalBnt.addEventListener('click', _closeModal.onCloseModal);

var supporBrower = function supporBrower() {
  if ('loading' in HTMLIFrameElement.prototype) {
    // supported in browser
    (0, _nativeLazy.addSrcAttrTolazyImages)();
  } else {
    // fetch polyfill/third-party library
    (0, _nativeLazy.addlazySizesScript)();
  }
};

supporBrower();
},{"./js/refs":"js/refs.js","./js/open-modal":"js/open-modal.js","./js/close-modal":"js/close-modal.js","./js/native-lazy":"js/native-lazy.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61104" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery-parcel.e31bb0bc.js.map