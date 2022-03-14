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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_example/./src/styles/main.scss?");

/***/ }),

/***/ "./src/styles/users.scss":
/*!*******************************!*\
  !*** ./src/styles/users.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_example/./src/styles/users.scss?");

/***/ }),

/***/ "./src/helpers/common.js":
/*!*******************************!*\
  !*** ./src/helpers/common.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onBackClick\": () => (/* binding */ onBackClick),\n/* harmony export */   \"getBackButton\": () => (/* binding */ getBackButton)\n/* harmony export */ });\nconst onBackClick = (e) => {\n    if(e && e.stopPropagation){\n        e.stopPropagation()\n    }\n    window.history.back()\n} \n\nconst getBackButton = () => {\n    const btn = document.createElement('button')\n    btn.className = 'back-button'\n    btn.addEventListener('click', onBackClick)\n    btn.textContent = '< Back'\n    return btn \n}\n\n//# sourceURL=webpack://webpack_example/./src/helpers/common.js?");

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/common */ \"./src/helpers/common.js\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_users_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/users.scss */ \"./src/styles/users.scss\");\n\n\n\n\nconst initUsers = () => {\n    const backButton = (0,_helpers_common__WEBPACK_IMPORTED_MODULE_0__.getBackButton)()\n    document.querySelector('#back-button').appendChild(backButton)\n\n    fetch('https://jsonplaceholder.typicode.com/users')\n    .then(response => response.json())\n    .then(users => {\n        const allUsers = document.createElement('div')\n        allUsers.className = 'users-block'\n\n        users.forEach(user => {\n            const userEl = document.createElement('div')\n            userEl.className = 'user-block'\n            const userHeader = document.createElement('div')\n            userHeader.className = 'user-header'\n            userHeader.textContent = user.name\n            userEl.appendChild(userHeader)\n\n            const userContent = document.createElement('div')\n            userContent.className = 'user-content'\n            userContent.textContent = `${user.address.city} * ${user.address.street}`\n            userEl.appendChild(userContent)\n\n            allUsers.appendChild(userEl)\n        })\n\n        document.querySelector('#users-block').appendChild(allUsers)\n\n    })\n    .catch(error=>console.log(error))\n}\n\ninitUsers()\n\n\n\n//# sourceURL=webpack://webpack_example/./src/users.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/users.js");
/******/ 	
/******/ })()
;