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
eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n(function webpackUniversalModuleDefinition(root, factory) {\n  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}\n})(window, function () {\n  return (/******/function (modules) {\n      // webpackBootstrap\n      /******/ // The module cache\n      /******/var installedModules = {};\n      /******/\n      /******/ // The require function\n      /******/function __webpack_require__(moduleId) {\n        /******/\n        /******/ // Check if module is in cache\n        /******/if (installedModules[moduleId]) {\n          /******/return installedModules[moduleId].exports;\n          /******/\n        }\n        /******/ // Create a new module (and put it into the cache)\n        /******/var module = installedModules[moduleId] = {\n          /******/i: moduleId,\n          /******/l: false,\n          /******/exports: {}\n          /******/ };\n        /******/\n        /******/ // Execute the module function\n        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n        /******/\n        /******/ // Flag the module as loaded\n        /******/module.l = true;\n        /******/\n        /******/ // Return the exports of the module\n        /******/return module.exports;\n        /******/\n      }\n      /******/\n      /******/\n      /******/ // expose the modules object (__webpack_modules__)\n      /******/__webpack_require__.m = modules;\n      /******/\n      /******/ // expose the module cache\n      /******/__webpack_require__.c = installedModules;\n      /******/\n      /******/ // define getter function for harmony exports\n      /******/__webpack_require__.d = function (exports, name, getter) {\n        /******/if (!__webpack_require__.o(exports, name)) {\n          /******/Object.defineProperty(exports, name, {\n            /******/configurable: false,\n            /******/enumerable: true,\n            /******/get: getter\n            /******/ });\n          /******/\n        }\n        /******/\n      };\n      /******/\n      /******/ // define __esModule on exports\n      /******/__webpack_require__.r = function (exports) {\n        /******/Object.defineProperty(exports, '__esModule', { value: true });\n        /******/\n      };\n      /******/\n      /******/ // getDefaultExport function for compatibility with non-harmony modules\n      /******/__webpack_require__.n = function (module) {\n        /******/var getter = module && module.__esModule ?\n        /******/function getDefault() {\n          return module['default'];\n        } :\n        /******/function getModuleExports() {\n          return module;\n        };\n        /******/__webpack_require__.d(getter, 'a', getter);\n        /******/return getter;\n        /******/\n      };\n      /******/\n      /******/ // Object.prototype.hasOwnProperty.call\n      /******/__webpack_require__.o = function (object, property) {\n        return Object.prototype.hasOwnProperty.call(object, property);\n      };\n      /******/\n      /******/ // __webpack_public_path__\n      /******/__webpack_require__.p = \"\";\n      /******/\n      /******/\n      /******/ // Load entry module and return exports\n      /******/return __webpack_require__(__webpack_require__.s = \"./src/index.js\");\n      /******/\n    }(\n    /************************************************************************/\n    /******/{\n\n      /***/\"./src/index.js\":\n      /*!**********************!*\\\n        !*** ./src/index.js ***!\n        \\**********************/\n      /*! exports provided: CookieConsent, default */\n      /***/function srcIndexJs(module, __webpack_exports__, __webpack_require__) {\n\n        \"use strict\";\n\n        eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _pure_CookieConsent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pure/CookieConsent */ \\\"./src/pure/CookieConsent.js\\\");\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"CookieConsent\\\", function() { return _pure_CookieConsent__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]; });\\n\\n/* harmony import */ var _react_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react/index */ \\\"./src/react/index.js\\\");\\n/* harmony import */ var _vue_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue/index */ \\\"./src/vue/index.js\\\");\\n\\n\\n\\n\\n\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (_pure_CookieConsent__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]);\\n\\n\\n//# sourceURL=webpack://CookieConsent/./src/index.js?\");\n\n        /***/\n      },\n\n      /***/\"./src/pure/CookieConsent.js\":\n      /*!***********************************!*\\\n        !*** ./src/pure/CookieConsent.js ***!\n        \\***********************************/\n      /*! exports provided: default */\n      /***/function srcPureCookieConsentJs(module, __webpack_exports__, __webpack_require__) {\n\n        \"use strict\";\n\n        eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _CookieHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookieHandler */ \\\"./src/pure/CookieHandler.js\\\");\\n/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\\n  CookieConsent.js - Part of the cookie-consent project.\\n\\n  © - Jitesoft 2018\\n * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\\n\\n\\n/**\\n * Default values for options.\\n *\\n * @type {{element: string, cookie: string, cookieValue: string, hiddenClass: string, acceptButton: string, rejectButton: string}}\\n */\\nconst defaults = {\\n  element: 'div.cookie-consent',\\n  cookie: 'accept-cookies',\\n  cookieValue: 'accepted',\\n  hiddenClass: 'hidden',\\n  acceptButton: 'div.cookie-consent button[name=\\\"accept\\\"]',\\n  rejectButton: 'div.cookie-consent button[name=\\\"reject\\\"]'\\n};\\n\\n/**\\n * Cookie consent class.\\n */\\nclass CookieConsent {\\n  constructor (options) {\\n    this.options = Object.assign(defaults, options);\\n    this.cookieHandler = new _CookieHandler__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]();\\n  }\\n\\n  hide (element) {\\n    element.classList.add(this.options.hiddenClass);\\n  }\\n\\n  async active () {\\n    return new Promise((resolve, reject) => {\\n      let element = document.querySelector(this.options.element);\\n\\n      if (!element) {\\n        this.hide(element);\\n        return reject(new Error('Failed to locate element to apply cookie consent code to.'));\\n      }\\n\\n      // Check for cookie.\\n      if (this.cookieHandler.getValue(this.options.cookie) !== null) {\\n        this.hide(element);\\n        return resolve(true);\\n      }\\n\\n      let accept = element.querySelector(this.options.acceptButton);\\n      let decline = element.querySelector(this.options.rejectButton);\\n\\n      if (accept === null) {\\n        this.hide(element);\\n        return reject(new Error('Failed to locate the accept button.'));\\n      }\\n\\n      accept.addEventListener('click', () => {\\n        this.cookieHandler.createCookie(this.options.cookie, this.options.cookieValue);\\n        this.hide(element);\\n        resolve(true);\\n      });\\n\\n      if (decline !== null) {\\n        decline.addEventListener('click', () => {\\n          this.hide(element);\\n          return resolve(false);\\n        });\\n      }\\n\\n      // Hide the element.\\n      element.classList.remove(this.options.hiddenClass);\\n    });\\n  }\\n}\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (CookieConsent);\\n\\n\\n//# sourceURL=webpack://CookieConsent/./src/pure/CookieConsent.js?\");\n\n        /***/\n      },\n\n      /***/\"./src/pure/CookieHandler.js\":\n      /*!***********************************!*\\\n        !*** ./src/pure/CookieHandler.js ***!\n        \\***********************************/\n      /*! exports provided: default */\n      /***/function srcPureCookieHandlerJs(module, __webpack_exports__, __webpack_require__) {\n\n        \"use strict\";\n\n        eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"default\\\", function() { return CookieHandler; });\\n/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\\n  CookieParser - Part of the cookie-consent project.\\n\\n  © - Jitesoft 2018\\n * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\\n\\n/**\\n * Class handling cookie parsing and creation.\\n */\\nclass CookieHandler {\\n  /**\\n   * Get value from a given cookie.\\n   * Returns null if the cookie does not exist.\\n   *\\n   * @param {string} name\\n   * @return {null|string|bool|number}\\n   */\\n  getValue (name) {\\n    let parsed = this._parseCookies();\\n    if (parsed[name] !== undefined) {\\n      return parsed[name];\\n    }\\n    return null;\\n  }\\n\\n  /**\\n   * Create a cookie on the current site.\\n   *\\n   * @param {string} name\\n   * @param {string|bool|number} value\\n   */\\n  createCookie (name, value) {\\n    document.cookie = `${name}=${value}`;\\n  }\\n\\n  /**\\n   * Parses the pages cookies.\\n   *\\n   * @return {{string: name, mixed: value}}\\n   */\\n  _parseCookies () {\\n    let cookies = document.cookie.split(';');\\n    let fixed = {};\\n    let spl = [];\\n\\n    for (let i = 0; i < cookies.length; i++) {\\n      spl = cookies[i].trim().split('=');\\n      fixed[spl[0]] = spl[1];\\n    }\\n\\n    return fixed;\\n  }\\n}\\n\\n\\n//# sourceURL=webpack://CookieConsent/./src/pure/CookieHandler.js?\");\n\n        /***/\n      },\n\n      /***/\"./src/react/index.js\":\n      /*!****************************!*\\\n        !*** ./src/react/index.js ***!\n        \\****************************/\n      /*! no exports provided */\n      /***/function srcReactIndexJs(module, __webpack_exports__, __webpack_require__) {\n\n        \"use strict\";\n\n        eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _pure_CookieConsent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pure/CookieConsent */ \\\"./src/pure/CookieConsent.js\\\");\\n// eslint-disable-next-line\\n\\n\\n\\n//# sourceURL=webpack://CookieConsent/./src/react/index.js?\");\n\n        /***/\n      },\n\n      /***/\"./src/vue/index.js\":\n      /*!**************************!*\\\n        !*** ./src/vue/index.js ***!\n        \\**************************/\n      /*! no exports provided */\n      /***/function srcVueIndexJs(module, __webpack_exports__, __webpack_require__) {\n\n        \"use strict\";\n\n        eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _pure_CookieConsent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pure/CookieConsent */ \\\"./src/pure/CookieConsent.js\\\");\\n// eslint-disable-next-line\\n\\n\\n\\n//# sourceURL=webpack://CookieConsent/./src/vue/index.js?\");\n\n        /***/\n      }\n\n      /******/ })\n  );\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"../node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///../dist/index.js?");

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