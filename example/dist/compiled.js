/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dist/index.js":
/*!************************!*\
  !*** ../dist/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n(function webpackUniversalModuleDefinition(root, factory) {\n\tif (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}\n})(window, function () {\n\treturn (/******/function (modules) {\n\t\t\t// webpackBootstrap\n\t\t\t/******/ // The module cache\n\t\t\t/******/var installedModules = {};\n\t\t\t/******/\n\t\t\t/******/ // The require function\n\t\t\t/******/function __webpack_require__(moduleId) {\n\t\t\t\t/******/\n\t\t\t\t/******/ // Check if module is in cache\n\t\t\t\t/******/if (installedModules[moduleId]) {\n\t\t\t\t\t/******/return installedModules[moduleId].exports;\n\t\t\t\t\t/******/\n\t\t\t\t}\n\t\t\t\t/******/ // Create a new module (and put it into the cache)\n\t\t\t\t/******/var module = installedModules[moduleId] = {\n\t\t\t\t\t/******/i: moduleId,\n\t\t\t\t\t/******/l: false,\n\t\t\t\t\t/******/exports: {}\n\t\t\t\t\t/******/ };\n\t\t\t\t/******/\n\t\t\t\t/******/ // Execute the module function\n\t\t\t\t/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\t\t\t\t/******/\n\t\t\t\t/******/ // Flag the module as loaded\n\t\t\t\t/******/module.l = true;\n\t\t\t\t/******/\n\t\t\t\t/******/ // Return the exports of the module\n\t\t\t\t/******/return module.exports;\n\t\t\t\t/******/\n\t\t\t}\n\t\t\t/******/\n\t\t\t/******/\n\t\t\t/******/ // expose the modules object (__webpack_modules__)\n\t\t\t/******/__webpack_require__.m = modules;\n\t\t\t/******/\n\t\t\t/******/ // expose the module cache\n\t\t\t/******/__webpack_require__.c = installedModules;\n\t\t\t/******/\n\t\t\t/******/ // define getter function for harmony exports\n\t\t\t/******/__webpack_require__.d = function (exports, name, getter) {\n\t\t\t\t/******/if (!__webpack_require__.o(exports, name)) {\n\t\t\t\t\t/******/Object.defineProperty(exports, name, {\n\t\t\t\t\t\t/******/configurable: false,\n\t\t\t\t\t\t/******/enumerable: true,\n\t\t\t\t\t\t/******/get: getter\n\t\t\t\t\t\t/******/ });\n\t\t\t\t\t/******/\n\t\t\t\t}\n\t\t\t\t/******/\n\t\t\t};\n\t\t\t/******/\n\t\t\t/******/ // define __esModule on exports\n\t\t\t/******/__webpack_require__.r = function (exports) {\n\t\t\t\t/******/Object.defineProperty(exports, '__esModule', { value: true });\n\t\t\t\t/******/\n\t\t\t};\n\t\t\t/******/\n\t\t\t/******/ // getDefaultExport function for compatibility with non-harmony modules\n\t\t\t/******/__webpack_require__.n = function (module) {\n\t\t\t\t/******/var getter = module && module.__esModule ?\n\t\t\t\t/******/function getDefault() {\n\t\t\t\t\treturn module['default'];\n\t\t\t\t} :\n\t\t\t\t/******/function getModuleExports() {\n\t\t\t\t\treturn module;\n\t\t\t\t};\n\t\t\t\t/******/__webpack_require__.d(getter, 'a', getter);\n\t\t\t\t/******/return getter;\n\t\t\t\t/******/\n\t\t\t};\n\t\t\t/******/\n\t\t\t/******/ // Object.prototype.hasOwnProperty.call\n\t\t\t/******/__webpack_require__.o = function (object, property) {\n\t\t\t\treturn Object.prototype.hasOwnProperty.call(object, property);\n\t\t\t};\n\t\t\t/******/\n\t\t\t/******/ // __webpack_public_path__\n\t\t\t/******/__webpack_require__.p = \"\";\n\t\t\t/******/\n\t\t\t/******/\n\t\t\t/******/ // Load entry module and return exports\n\t\t\t/******/return __webpack_require__(__webpack_require__.s = \"./src/index.js\");\n\t\t\t/******/\n\t\t}(\n\t\t/************************************************************************/\n\t\t/******/{\n\n\t\t\t/***/\"./src/index.js\":\n\t\t\t/*!**********************!*\\\n     !*** ./src/index.js ***!\n     \\**********************/\n\t\t\t/*! exports provided: CookieConsent, default */\n\t\t\t/***/function srcIndexJs(module, __webpack_exports__, __webpack_require__) {\n\n\t\t\t\t\"use strict\";\n\n\t\t\t\teval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _pure_CookieConsent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pure/CookieConsent */ \\\"./src/pure/CookieConsent.js\\\");\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"CookieConsent\\\", function() { return _pure_CookieConsent__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]; });\\n\\n\\n\\n\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (_pure_CookieConsent__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]);\\n\\n\\n//# sourceURL=webpack://CookieConsent/./src/index.js?\");\n\n\t\t\t\t/***/\n\t\t\t},\n\n\t\t\t/***/\"./src/pure/CookieConsent.js\":\n\t\t\t/*!***********************************!*\\\n     !*** ./src/pure/CookieConsent.js ***!\n     \\***********************************/\n\t\t\t/*! exports provided: default */\n\t\t\t/***/function srcPureCookieConsentJs(module, __webpack_exports__, __webpack_require__) {\n\n\t\t\t\t\"use strict\";\n\n\t\t\t\teval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _CookieHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookieHandler */ \\\"./src/pure/CookieHandler.js\\\");\\n/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\\n  CookieConsent.js - Part of the cookie-consent project.\\n\\n  © - Jitesoft 2018\\n * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\\n\\n\\n/**\\n * Default values for options.\\n *\\n * @type {{element: string, cookie: string, cookieValue: string, hiddenClass: string, acceptButton: string, rejectButton: string}}\\n */\\nconst defaults = {\\n  element: 'div.cookie-consent',\\n  cookie: 'accept-cookies',\\n  cookieValue: 'accepted',\\n  hiddenClass: 'hidden',\\n  acceptButton: 'div.cookie-consent button[name=\\\"accept\\\"]',\\n  rejectButton: 'div.cookie-consent button[name=\\\"reject\\\"]'\\n};\\n\\n/**\\n * Cookie consent class.\\n */\\nclass CookieConsent {\\n  constructor (options) {\\n    this.options = Object.assign(defaults, options);\\n    this.cookieHandler = new _CookieHandler__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]();\\n  }\\n\\n  hide (element) {\\n    element.classList.add(this.options.hiddenClass);\\n  }\\n\\n  async active () {\\n    return new Promise((resolve, reject) => {\\n      let element = document.querySelector(this.options.element);\\n\\n      if (!element) {\\n        this.hide(element);\\n        return reject(new Error('Failed to locate element to apply cookie consent code to.'));\\n      }\\n\\n      // Check for cookie.\\n      if (this.cookieHandler.getValue(this.options.cookie) !== null) {\\n        this.hide(element);\\n        return resolve(true);\\n      }\\n\\n      let accept = element.querySelector(this.options.acceptButton);\\n      let decline = element.querySelector(this.options.rejectButton);\\n\\n      if (accept === null) {\\n        this.hide(element);\\n        return reject(new Error('Failed to locate the accept button.'));\\n      }\\n\\n      accept.addEventListener('click', () => {\\n        this.cookieHandler.createCookie(this.options.cookie, this.options.cookieValue);\\n        this.hide(element);\\n        resolve(true);\\n      });\\n\\n      if (decline !== null) {\\n        decline.addEventListener('click', () => {\\n          this.hide(element);\\n          return resolve(false);\\n        });\\n      }\\n\\n      // Hide the element.\\n      element.classList.remove(this.options.hiddenClass);\\n    });\\n  }\\n}\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (CookieConsent);\\n\\n\\n//# sourceURL=webpack://CookieConsent/./src/pure/CookieConsent.js?\");\n\n\t\t\t\t/***/\n\t\t\t},\n\n\t\t\t/***/\"./src/pure/CookieHandler.js\":\n\t\t\t/*!***********************************!*\\\n     !*** ./src/pure/CookieHandler.js ***!\n     \\***********************************/\n\t\t\t/*! exports provided: default */\n\t\t\t/***/function srcPureCookieHandlerJs(module, __webpack_exports__, __webpack_require__) {\n\n\t\t\t\t\"use strict\";\n\n\t\t\t\teval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"default\\\", function() { return CookieHandler; });\\n/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\\n  CookieParser - Part of the cookie-consent project.\\n\\n  © - Jitesoft 2018\\n * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\\n\\n/**\\n * Class handling cookie parsing and creation.\\n */\\nclass CookieHandler {\\n  /**\\n   * Get value from a given cookie.\\n   * Returns null if the cookie does not exist.\\n   *\\n   * @param {string} name\\n   * @return {null|string|bool|number}\\n   */\\n  getValue (name) {\\n    let parsed = this._parseCookies();\\n    if (parsed[name] !== undefined) {\\n      return parsed[name];\\n    }\\n    return null;\\n  }\\n\\n  /**\\n   * Create a cookie on the current site.\\n   *\\n   * @param {string} name\\n   * @param {string|bool|number} value\\n   */\\n  createCookie (name, value) {\\n    document.cookie = `${name}=${value}`;\\n  }\\n\\n  /**\\n   * Parses the pages cookies.\\n   *\\n   * @return {{string: name, mixed: value}}\\n   */\\n  _parseCookies () {\\n    let cookies = document.cookie.split(';');\\n    let fixed = {};\\n    let spl = [];\\n\\n    for (let i = 0; i < cookies.length; i++) {\\n      spl = cookies[i].trim().split('=');\\n      fixed[spl[0]] = spl[1];\\n    }\\n\\n    return fixed;\\n  }\\n}\\n\\n\\n//# sourceURL=webpack://CookieConsent/./src/pure/CookieHandler.js?\");\n\n\t\t\t\t/***/\n\t\t\t}\n\n\t\t\t/******/ })\n\t);\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///../dist/index.js?");

/***/ }),

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function () {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n//# sourceURL=webpack:///../node_modules/webpack/buildin/module.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _index = __webpack_require__(/*! ../dist/index */ \"../dist/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var consent = new _index2.default();\n  consent.active().then(function (accepted) {\n    if (accepted) {\n      document.querySelector('#state').innerText = 'User accepted!';\n    } else {\n      document.querySelector('#state').innerText = 'User rejected!';\n    }\n  }).catch(function (e) {\n    console.error(e);\n  });\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js?");

/***/ })

/******/ });