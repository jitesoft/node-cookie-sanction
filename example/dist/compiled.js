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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _cookieSanction = __webpack_require__(/*! cookie-sanction */ \"./node_modules/cookie-sanction/index.js\");\n\nvar _cookieSanction2 = _interopRequireDefault(_cookieSanction);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var consent = new _cookieSanction2.default();\n  consent.active().then(function (accepted) {\n    if (accepted) {\n      document.querySelector('#state').innerText = 'User accepted!';\n    } else {\n      document.querySelector('#state').innerText = 'User rejected!';\n    }\n  }).catch(function (e) {\n    console.error(e);\n  });\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/cookie-sanction/index.js":
/*!***********************************************!*\
  !*** ./node_modules/cookie-sanction/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n!function (e, t) {\n  \"object\" == ( false ? undefined : _typeof(exports)) && \"object\" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(window, function () {\n  return function (e) {\n    var t = {};function o(n) {\n      if (t[n]) return t[n].exports;var i = t[n] = { i: n, l: !1, exports: {} };return e[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports;\n    }return o.m = e, o.c = t, o.d = function (e, t, n) {\n      o.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n });\n    }, o.r = function (e) {\n      Object.defineProperty(e, \"__esModule\", { value: !0 });\n    }, o.n = function (e) {\n      var t = e && e.__esModule ? function () {\n        return e.default;\n      } : function () {\n        return e;\n      };return o.d(t, \"a\", t), t;\n    }, o.o = function (e, t) {\n      return Object.prototype.hasOwnProperty.call(e, t);\n    }, o.p = \"\", o(o.s = 0);\n  }([function (e, t, o) {\n    \"use strict\";\n    o.r(t);\n    var n = function () {\n      function n() {\n        _classCallCheck(this, n);\n      }\n\n      _createClass(n, [{\n        key: \"getValue\",\n        value: function getValue(e) {\n          var t = this._parseCookies();return void 0 !== t[e] ? t[e] : null;\n        }\n      }, {\n        key: \"createCookie\",\n        value: function createCookie(e, t) {\n          document.cookie = e + \"=\" + t;\n        }\n      }, {\n        key: \"_parseCookies\",\n        value: function _parseCookies() {\n          var e = document.cookie.split(\";\"),\n              t = {},\n              o = [];for (var _n = 0; _n < e.length; _n++) {\n            t[(o = e[_n].trim().split(\"=\"))[0]] = o[1];\n          }return t;\n        }\n      }]);\n\n      return n;\n    }();\n\n    var i = { element: \"div.cookie-consent\", cookie: \"accept-cookies\", cookieValue: \"accepted\", hiddenClass: \"hidden\", acceptButton: 'div.cookie-consent button[name=\"accept\"]', rejectButton: 'div.cookie-consent button[name=\"reject\"]' };var r = function () {\n      function r(e) {\n        _classCallCheck(this, r);\n\n        this.options = Object.assign(i, e), this.cookieHandler = new n();\n      }\n\n      _createClass(r, [{\n        key: \"hide\",\n        value: function hide(e) {\n          e.classList.add(this.options.hiddenClass);\n        }\n      }, {\n        key: \"active\",\n        value: function () {\n          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n            var _this = this;\n\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n              while (1) {\n                switch (_context.prev = _context.next) {\n                  case 0:\n                    return _context.abrupt(\"return\", new Promise(function (e, t) {\n                      var o = document.querySelector(_this.options.element);if (!o) return _this.hide(o), t(new Error(\"Failed to locate element to apply cookie consent code to.\"));if (null !== _this.cookieHandler.getValue(_this.options.cookie)) return _this.hide(o), e(!0);var n = o.querySelector(_this.options.acceptButton),\n                          i = o.querySelector(_this.options.rejectButton);if (null === n) return _this.hide(o), t(new Error(\"Failed to locate the accept button.\"));n.addEventListener(\"click\", function () {\n                        _this.cookieHandler.createCookie(_this.options.cookie, _this.options.cookieValue), _this.hide(o), e(!0);\n                      }), null !== i && i.addEventListener(\"click\", function () {\n                        return _this.hide(o), e(!1);\n                      }), o.classList.remove(_this.options.hiddenClass);\n                    }));\n\n                  case 1:\n                  case \"end\":\n                    return _context.stop();\n                }\n              }\n            }, _callee, this);\n          }));\n\n          function active() {\n            return _ref.apply(this, arguments);\n          }\n\n          return active;\n        }()\n      }]);\n\n      return r;\n    }();o.d(t, \"CookieConsent\", function () {\n      return r;\n    });t.default = r;\n  }]);\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/cookie-sanction/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function () {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

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