/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/MainComponent.scss":
/*!*******************************************!*\
  !*** ./src/components/MainComponent.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_example/./src/components/MainComponent.scss?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_example/./src/styles/main.scss?");

/***/ }),

/***/ "./src/components/MainComponent.js":
/*!*****************************************!*\
  !*** ./src/components/MainComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MainComponent_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainComponent.scss */ \"./src/components/MainComponent.scss\");\n/* harmony import */ var _helpers_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/mobile */ \"./src/helpers/mobile.js\");\n\n\n\nconst MainComponent = () => {\n\n  const box = document.createElement('div')\n  box.className = 'main-component-box'\n  box.style.border = \"1px solid #CCC\"\n\n\n  box.addEventListener('click', _helpers_mobile__WEBPACK_IMPORTED_MODULE_1__.clickOnImage)\n\n  box.textContent = 'Take a photo'\n\n  const remoteBlock = document.createElement('div')\n  remoteBlock.className = 'image-block'\n  remoteBlock.id = 'image-block'\n  document.querySelector('body').appendChild(remoteBlock)\n\n  fetch('https://jsonplaceholder.typicode.com/photos/1')\n    .then(response => response.json())\n    .then(json => {\n      const image = document.createElement('img')\n      image.className = 'remote-image'\n      image.src = json.thumbnailUrl\n      document.querySelector('#image-block').appendChild(image)\n    })\n    .catch(error => console.log(error))\n\n  return box\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainComponent);\n\n\n\n//# sourceURL=webpack://webpack_example/./src/components/MainComponent.js?");

/***/ }),

/***/ "./src/helpers/mobile.js":
/*!*******************************!*\
  !*** ./src/helpers/mobile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickOnImage\": () => (/* binding */ clickOnImage)\n/* harmony export */ });\n\n\n\nconst clickOnImage = (e) => {\n    if(window.cordova && navigator.device){\n        navigator.device.capture.captureImage((mediaFiles) => {\n\n            resolveLocalFileSystemURL(mediaFiles[0].localURL, (entry)=>{\n                entry.file(function (file) {\n                    var reader = new FileReader();\n            \n                    reader.onloadend = function() {\n                        const imageElement = document.querySelector('#image-block')\n                        const image = document.createElement('img')\n                        \n                        image.className = 'remote-image'\n                        image.src = this.result\n                        imageElement.appendChild(image)\n                    };\n            \n                    reader.readAsDataURL(file);            \n                })\n\n            })\n        }, (error) => {\n            console.log(error)\n        }, \n        {\n            limit: 1,\n        })\n    }\n}\n\n//# sourceURL=webpack://webpack_example/./src/helpers/mobile.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _components_MainComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MainComponent */ \"./src/components/MainComponent.js\");\n\n\n\nconst component = (0,_components_MainComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Another one: ')\n\ndocument.querySelector('body').appendChild(component)\n\n\n\n\n//# sourceURL=webpack://webpack_example/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;