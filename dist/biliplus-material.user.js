// ==UserScript==
// @name         BiliPlus Material
// @version      3.0.0
// @description  A theme to biliplus
// @author       SettingDust
//
// @include      http*://biliplus.com/*
//
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.js
// ==/UserScript==

!(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
            return installedModules[moduleId].exports;
        var module = (installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        });
        return (
            modules[moduleId].call(
                module.exports,
                module,
                module.exports,
                __webpack_require__
            ),
            (module.l = !0),
            module.exports
        );
    }
    (__webpack_require__.m = modules),
        (__webpack_require__.c = installedModules),
        (__webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) ||
                Object.defineProperty(exports, name, {
                    enumerable: !0,
                    get: getter
                });
        }),
        (__webpack_require__.r = function(exports) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(exports, '__esModule', {
                    value: !0
                });
        }),
        (__webpack_require__.t = function(value, mode) {
            if ((1 & mode && (value = __webpack_require__(value)), 8 & mode))
                return value;
            if (
                4 & mode &&
                'object' == typeof value &&
                value &&
                value.__esModule
            )
                return value;
            var ns = Object.create(null);
            if (
                (__webpack_require__.r(ns),
                Object.defineProperty(ns, 'default', {
                    enumerable: !0,
                    value: value
                }),
                2 & mode && 'string' != typeof value)
            )
                for (var key in value)
                    __webpack_require__.d(
                        ns,
                        key,
                        function(key) {
                            return value[key];
                        }.bind(null, key)
                    );
            return ns;
        }),
        (__webpack_require__.n = function(module) {
            var getter =
                module && module.__esModule
                    ? function() {
                          return module.default;
                      }
                    : function() {
                          return module;
                      };
            return __webpack_require__.d(getter, 'a', getter), getter;
        }),
        (__webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }),
        (__webpack_require__.p = ''),
        __webpack_require__((__webpack_require__.s = 0));
})([
    function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        var _element_style_common_StyleLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            1
        );
        let style = new (__webpack_require__.n(
            _element_style_common_StyleLine__WEBPACK_IMPORTED_MODULE_0__
        )).a();
        style.value(), style.key();
    },
    function(module, exports) {
        modules.export = class {
            constructor() {
                (this._key = ''), (this._value = ''), (this._important = !1);
            }
            get key() {
                return this._key;
            }
            set key(value) {
                this._key = value;
            }
            get value() {
                return this._value;
            }
            set value(value) {
                this._value = value;
            }
            get important() {
                return this._important;
            }
            set important(value) {
                this._important = value;
            }
            toString() {
                return (
                    this.key +
                    ': ' +
                    this.value +
                    (this.important ? ' !important' : '') +
                    ';'
                );
            }
        };
    }
]);
