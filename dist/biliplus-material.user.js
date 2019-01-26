// ==UserScript==
// @name         BiliPlus Material
// @version      3.0.0
// @description  A theme to biliplus
// @author       SettingDust
//
// @include      http*://*.biliplus.com/*
//
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.js
//
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_listValues
// ==/UserScript==

/******/ (function(modules) {
    // webpackBootstrap
    /******/ // install a JSONP callback for chunk loading
    /******/ function webpackJsonpCallback(data) {
        /******/ var chunkIds = data[0];
        /******/ var moreModules = data[1]; // add "moreModules" to the modules object, // then flag all "chunkIds" as loaded and fire callback
        /******/
        /******/
        /******/ /******/ /******/ var moduleId,
            chunkId,
            i = 0,
            resolves = [];
        /******/ for (; i < chunkIds.length; i++) {
            /******/ chunkId = chunkIds[i];
            /******/ if (installedChunks[chunkId]) {
                /******/ resolves.push(installedChunks[chunkId][0]);
                /******/
            }
            /******/ installedChunks[chunkId] = 0;
            /******/
        }
        /******/ for (moduleId in moreModules) {
            /******/ if (
                Object.prototype.hasOwnProperty.call(moreModules, moduleId)
            ) {
                /******/ modules[moduleId] = moreModules[moduleId];
                /******/
            }
            /******/
        }
        /******/ if (parentJsonpFunction) parentJsonpFunction(data);
        /******/
        /******/ while (resolves.length) {
            /******/ resolves.shift()();
            /******/
        }
        /******/
        /******/
    } // The module cache
    /******/
    /******/
    /******/ /******/ var installedModules = {}; // object to store loaded and loading chunks // undefined = chunk not loaded, null = chunk preloaded/prefetched // Promise = chunk loading, 0 = chunk loaded
    /******/
    /******/ /******/ /******/ /******/ var installedChunks = {
        /******/ 0: 0
        /******/
    }; // script path function
    /******/
    /******/
    /******/
    /******/ /******/ function jsonpScriptSrc(chunkId) {
        /******/ return (
            __webpack_require__.p + '' + chunkId + '.biliplus-material.user.js'
        );
        /******/
    } // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {}
            /******/
        }); // Execute the module function
        /******/
        /******/ /******/ modules[moduleId].call(
            module.exports,
            module,
            module.exports,
            __webpack_require__
        ); // Flag the module as loaded
        /******/
        /******/ /******/ module.l = true; // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
    } // The chunk loading function for additional chunks // Since all referenced chunks are already included // in this file, this function is empty here.
    /******/
    /******/ /******/ /******/ /******/ __webpack_require__.e = function requireEnsure() {
        /******/ return Promise.resolve();
        /******/
    }; // expose the modules object (__webpack_modules__)
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
        value,
        mode
    ) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (
            mode & 4 &&
            typeof value === 'object' &&
            value &&
            value.__esModule
        )
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(
                    ns,
                    key,
                    function(key) {
                        return value[key];
                    }.bind(null, key)
                );
        /******/ return ns;
        /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
        /******/ var getter =
            module && module.__esModule
                ? /******/ function getDefault() {
                      return module['default'];
                  }
                : /******/ function getModuleExports() {
                      return module;
                  };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // on error function for async loading
    /******/
    /******/ /******/ __webpack_require__.oe = function(err) {
        console.error(err);
        throw err;
    };
    /******/
    /******/ var jsonpArray = (window['webpackJsonp'] =
        window['webpackJsonp'] || []);
    /******/ var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    /******/ jsonpArray.push = webpackJsonpCallback;
    /******/ jsonpArray = jsonpArray.slice();
    /******/ for (var i = 0; i < jsonpArray.length; i++)
        webpackJsonpCallback(jsonpArray[i]);
    /******/ var parentJsonpFunction = oldJsonpFunction; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
})(
    /************************************************************************/
    /******/ [
        /* 0 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                1
            );

            // FIXME 这里没有封装为handlerManager类的原因是Webpack貌似有个坑，import无法使用变量（？）
            // TODO 遍历handler文件夹import
            const handlers = [
                Promise.resolve(/* import() */).then(
                    __webpack_require__.bind(null, 12)
                ),
                Promise.resolve(/* import() */).then(
                    __webpack_require__.bind(null, 13)
                )
            ];

            Promise.all(handlers).then(async e => {
                for (const fn of e) await fn.default();
                Object(_router__WEBPACK_IMPORTED_MODULE_0__['default'])();
            });

            /***/
        },
        /* 1 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _util_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                2
            );
            /* harmony import */ var _util_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                3
            );
            /* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                4
            );
            /* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                url__WEBPACK_IMPORTED_MODULE_2__
            );

            const router = new _util_router__WEBPACK_IMPORTED_MODULE_0__[
                'default'
            ]();

            const hrefObj = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(
                    location.href
                ),
                href = `${hrefObj.host}${hrefObj.pathname}`;

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = async () => {
                bpLogger.debug(href);
                //Index
                router.push(
                    new _util_route__WEBPACK_IMPORTED_MODULE_1__['default'](
                        '$',
                        Promise.resolve(/* import() */).then(
                            __webpack_require__.bind(null, 14)
                        )
                    )
                );
                //Video
                // router.push(new Route('av\d+$', syncImport('./routes/video')));
                // router.push(new Route('video/av\d+$', syncImport('./routes/video')));
                //Whitelist
                router.push(
                    new _util_route__WEBPACK_IMPORTED_MODULE_1__['default'](
                        '[api|me]'
                    )
                );
                router.push(
                    new _util_route__WEBPACK_IMPORTED_MODULE_1__['default'](
                        '.*'
                    )
                );

                router.load(href);
            };

            /***/
        },
        /* 2 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'default',
                function() {
                    return Router;
                }
            );
            class Router {
                constructor() {
                    this._routes = [];
                }

                push(router) {
                    this.routes.push(router);
                }

                get routes() {
                    return this._routes;
                }

                load(href) {
                    bpLogger.debug(this.routes);
                    this.routes.some(route => {
                        if (route.route && route.test(href)) {
                            route.route.then(result => {
                                result
                                    .default(route.match(href))
                                    .then(result => {
                                        if (result) return true;
                                    });
                            });
                        }
                    });
                }
            }

            /***/
        },
        /* 3 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'default',
                function() {
                    return BiliPlusRoute;
                }
            );
            class Route {
                constructor(url, route) {
                    this._url = url;
                    this._route = route;
                }

                get url() {
                    return this._url;
                }

                get route() {
                    return this._route;
                }

                test(link) {
                    let regex = new RegExp(this.url);
                    if (link.input) return regex.test(link.input);
                    else return regex.test(link);
                }

                match(link) {
                    let regex = new RegExp(this.url);
                    if (link.input) return regex.exec(link.input);
                    else return regex.exec(link);
                }
            }

            class BiliPlusRoute extends Route {
                constructor(url, route) {
                    super('www\\.biliplus\\.com/' + url, route);
                }
            }

            /***/
        },
        /* 4 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            var punycode = __webpack_require__(5);
            var util = __webpack_require__(8);

            exports.parse = urlParse;
            exports.resolve = urlResolve;
            exports.resolveObject = urlResolveObject;
            exports.format = urlFormat;

            exports.Url = Url;

            function Url() {
                this.protocol = null;
                this.slashes = null;
                this.auth = null;
                this.host = null;
                this.port = null;
                this.hostname = null;
                this.hash = null;
                this.search = null;
                this.query = null;
                this.pathname = null;
                this.path = null;
                this.href = null;
            }

            // Reference: RFC 3986, RFC 1808, RFC 2396

            // define these here so at least they only have to be
            // compiled once on the first module load.
            var protocolPattern = /^([a-z0-9.+-]+:)/i,
                portPattern = /:[0-9]*$/,
                // Special case for a simple path URL
                simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                // RFC 2396: characters reserved for delimiting URLs.
                // We actually just auto-escape these.
                delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
                // RFC 2396: characters not allowed for various reasons.
                unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
                // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
                autoEscape = ["'"].concat(unwise),
                // Characters that are never ever allowed in a hostname.
                // Note that any invalid chars are also handled, but these
                // are the ones that are *expected* to be seen, so we fast-path
                // them.
                nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
                hostEndingChars = ['/', '?', '#'],
                hostnameMaxLen = 255,
                hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
                hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                // protocols that can allow "unsafe" and "unwise" chars.
                unsafeProtocol = {
                    javascript: true,
                    'javascript:': true
                },
                // protocols that never have a hostname.
                hostlessProtocol = {
                    javascript: true,
                    'javascript:': true
                },
                // protocols that always contain a // bit.
                slashedProtocol = {
                    http: true,
                    https: true,
                    ftp: true,
                    gopher: true,
                    file: true,
                    'http:': true,
                    'https:': true,
                    'ftp:': true,
                    'gopher:': true,
                    'file:': true
                },
                querystring = __webpack_require__(9);

            function urlParse(url, parseQueryString, slashesDenoteHost) {
                if (url && util.isObject(url) && url instanceof Url) return url;

                var u = new Url();
                u.parse(url, parseQueryString, slashesDenoteHost);
                return u;
            }

            Url.prototype.parse = function(
                url,
                parseQueryString,
                slashesDenoteHost
            ) {
                if (!util.isString(url)) {
                    throw new TypeError(
                        "Parameter 'url' must be a string, not " + typeof url
                    );
                }

                // Copy chrome, IE, opera backslash-handling behavior.
                // Back slashes before the query string get converted to forward slashes
                // See: https://code.google.com/p/chromium/issues/detail?id=25916
                var queryIndex = url.indexOf('?'),
                    splitter =
                        queryIndex !== -1 && queryIndex < url.indexOf('#')
                            ? '?'
                            : '#',
                    uSplit = url.split(splitter),
                    slashRegex = /\\/g;
                uSplit[0] = uSplit[0].replace(slashRegex, '/');
                url = uSplit.join(splitter);

                var rest = url;

                // trim before proceeding.
                // This is to support parse stuff like "  http://foo.com  \n"
                rest = rest.trim();

                if (!slashesDenoteHost && url.split('#').length === 1) {
                    // Try fast path regexp
                    var simplePath = simplePathPattern.exec(rest);
                    if (simplePath) {
                        this.path = rest;
                        this.href = rest;
                        this.pathname = simplePath[1];
                        if (simplePath[2]) {
                            this.search = simplePath[2];
                            if (parseQueryString) {
                                this.query = querystring.parse(
                                    this.search.substr(1)
                                );
                            } else {
                                this.query = this.search.substr(1);
                            }
                        } else if (parseQueryString) {
                            this.search = '';
                            this.query = {};
                        }
                        return this;
                    }
                }

                var proto = protocolPattern.exec(rest);
                if (proto) {
                    proto = proto[0];
                    var lowerProto = proto.toLowerCase();
                    this.protocol = lowerProto;
                    rest = rest.substr(proto.length);
                }

                // figure out if it's got a host
                // user@server is *always* interpreted as a hostname, and url
                // resolution will treat //foo/bar as host=foo,path=bar because that's
                // how the browser resolves relative URLs.
                if (
                    slashesDenoteHost ||
                    proto ||
                    rest.match(/^\/\/[^@\/]+@[^@\/]+/)
                ) {
                    var slashes = rest.substr(0, 2) === '//';
                    if (slashes && !(proto && hostlessProtocol[proto])) {
                        rest = rest.substr(2);
                        this.slashes = true;
                    }
                }

                if (
                    !hostlessProtocol[proto] &&
                    (slashes || (proto && !slashedProtocol[proto]))
                ) {
                    // there's a hostname.
                    // the first instance of /, ?, ;, or # ends the host.
                    //
                    // If there is an @ in the hostname, then non-host chars *are* allowed
                    // to the left of the last @ sign, unless some host-ending character
                    // comes *before* the @-sign.
                    // URLs are obnoxious.
                    //
                    // ex:
                    // http://a@b@c/ => user:a@b host:c
                    // http://a@b?@c => user:a host:c path:/?@c

                    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
                    // Review our test case against browsers more comprehensively.

                    // find the first instance of any hostEndingChars
                    var hostEnd = -1;
                    for (var i = 0; i < hostEndingChars.length; i++) {
                        var hec = rest.indexOf(hostEndingChars[i]);
                        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
                            hostEnd = hec;
                    }

                    // at this point, either we have an explicit point where the
                    // auth portion cannot go past, or the last @ char is the decider.
                    var auth, atSign;
                    if (hostEnd === -1) {
                        // atSign can be anywhere.
                        atSign = rest.lastIndexOf('@');
                    } else {
                        // atSign must be in auth portion.
                        // http://a@b/c@d => host:b auth:a path:/c@d
                        atSign = rest.lastIndexOf('@', hostEnd);
                    }

                    // Now we have a portion which is definitely the auth.
                    // Pull that off.
                    if (atSign !== -1) {
                        auth = rest.slice(0, atSign);
                        rest = rest.slice(atSign + 1);
                        this.auth = decodeURIComponent(auth);
                    }

                    // the host is the remaining to the left of the first non-host char
                    hostEnd = -1;
                    for (var i = 0; i < nonHostChars.length; i++) {
                        var hec = rest.indexOf(nonHostChars[i]);
                        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
                            hostEnd = hec;
                    }
                    // if we still have not hit it, then the entire thing is a host.
                    if (hostEnd === -1) hostEnd = rest.length;

                    this.host = rest.slice(0, hostEnd);
                    rest = rest.slice(hostEnd);

                    // pull out port.
                    this.parseHost();

                    // we've indicated that there is a hostname,
                    // so even if it's empty, it has to be present.
                    this.hostname = this.hostname || '';

                    // if hostname begins with [ and ends with ]
                    // assume that it's an IPv6 address.
                    var ipv6Hostname =
                        this.hostname[0] === '[' &&
                        this.hostname[this.hostname.length - 1] === ']';

                    // validate a little.
                    if (!ipv6Hostname) {
                        var hostparts = this.hostname.split(/\./);
                        for (var i = 0, l = hostparts.length; i < l; i++) {
                            var part = hostparts[i];
                            if (!part) continue;
                            if (!part.match(hostnamePartPattern)) {
                                var newpart = '';
                                for (var j = 0, k = part.length; j < k; j++) {
                                    if (part.charCodeAt(j) > 127) {
                                        // we replace non-ASCII char with a temporary placeholder
                                        // we need this to make sure size of hostname is not
                                        // broken by replacing non-ASCII by nothing
                                        newpart += 'x';
                                    } else {
                                        newpart += part[j];
                                    }
                                }
                                // we test again with ASCII char only
                                if (!newpart.match(hostnamePartPattern)) {
                                    var validParts = hostparts.slice(0, i);
                                    var notHost = hostparts.slice(i + 1);
                                    var bit = part.match(hostnamePartStart);
                                    if (bit) {
                                        validParts.push(bit[1]);
                                        notHost.unshift(bit[2]);
                                    }
                                    if (notHost.length) {
                                        rest = '/' + notHost.join('.') + rest;
                                    }
                                    this.hostname = validParts.join('.');
                                    break;
                                }
                            }
                        }
                    }

                    if (this.hostname.length > hostnameMaxLen) {
                        this.hostname = '';
                    } else {
                        // hostnames are always lower case.
                        this.hostname = this.hostname.toLowerCase();
                    }

                    if (!ipv6Hostname) {
                        // IDNA Support: Returns a punycoded representation of "domain".
                        // It only converts parts of the domain name that
                        // have non-ASCII characters, i.e. it doesn't matter if
                        // you call it with a domain that already is ASCII-only.
                        this.hostname = punycode.toASCII(this.hostname);
                    }

                    var p = this.port ? ':' + this.port : '';
                    var h = this.hostname || '';
                    this.host = h + p;
                    this.href += this.host;

                    // strip [ and ] from the hostname
                    // the host field still retains them, though
                    if (ipv6Hostname) {
                        this.hostname = this.hostname.substr(
                            1,
                            this.hostname.length - 2
                        );
                        if (rest[0] !== '/') {
                            rest = '/' + rest;
                        }
                    }
                }

                // now rest is set to the post-host stuff.
                // chop off any delim chars.
                if (!unsafeProtocol[lowerProto]) {
                    // First, make 100% sure that any "autoEscape" chars get
                    // escaped, even if encodeURIComponent doesn't think they
                    // need to be.
                    for (var i = 0, l = autoEscape.length; i < l; i++) {
                        var ae = autoEscape[i];
                        if (rest.indexOf(ae) === -1) continue;
                        var esc = encodeURIComponent(ae);
                        if (esc === ae) {
                            esc = escape(ae);
                        }
                        rest = rest.split(ae).join(esc);
                    }
                }

                // chop off from the tail first.
                var hash = rest.indexOf('#');
                if (hash !== -1) {
                    // got a fragment string.
                    this.hash = rest.substr(hash);
                    rest = rest.slice(0, hash);
                }
                var qm = rest.indexOf('?');
                if (qm !== -1) {
                    this.search = rest.substr(qm);
                    this.query = rest.substr(qm + 1);
                    if (parseQueryString) {
                        this.query = querystring.parse(this.query);
                    }
                    rest = rest.slice(0, qm);
                } else if (parseQueryString) {
                    // no query string, but parseQueryString still requested
                    this.search = '';
                    this.query = {};
                }
                if (rest) this.pathname = rest;
                if (
                    slashedProtocol[lowerProto] &&
                    this.hostname &&
                    !this.pathname
                ) {
                    this.pathname = '/';
                }

                //to support http.request
                if (this.pathname || this.search) {
                    var p = this.pathname || '';
                    var s = this.search || '';
                    this.path = p + s;
                }

                // finally, reconstruct the href based on what has been validated.
                this.href = this.format();
                return this;
            };

            // format a parsed object into a url string
            function urlFormat(obj) {
                // ensure it's an object, and not a string url.
                // If it's an obj, this is a no-op.
                // this way, you can call url_format() on strings
                // to clean up potentially wonky urls.
                if (util.isString(obj)) obj = urlParse(obj);
                if (!(obj instanceof Url))
                    return Url.prototype.format.call(obj);
                return obj.format();
            }

            Url.prototype.format = function() {
                var auth = this.auth || '';
                if (auth) {
                    auth = encodeURIComponent(auth);
                    auth = auth.replace(/%3A/i, ':');
                    auth += '@';
                }

                var protocol = this.protocol || '',
                    pathname = this.pathname || '',
                    hash = this.hash || '',
                    host = false,
                    query = '';

                if (this.host) {
                    host = auth + this.host;
                } else if (this.hostname) {
                    host =
                        auth +
                        (this.hostname.indexOf(':') === -1
                            ? this.hostname
                            : '[' + this.hostname + ']');
                    if (this.port) {
                        host += ':' + this.port;
                    }
                }

                if (
                    this.query &&
                    util.isObject(this.query) &&
                    Object.keys(this.query).length
                ) {
                    query = querystring.stringify(this.query);
                }

                var search = this.search || (query && '?' + query) || '';

                if (protocol && protocol.substr(-1) !== ':') protocol += ':';

                // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
                // unless they had them to begin with.
                if (
                    this.slashes ||
                    ((!protocol || slashedProtocol[protocol]) && host !== false)
                ) {
                    host = '//' + (host || '');
                    if (pathname && pathname.charAt(0) !== '/')
                        pathname = '/' + pathname;
                } else if (!host) {
                    host = '';
                }

                if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
                if (search && search.charAt(0) !== '?') search = '?' + search;

                pathname = pathname.replace(/[?#]/g, function(match) {
                    return encodeURIComponent(match);
                });
                search = search.replace('#', '%23');

                return protocol + host + pathname + search + hash;
            };

            function urlResolve(source, relative) {
                return urlParse(source, false, true).resolve(relative);
            }

            Url.prototype.resolve = function(relative) {
                return this.resolveObject(
                    urlParse(relative, false, true)
                ).format();
            };

            function urlResolveObject(source, relative) {
                if (!source) return relative;
                return urlParse(source, false, true).resolveObject(relative);
            }

            Url.prototype.resolveObject = function(relative) {
                if (util.isString(relative)) {
                    var rel = new Url();
                    rel.parse(relative, false, true);
                    relative = rel;
                }

                var result = new Url();
                var tkeys = Object.keys(this);
                for (var tk = 0; tk < tkeys.length; tk++) {
                    var tkey = tkeys[tk];
                    result[tkey] = this[tkey];
                }

                // hash is always overridden, no matter what.
                // even href="" will remove it.
                result.hash = relative.hash;

                // if the relative url is empty, then there's nothing left to do here.
                if (relative.href === '') {
                    result.href = result.format();
                    return result;
                }

                // hrefs like //foo/bar always cut to the protocol.
                if (relative.slashes && !relative.protocol) {
                    // take everything except the protocol from relative
                    var rkeys = Object.keys(relative);
                    for (var rk = 0; rk < rkeys.length; rk++) {
                        var rkey = rkeys[rk];
                        if (rkey !== 'protocol') result[rkey] = relative[rkey];
                    }

                    //urlParse appends trailing / to urls like http://www.example.com
                    if (
                        slashedProtocol[result.protocol] &&
                        result.hostname &&
                        !result.pathname
                    ) {
                        result.path = result.pathname = '/';
                    }

                    result.href = result.format();
                    return result;
                }

                if (
                    relative.protocol &&
                    relative.protocol !== result.protocol
                ) {
                    // if it's a known url protocol, then changing
                    // the protocol does weird things
                    // first, if it's not file:, then we MUST have a host,
                    // and if there was a path
                    // to begin with, then we MUST have a path.
                    // if it is file:, then the host is dropped,
                    // because that's known to be hostless.
                    // anything else is assumed to be absolute.
                    if (!slashedProtocol[relative.protocol]) {
                        var keys = Object.keys(relative);
                        for (var v = 0; v < keys.length; v++) {
                            var k = keys[v];
                            result[k] = relative[k];
                        }
                        result.href = result.format();
                        return result;
                    }

                    result.protocol = relative.protocol;
                    if (
                        !relative.host &&
                        !hostlessProtocol[relative.protocol]
                    ) {
                        var relPath = (relative.pathname || '').split('/');
                        while (
                            relPath.length &&
                            !(relative.host = relPath.shift())
                        );
                        if (!relative.host) relative.host = '';
                        if (!relative.hostname) relative.hostname = '';
                        if (relPath[0] !== '') relPath.unshift('');
                        if (relPath.length < 2) relPath.unshift('');
                        result.pathname = relPath.join('/');
                    } else {
                        result.pathname = relative.pathname;
                    }
                    result.search = relative.search;
                    result.query = relative.query;
                    result.host = relative.host || '';
                    result.auth = relative.auth;
                    result.hostname = relative.hostname || relative.host;
                    result.port = relative.port;
                    // to support http.request
                    if (result.pathname || result.search) {
                        var p = result.pathname || '';
                        var s = result.search || '';
                        result.path = p + s;
                    }
                    result.slashes = result.slashes || relative.slashes;
                    result.href = result.format();
                    return result;
                }

                var isSourceAbs =
                        result.pathname && result.pathname.charAt(0) === '/',
                    isRelAbs =
                        relative.host ||
                        (relative.pathname &&
                            relative.pathname.charAt(0) === '/'),
                    mustEndAbs =
                        isRelAbs ||
                        isSourceAbs ||
                        (result.host && relative.pathname),
                    removeAllDots = mustEndAbs,
                    srcPath =
                        (result.pathname && result.pathname.split('/')) || [],
                    relPath =
                        (relative.pathname && relative.pathname.split('/')) ||
                        [],
                    psychotic =
                        result.protocol && !slashedProtocol[result.protocol];

                // if the url is a non-slashed url, then relative
                // links like ../.. should be able
                // to crawl up to the hostname, as well.  This is strange.
                // result.protocol has already been set by now.
                // Later on, put the first path part into the host field.
                if (psychotic) {
                    result.hostname = '';
                    result.port = null;
                    if (result.host) {
                        if (srcPath[0] === '') srcPath[0] = result.host;
                        else srcPath.unshift(result.host);
                    }
                    result.host = '';
                    if (relative.protocol) {
                        relative.hostname = null;
                        relative.port = null;
                        if (relative.host) {
                            if (relPath[0] === '') relPath[0] = relative.host;
                            else relPath.unshift(relative.host);
                        }
                        relative.host = null;
                    }
                    mustEndAbs =
                        mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
                }

                if (isRelAbs) {
                    // it's absolute.
                    result.host =
                        relative.host || relative.host === ''
                            ? relative.host
                            : result.host;
                    result.hostname =
                        relative.hostname || relative.hostname === ''
                            ? relative.hostname
                            : result.hostname;
                    result.search = relative.search;
                    result.query = relative.query;
                    srcPath = relPath;
                    // fall through to the dot-handling below.
                } else if (relPath.length) {
                    // it's relative
                    // throw away the existing file, and take the new path instead.
                    if (!srcPath) srcPath = [];
                    srcPath.pop();
                    srcPath = srcPath.concat(relPath);
                    result.search = relative.search;
                    result.query = relative.query;
                } else if (!util.isNullOrUndefined(relative.search)) {
                    // just pull out the search.
                    // like href='?foo'.
                    // Put this after the other two cases because it simplifies the booleans
                    if (psychotic) {
                        result.hostname = result.host = srcPath.shift();
                        //occationaly the auth can get stuck only in host
                        //this especially happens in cases like
                        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
                        var authInHost =
                            result.host && result.host.indexOf('@') > 0
                                ? result.host.split('@')
                                : false;
                        if (authInHost) {
                            result.auth = authInHost.shift();
                            result.host = result.hostname = authInHost.shift();
                        }
                    }
                    result.search = relative.search;
                    result.query = relative.query;
                    //to support http.request
                    if (
                        !util.isNull(result.pathname) ||
                        !util.isNull(result.search)
                    ) {
                        result.path =
                            (result.pathname ? result.pathname : '') +
                            (result.search ? result.search : '');
                    }
                    result.href = result.format();
                    return result;
                }

                if (!srcPath.length) {
                    // no path at all.  easy.
                    // we've already handled the other stuff above.
                    result.pathname = null;
                    //to support http.request
                    if (result.search) {
                        result.path = '/' + result.search;
                    } else {
                        result.path = null;
                    }
                    result.href = result.format();
                    return result;
                }

                // if a url ENDs in . or .., then it must get a trailing slash.
                // however, if it ends in anything else non-slashy,
                // then it must NOT get a trailing slash.
                var last = srcPath.slice(-1)[0];
                var hasTrailingSlash =
                    ((result.host || relative.host || srcPath.length > 1) &&
                        (last === '.' || last === '..')) ||
                    last === '';

                // strip single dots, resolve double dots to parent dir
                // if the path tries to go above the root, `up` ends up > 0
                var up = 0;
                for (var i = srcPath.length; i >= 0; i--) {
                    last = srcPath[i];
                    if (last === '.') {
                        srcPath.splice(i, 1);
                    } else if (last === '..') {
                        srcPath.splice(i, 1);
                        up++;
                    } else if (up) {
                        srcPath.splice(i, 1);
                        up--;
                    }
                }

                // if the path is allowed to go above the root, restore leading ..s
                if (!mustEndAbs && !removeAllDots) {
                    for (; up--; up) {
                        srcPath.unshift('..');
                    }
                }

                if (
                    mustEndAbs &&
                    srcPath[0] !== '' &&
                    (!srcPath[0] || srcPath[0].charAt(0) !== '/')
                ) {
                    srcPath.unshift('');
                }

                if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
                    srcPath.push('');
                }

                var isAbsolute =
                    srcPath[0] === '' ||
                    (srcPath[0] && srcPath[0].charAt(0) === '/');

                // put the host back
                if (psychotic) {
                    result.hostname = result.host = isAbsolute
                        ? ''
                        : srcPath.length
                        ? srcPath.shift()
                        : '';
                    //occationaly the auth can get stuck only in host
                    //this especially happens in cases like
                    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
                    var authInHost =
                        result.host && result.host.indexOf('@') > 0
                            ? result.host.split('@')
                            : false;
                    if (authInHost) {
                        result.auth = authInHost.shift();
                        result.host = result.hostname = authInHost.shift();
                    }
                }

                mustEndAbs = mustEndAbs || (result.host && srcPath.length);

                if (mustEndAbs && !isAbsolute) {
                    srcPath.unshift('');
                }

                if (!srcPath.length) {
                    result.pathname = null;
                    result.path = null;
                } else {
                    result.pathname = srcPath.join('/');
                }

                //to support request.http
                if (
                    !util.isNull(result.pathname) ||
                    !util.isNull(result.search)
                ) {
                    result.path =
                        (result.pathname ? result.pathname : '') +
                        (result.search ? result.search : '');
                }
                result.auth = relative.auth || result.auth;
                result.slashes = result.slashes || relative.slashes;
                result.href = result.format();
                return result;
            };

            Url.prototype.parseHost = function() {
                var host = this.host;
                var port = portPattern.exec(host);
                if (port) {
                    port = port[0];
                    if (port !== ':') {
                        this.port = port.substr(1);
                    }
                    host = host.substr(0, host.length - port.length);
                }
                if (host) this.hostname = host;
            };

            /***/
        },
        /* 5 */
        /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(module, global) {
                var __WEBPACK_AMD_DEFINE_RESULT__; /*! https://mths.be/punycode v1.4.1 by @mathias */
                (function(root) {
                    /** Detect free variables */
                    var freeExports =
                        true && exports && !exports.nodeType && exports;
                    var freeModule =
                        true && module && !module.nodeType && module;
                    var freeGlobal = typeof global == 'object' && global;
                    if (
                        freeGlobal.global === freeGlobal ||
                        freeGlobal.window === freeGlobal ||
                        freeGlobal.self === freeGlobal
                    ) {
                        root = freeGlobal;
                    }

                    /**
                     * The `punycode` object.
                     * @name punycode
                     * @type Object
                     */
                    var punycode,
                        /** Highest positive signed 32-bit float value */
                        maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
                        /** Bootstring parameters */
                        base = 36,
                        tMin = 1,
                        tMax = 26,
                        skew = 38,
                        damp = 700,
                        initialBias = 72,
                        initialN = 128, // 0x80
                        delimiter = '-', // '\x2D'
                        /** Regular expressions */
                        regexPunycode = /^xn--/,
                        regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
                        regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
                        /** Error messages */
                        errors = {
                            overflow:
                                'Overflow: input needs wider integers to process',
                            'not-basic':
                                'Illegal input >= 0x80 (not a basic code point)',
                            'invalid-input': 'Invalid input'
                        },
                        /** Convenience shortcuts */
                        baseMinusTMin = base - tMin,
                        floor = Math.floor,
                        stringFromCharCode = String.fromCharCode,
                        /** Temporary variable */
                        key;

                    /*--------------------------------------------------------------------------*/

                    /**
                     * A generic error utility function.
                     * @private
                     * @param {String} type The error type.
                     * @returns {Error} Throws a `RangeError` with the applicable error message.
                     */
                    function error(type) {
                        throw new RangeError(errors[type]);
                    }

                    /**
                     * A generic `Array#map` utility function.
                     * @private
                     * @param {Array} array The array to iterate over.
                     * @param {Function} callback The function that gets called for every array
                     * item.
                     * @returns {Array} A new array of values returned by the callback function.
                     */
                    function map(array, fn) {
                        var length = array.length;
                        var result = [];
                        while (length--) {
                            result[length] = fn(array[length]);
                        }
                        return result;
                    }

                    /**
                     * A simple `Array#map`-like wrapper to work with domain name strings or email
                     * addresses.
                     * @private
                     * @param {String} domain The domain name or email address.
                     * @param {Function} callback The function that gets called for every
                     * character.
                     * @returns {Array} A new string of characters returned by the callback
                     * function.
                     */
                    function mapDomain(string, fn) {
                        var parts = string.split('@');
                        var result = '';
                        if (parts.length > 1) {
                            // In email addresses, only the domain name should be punycoded. Leave
                            // the local part (i.e. everything up to `@`) intact.
                            result = parts[0] + '@';
                            string = parts[1];
                        }
                        // Avoid `split(regex)` for IE8 compatibility. See #17.
                        string = string.replace(regexSeparators, '\x2E');
                        var labels = string.split('.');
                        var encoded = map(labels, fn).join('.');
                        return result + encoded;
                    }

                    /**
                     * Creates an array containing the numeric code points of each Unicode
                     * character in the string. While JavaScript uses UCS-2 internally,
                     * this function will convert a pair of surrogate halves (each of which
                     * UCS-2 exposes as separate characters) into a single code point,
                     * matching UTF-16.
                     * @see `punycode.ucs2.encode`
                     * @see <https://mathiasbynens.be/notes/javascript-encoding>
                     * @memberOf punycode.ucs2
                     * @name decode
                     * @param {String} string The Unicode input string (UCS-2).
                     * @returns {Array} The new array of code points.
                     */
                    function ucs2decode(string) {
                        var output = [],
                            counter = 0,
                            length = string.length,
                            value,
                            extra;
                        while (counter < length) {
                            value = string.charCodeAt(counter++);
                            if (
                                value >= 0xd800 &&
                                value <= 0xdbff &&
                                counter < length
                            ) {
                                // high surrogate, and there is a next character
                                extra = string.charCodeAt(counter++);
                                if ((extra & 0xfc00) == 0xdc00) {
                                    // low surrogate
                                    output.push(
                                        ((value & 0x3ff) << 10) +
                                            (extra & 0x3ff) +
                                            0x10000
                                    );
                                } else {
                                    // unmatched surrogate; only append this code unit, in case the next
                                    // code unit is the high surrogate of a surrogate pair
                                    output.push(value);
                                    counter--;
                                }
                            } else {
                                output.push(value);
                            }
                        }
                        return output;
                    }

                    /**
                     * Creates a string based on an array of numeric code points.
                     * @see `punycode.ucs2.decode`
                     * @memberOf punycode.ucs2
                     * @name encode
                     * @param {Array} codePoints The array of numeric code points.
                     * @returns {String} The new Unicode string (UCS-2).
                     */
                    function ucs2encode(array) {
                        return map(array, function(value) {
                            var output = '';
                            if (value > 0xffff) {
                                value -= 0x10000;
                                output += stringFromCharCode(
                                    ((value >>> 10) & 0x3ff) | 0xd800
                                );
                                value = 0xdc00 | (value & 0x3ff);
                            }
                            output += stringFromCharCode(value);
                            return output;
                        }).join('');
                    }

                    /**
                     * Converts a basic code point into a digit/integer.
                     * @see `digitToBasic()`
                     * @private
                     * @param {Number} codePoint The basic numeric code point value.
                     * @returns {Number} The numeric value of a basic code point (for use in
                     * representing integers) in the range `0` to `base - 1`, or `base` if
                     * the code point does not represent a value.
                     */
                    function basicToDigit(codePoint) {
                        if (codePoint - 48 < 10) {
                            return codePoint - 22;
                        }
                        if (codePoint - 65 < 26) {
                            return codePoint - 65;
                        }
                        if (codePoint - 97 < 26) {
                            return codePoint - 97;
                        }
                        return base;
                    }

                    /**
                     * Converts a digit/integer into a basic code point.
                     * @see `basicToDigit()`
                     * @private
                     * @param {Number} digit The numeric value of a basic code point.
                     * @returns {Number} The basic code point whose value (when used for
                     * representing integers) is `digit`, which needs to be in the range
                     * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
                     * used; else, the lowercase form is used. The behavior is undefined
                     * if `flag` is non-zero and `digit` has no uppercase form.
                     */
                    function digitToBasic(digit, flag) {
                        //  0..25 map to ASCII a..z or A..Z
                        // 26..35 map to ASCII 0..9
                        return (
                            digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5)
                        );
                    }

                    /**
                     * Bias adaptation function as per section 3.4 of RFC 3492.
                     * https://tools.ietf.org/html/rfc3492#section-3.4
                     * @private
                     */
                    function adapt(delta, numPoints, firstTime) {
                        var k = 0;
                        delta = firstTime ? floor(delta / damp) : delta >> 1;
                        delta += floor(delta / numPoints);
                        for (
                            ;
                            /* no initialization */ delta >
                            (baseMinusTMin * tMax) >> 1;
                            k += base
                        ) {
                            delta = floor(delta / baseMinusTMin);
                        }
                        return floor(
                            k + ((baseMinusTMin + 1) * delta) / (delta + skew)
                        );
                    }

                    /**
                     * Converts a Punycode string of ASCII-only symbols to a string of Unicode
                     * symbols.
                     * @memberOf punycode
                     * @param {String} input The Punycode string of ASCII-only symbols.
                     * @returns {String} The resulting string of Unicode symbols.
                     */
                    function decode(input) {
                        // Don't use UCS-2
                        var output = [],
                            inputLength = input.length,
                            out,
                            i = 0,
                            n = initialN,
                            bias = initialBias,
                            basic,
                            j,
                            index,
                            oldi,
                            w,
                            k,
                            digit,
                            t,
                            /** Cached calculation results */
                            baseMinusT;

                        // Handle the basic code points: let `basic` be the number of input code
                        // points before the last delimiter, or `0` if there is none, then copy
                        // the first basic code points to the output.

                        basic = input.lastIndexOf(delimiter);
                        if (basic < 0) {
                            basic = 0;
                        }

                        for (j = 0; j < basic; ++j) {
                            // if it's not a basic code point
                            if (input.charCodeAt(j) >= 0x80) {
                                error('not-basic');
                            }
                            output.push(input.charCodeAt(j));
                        }

                        // Main decoding loop: start just after the last delimiter if any basic code
                        // points were copied; start at the beginning otherwise.

                        for (
                            index = basic > 0 ? basic + 1 : 0;
                            index < inputLength /* no final expression */;

                        ) {
                            // `index` is the index of the next character to be consumed.
                            // Decode a generalized variable-length integer into `delta`,
                            // which gets added to `i`. The overflow checking is easier
                            // if we increase `i` as we go, then subtract off its starting
                            // value at the end to obtain `delta`.
                            for (
                                oldi = i, w = 1, k = base /* no condition */;
                                ;
                                k += base
                            ) {
                                if (index >= inputLength) {
                                    error('invalid-input');
                                }

                                digit = basicToDigit(input.charCodeAt(index++));

                                if (
                                    digit >= base ||
                                    digit > floor((maxInt - i) / w)
                                ) {
                                    error('overflow');
                                }

                                i += digit * w;
                                t =
                                    k <= bias
                                        ? tMin
                                        : k >= bias + tMax
                                        ? tMax
                                        : k - bias;

                                if (digit < t) {
                                    break;
                                }

                                baseMinusT = base - t;
                                if (w > floor(maxInt / baseMinusT)) {
                                    error('overflow');
                                }

                                w *= baseMinusT;
                            }

                            out = output.length + 1;
                            bias = adapt(i - oldi, out, oldi == 0);

                            // `i` was supposed to wrap around from `out` to `0`,
                            // incrementing `n` each time, so we'll fix that now:
                            if (floor(i / out) > maxInt - n) {
                                error('overflow');
                            }

                            n += floor(i / out);
                            i %= out;

                            // Insert `n` at position `i` of the output
                            output.splice(i++, 0, n);
                        }

                        return ucs2encode(output);
                    }

                    /**
                     * Converts a string of Unicode symbols (e.g. a domain name label) to a
                     * Punycode string of ASCII-only symbols.
                     * @memberOf punycode
                     * @param {String} input The string of Unicode symbols.
                     * @returns {String} The resulting Punycode string of ASCII-only symbols.
                     */
                    function encode(input) {
                        var n,
                            delta,
                            handledCPCount,
                            basicLength,
                            bias,
                            j,
                            m,
                            q,
                            k,
                            t,
                            currentValue,
                            output = [],
                            /** `inputLength` will hold the number of code points in `input`. */
                            inputLength,
                            /** Cached calculation results */
                            handledCPCountPlusOne,
                            baseMinusT,
                            qMinusT;

                        // Convert the input in UCS-2 to Unicode
                        input = ucs2decode(input);

                        // Cache the length
                        inputLength = input.length;

                        // Initialize the state
                        n = initialN;
                        delta = 0;
                        bias = initialBias;

                        // Handle the basic code points
                        for (j = 0; j < inputLength; ++j) {
                            currentValue = input[j];
                            if (currentValue < 0x80) {
                                output.push(stringFromCharCode(currentValue));
                            }
                        }

                        handledCPCount = basicLength = output.length;

                        // `handledCPCount` is the number of code points that have been handled;
                        // `basicLength` is the number of basic code points.

                        // Finish the basic string - if it is not empty - with a delimiter
                        if (basicLength) {
                            output.push(delimiter);
                        }

                        // Main encoding loop:
                        while (handledCPCount < inputLength) {
                            // All non-basic code points < n have been handled already. Find the next
                            // larger one:
                            for (m = maxInt, j = 0; j < inputLength; ++j) {
                                currentValue = input[j];
                                if (currentValue >= n && currentValue < m) {
                                    m = currentValue;
                                }
                            }

                            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
                            // but guard against overflow
                            handledCPCountPlusOne = handledCPCount + 1;
                            if (
                                m - n >
                                floor((maxInt - delta) / handledCPCountPlusOne)
                            ) {
                                error('overflow');
                            }

                            delta += (m - n) * handledCPCountPlusOne;
                            n = m;

                            for (j = 0; j < inputLength; ++j) {
                                currentValue = input[j];

                                if (currentValue < n && ++delta > maxInt) {
                                    error('overflow');
                                }

                                if (currentValue == n) {
                                    // Represent delta as a generalized variable-length integer
                                    for (
                                        q = delta, k = base /* no condition */;
                                        ;
                                        k += base
                                    ) {
                                        t =
                                            k <= bias
                                                ? tMin
                                                : k >= bias + tMax
                                                ? tMax
                                                : k - bias;
                                        if (q < t) {
                                            break;
                                        }
                                        qMinusT = q - t;
                                        baseMinusT = base - t;
                                        output.push(
                                            stringFromCharCode(
                                                digitToBasic(
                                                    t + (qMinusT % baseMinusT),
                                                    0
                                                )
                                            )
                                        );
                                        q = floor(qMinusT / baseMinusT);
                                    }

                                    output.push(
                                        stringFromCharCode(digitToBasic(q, 0))
                                    );
                                    bias = adapt(
                                        delta,
                                        handledCPCountPlusOne,
                                        handledCPCount == basicLength
                                    );
                                    delta = 0;
                                    ++handledCPCount;
                                }
                            }

                            ++delta;
                            ++n;
                        }
                        return output.join('');
                    }

                    /**
                     * Converts a Punycode string representing a domain name or an email address
                     * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
                     * it doesn't matter if you call it on a string that has already been
                     * converted to Unicode.
                     * @memberOf punycode
                     * @param {String} input The Punycoded domain name or email address to
                     * convert to Unicode.
                     * @returns {String} The Unicode representation of the given Punycode
                     * string.
                     */
                    function toUnicode(input) {
                        return mapDomain(input, function(string) {
                            return regexPunycode.test(string)
                                ? decode(string.slice(4).toLowerCase())
                                : string;
                        });
                    }

                    /**
                     * Converts a Unicode string representing a domain name or an email address to
                     * Punycode. Only the non-ASCII parts of the domain name will be converted,
                     * i.e. it doesn't matter if you call it with a domain that's already in
                     * ASCII.
                     * @memberOf punycode
                     * @param {String} input The domain name or email address to convert, as a
                     * Unicode string.
                     * @returns {String} The Punycode representation of the given domain name or
                     * email address.
                     */
                    function toASCII(input) {
                        return mapDomain(input, function(string) {
                            return regexNonASCII.test(string)
                                ? 'xn--' + encode(string)
                                : string;
                        });
                    }

                    /*--------------------------------------------------------------------------*/

                    /** Define the public API */
                    punycode = {
                        /**
                         * A string representing the current Punycode.js version number.
                         * @memberOf punycode
                         * @type String
                         */
                        version: '1.4.1',
                        /**
                         * An object of methods to convert from JavaScript's internal character
                         * representation (UCS-2) to Unicode code points, and back.
                         * @see <https://mathiasbynens.be/notes/javascript-encoding>
                         * @memberOf punycode
                         * @type Object
                         */
                        ucs2: {
                            decode: ucs2decode,
                            encode: ucs2encode
                        },
                        decode: decode,
                        encode: encode,
                        toASCII: toASCII,
                        toUnicode: toUnicode
                    };

                    /** Expose `punycode` */
                    // Some AMD build optimizers, like r.js, check for specific condition patterns
                    // like the following:
                    if (true) {
                        !((__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                            return punycode;
                        }.call(exports, __webpack_require__, exports, module)),
                        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    } else {
                    }
                })(this);

                /* WEBPACK VAR INJECTION */
            }.call(
                this,
                __webpack_require__(6)(module),
                __webpack_require__(7)
            ));

            /***/
        },
        /* 6 */
        /***/ function(module, exports) {
            module.exports = function(module) {
                if (!module.webpackPolyfill) {
                    module.deprecate = function() {};
                    module.paths = [];
                    // module.parent = undefined by default
                    if (!module.children) module.children = [];
                    Object.defineProperty(module, 'loaded', {
                        enumerable: true,
                        get: function() {
                            return module.l;
                        }
                    });
                    Object.defineProperty(module, 'id', {
                        enumerable: true,
                        get: function() {
                            return module.i;
                        }
                    });
                    module.webpackPolyfill = 1;
                }
                return module;
            };

            /***/
        },
        /* 7 */
        /***/ function(module, exports) {
            var g;

            // This works in non-strict mode
            g = (function() {
                return this;
            })();

            try {
                // This works if eval is allowed (see CSP)
                g = g || new Function('return this')();
            } catch (e) {
                // This works if the window reference is available
                if (typeof window === 'object') g = window;
            }

            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}

            module.exports = g;

            /***/
        },
        /* 8 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            module.exports = {
                isString: function(arg) {
                    return typeof arg === 'string';
                },
                isObject: function(arg) {
                    return typeof arg === 'object' && arg !== null;
                },
                isNull: function(arg) {
                    return arg === null;
                },
                isNullOrUndefined: function(arg) {
                    return arg == null;
                }
            };

            /***/
        },
        /* 9 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            exports.decode = exports.parse = __webpack_require__(10);
            exports.encode = exports.stringify = __webpack_require__(11);

            /***/
        },
        /* 10 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            // If obj.hasOwnProperty has been overridden, then calling
            // obj.hasOwnProperty(prop) will break.
            // See: https://github.com/joyent/node/issues/1707
            function hasOwnProperty(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            }

            module.exports = function(qs, sep, eq, options) {
                sep = sep || '&';
                eq = eq || '=';
                var obj = {};

                if (typeof qs !== 'string' || qs.length === 0) {
                    return obj;
                }

                var regexp = /\+/g;
                qs = qs.split(sep);

                var maxKeys = 1000;
                if (options && typeof options.maxKeys === 'number') {
                    maxKeys = options.maxKeys;
                }

                var len = qs.length;
                // maxKeys <= 0 means that we should not limit keys count
                if (maxKeys > 0 && len > maxKeys) {
                    len = maxKeys;
                }

                for (var i = 0; i < len; ++i) {
                    var x = qs[i].replace(regexp, '%20'),
                        idx = x.indexOf(eq),
                        kstr,
                        vstr,
                        k,
                        v;

                    if (idx >= 0) {
                        kstr = x.substr(0, idx);
                        vstr = x.substr(idx + 1);
                    } else {
                        kstr = x;
                        vstr = '';
                    }

                    k = decodeURIComponent(kstr);
                    v = decodeURIComponent(vstr);

                    if (!hasOwnProperty(obj, k)) {
                        obj[k] = v;
                    } else if (isArray(obj[k])) {
                        obj[k].push(v);
                    } else {
                        obj[k] = [obj[k], v];
                    }
                }

                return obj;
            };

            var isArray =
                Array.isArray ||
                function(xs) {
                    return (
                        Object.prototype.toString.call(xs) === '[object Array]'
                    );
                };

            /***/
        },
        /* 11 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            var stringifyPrimitive = function(v) {
                switch (typeof v) {
                    case 'string':
                        return v;

                    case 'boolean':
                        return v ? 'true' : 'false';

                    case 'number':
                        return isFinite(v) ? v : '';

                    default:
                        return '';
                }
            };

            module.exports = function(obj, sep, eq, name) {
                sep = sep || '&';
                eq = eq || '=';
                if (obj === null) {
                    obj = undefined;
                }

                if (typeof obj === 'object') {
                    return map(objectKeys(obj), function(k) {
                        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
                        if (isArray(obj[k])) {
                            return map(obj[k], function(v) {
                                return (
                                    ks +
                                    encodeURIComponent(stringifyPrimitive(v))
                                );
                            }).join(sep);
                        } else {
                            return (
                                ks +
                                encodeURIComponent(stringifyPrimitive(obj[k]))
                            );
                        }
                    }).join(sep);
                }

                if (!name) return '';
                return (
                    encodeURIComponent(stringifyPrimitive(name)) +
                    eq +
                    encodeURIComponent(stringifyPrimitive(obj))
                );
            };

            var isArray =
                Array.isArray ||
                function(xs) {
                    return (
                        Object.prototype.toString.call(xs) === '[object Array]'
                    );
                };

            function map(xs, f) {
                if (xs.map) return xs.map(f);
                var res = [];
                for (var i = 0; i < xs.length; i++) {
                    res.push(f(xs[i], i));
                }
                return res;
            }

            var objectKeys =
                Object.keys ||
                function(obj) {
                    var res = [];
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key))
                            res.push(key);
                    }
                    return res;
                };

            /***/
        },
        /* 12 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = async ctx => {
                // Init global vars
                window.bpLogger = (await Promise.resolve(/* import() */).then(
                    __webpack_require__.bind(null, 29)
                )).default;
                window.__proto__ = (await Promise.resolve(/* import() */).then(
                    __webpack_require__.bind(null, 31)
                )).default;
                window.bpVars = (await Promise.resolve(/* import() */).then(
                    __webpack_require__.bind(null, 32)
                )).default;
                document.documentElement.lang = 'zh-cmn-Hans';
            };

            /***/
        },
        /* 13 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__[
                'default'
            ] = async ctx => {
                $(() => {
                    const $main = $('main');
                    $main.on('scroll', () => {
                        bpThrottle(() => {
                            if ($main.scrollTop() > 0) {
                                $('#header').addClass('on');
                            } else {
                                $('#header').removeClass('on');
                            }
                        }, 400);
                    });

                    const $avatar = $('#avatar');
                    $avatar
                        .children()
                        .css('background-image', `url(${bpVars.user.face})`);

                    // TODO 加搜索焦点效果、清空按钮
                    const $search = $('#header-search');
                    const $search_input = $search.find('input');
                    const $search_clear = $('#header-search-clear i');
                    $search.click(() => {
                        $search_input.focus();
                    });
                    $search.keyup(e => {
                        const search_text = $search_input.val();
                        if (e.which === 13 && search_text.length > 0) {
                            bpSearch(search_text);
                            $search_input.val('');
                            $search_input.blur();
                        }
                    });
                    $search_input.focus(() => {
                        $search.addClass('focus');
                    });

                    $search_clear.click(() => {
                        $search_input.val('');
                    });

                    $search_input.blur(() => {
                        $search.addClass('focusing');
                        $search.removeClass('focus');
                        setTimeout(() => $search.removeClass('focusing'), 100);
                    });
                });
            };

            /***/
        },
        /* 14 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _view_index_tpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                15
            );
            /* harmony import */ var _view_index_tpl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                _view_index_tpl__WEBPACK_IMPORTED_MODULE_0__
            );

            const config = bpVars.config;
            const handlers = [
                Promise.resolve(/* import() */).then(
                    __webpack_require__.bind(null, 33)
                )
            ];

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = async () => {
                config.pageTitle = `${bpVars.user.uname} - ${config.title}`;
                document.documentElement.innerHTML = _view_index_tpl__WEBPACK_IMPORTED_MODULE_0___default.a.render(
                    config
                );
                GM_addStyle(
                    (await Promise.resolve(/* import() */).then(
                        __webpack_require__.t.bind(null, 183, 7)
                    )).default.toString()
                );
                GM_addStyle(
                    (await Promise.resolve(/* import() */).then(
                        __webpack_require__.t.bind(null, 185, 7)
                    )).default.toString()
                );

                Promise.all(handlers).then(async e => {
                    for (const fn of e) await fn.default();
                });

                return true;
            };

            /***/
        },
        /* 15 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(16);
            var env;
            if (!nunjucks.currentEnv) {
                env = nunjucks.currentEnv = new nunjucks.Environment([], {
                    dev: false,
                    autoescape: true,
                    throwOnUndefined: false,
                    trimBlocks: false,
                    lstripBlocks: false
                });
            } else {
                env = nunjucks.currentEnv;
            }
            var dependencies =
                nunjucks.webpackDependencies ||
                (nunjucks.webpackDependencies = {});
            dependencies['./include/content/content.tpl'] = __webpack_require__(
                20
            );

            var shim = __webpack_require__(24);

            (function() {
                (nunjucks.nunjucksPrecompiled =
                    nunjucks.nunjucksPrecompiled || {})[
                    'src/view/index.tpl'
                ] = (function() {
                    function root(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var parentTemplate = null;
                            env.getTemplate(
                                './include/content/content.tpl',
                                true,
                                'src/view/index.tpl',
                                false,
                                function(t_3, t_2) {
                                    if (t_3) {
                                        cb(t_3);
                                        return;
                                    }
                                    parentTemplate = t_2;
                                    for (var t_1 in parentTemplate.blocks) {
                                        context.addBlock(
                                            t_1,
                                            parentTemplate.blocks[t_1]
                                        );
                                    }
                                    output += ' ';
                                    (parentTemplate
                                        ? function(e, c, f, r, cb) {
                                              cb('');
                                          }
                                        : context.getBlock('content'))(
                                        env,
                                        context,
                                        frame,
                                        runtime,
                                        function(t_5, t_4) {
                                            if (t_5) {
                                                cb(t_5);
                                                return;
                                            }
                                            output += t_4;
                                            if (parentTemplate) {
                                                parentTemplate.rootRenderFunc(
                                                    env,
                                                    context,
                                                    frame,
                                                    runtime,
                                                    cb
                                                );
                                            } else {
                                                cb(null, output);
                                            }
                                        }
                                    );
                                }
                            );
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    function b_content(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var frame = frame.push(true);
                            output +=
                                '<div id="content-wrapper"><div class="column" id="feed"><header><h3 class="title"> <a href="/feed">追番</a></h3> <small id="feed-count">Loading...</small><div class="flex-space"></div> <a href="#" class="top">回到顶部</a></header><div class="card-list"></div></div><div class="column" id="video"><header><h3 class="title"> <a href="/post">投稿</a></h3><div class="flex-space"></div> <a href="#" class="top">回到顶部</a></header><div class="card-list"></div></div><div class="column" id="dynamic"><header><h3 class="title"> <a href="/dynamic">动态</a></h3><div class="flex-space"></div> <a href="#" class="top">回到顶部</a></header><div class="card-list"></div></div></div> ';
                            cb(null, output);
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    return {
                        b_content: b_content,
                        root: root
                    };
                })();
            })();

            module.exports = shim(
                nunjucks,
                env,
                nunjucks.nunjucksPrecompiled['src/view/index.tpl'],
                dependencies
            );

            /***/
        },
        /* 16 */
        /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(setImmediate, process) {
                /*! Browser bundle of nunjucks 3.1.6 (slim, only works with precompiled templates) */
                (function webpackUniversalModuleDefinition(root, factory) {
                    if (true) module.exports = factory();
                    else {
                    }
                })(typeof self !== 'undefined' ? self : this, function() {
                    return /******/ (function(modules) {
                        // webpackBootstrap
                        /******/ // The module cache
                        /******/ var installedModules = {}; // The require function
                        /******/
                        /******/ /******/ function __webpack_require__(
                            moduleId
                        ) {
                            /******/
                            /******/ // Check if module is in cache
                            /******/ if (installedModules[moduleId]) {
                                /******/ return installedModules[moduleId]
                                    .exports;
                                /******/
                            } // Create a new module (and put it into the cache)
                            /******/ /******/ var module = (installedModules[
                                moduleId
                            ] = {
                                /******/ i: moduleId,
                                /******/ l: false,
                                /******/ exports: {}
                                /******/
                            }); // Execute the module function
                            /******/
                            /******/ /******/ modules[moduleId].call(
                                module.exports,
                                module,
                                module.exports,
                                __webpack_require__
                            ); // Flag the module as loaded
                            /******/
                            /******/ /******/ module.l = true; // Return the exports of the module
                            /******/
                            /******/ /******/ return module.exports;
                            /******/
                        } // expose the modules object (__webpack_modules__)
                        /******/
                        /******/
                        /******/ /******/ __webpack_require__.m = modules; // expose the module cache
                        /******/
                        /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
                        /******/
                        /******/ /******/ __webpack_require__.d = function(
                            exports,
                            name,
                            getter
                        ) {
                            /******/ if (
                                !__webpack_require__.o(exports, name)
                            ) {
                                /******/ Object.defineProperty(exports, name, {
                                    /******/ configurable: false,
                                    /******/ enumerable: true,
                                    /******/ get: getter
                                    /******/
                                });
                                /******/
                            }
                            /******/
                        }; // getDefaultExport function for compatibility with non-harmony modules
                        /******/
                        /******/ /******/ __webpack_require__.n = function(
                            module
                        ) {
                            /******/ var getter =
                                module && module.__esModule
                                    ? /******/ function getDefault() {
                                          return module['default'];
                                      }
                                    : /******/ function getModuleExports() {
                                          return module;
                                      };
                            /******/ __webpack_require__.d(getter, 'a', getter);
                            /******/ return getter;
                            /******/
                        }; // Object.prototype.hasOwnProperty.call
                        /******/
                        /******/ /******/ __webpack_require__.o = function(
                            object,
                            property
                        ) {
                            return Object.prototype.hasOwnProperty.call(
                                object,
                                property
                            );
                        }; // __webpack_public_path__
                        /******/
                        /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
                        /******/
                        /******/ /******/ return __webpack_require__(
                            (__webpack_require__.s = 6)
                        );
                        /******/
                    })(
                        /************************************************************************/
                        /******/ [
                            /* 0 */
                            /***/ function(module, exports) {
                                /***/
                            },
                            /* 1 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                'use strict';

                                var ArrayProto = Array.prototype;
                                var ObjProto = Object.prototype;
                                var escapeMap = {
                                    '&': '&amp;',
                                    '"': '&quot;',
                                    "'": '&#39;',
                                    '<': '&lt;',
                                    '>': '&gt;'
                                };
                                var escapeRegex = /[&"'<>]/g;
                                var exports = (module.exports = {});

                                function hasOwnProp(obj, k) {
                                    return ObjProto.hasOwnProperty.call(obj, k);
                                }

                                exports.hasOwnProp = hasOwnProp;

                                function lookupEscape(ch) {
                                    return escapeMap[ch];
                                }

                                function _prettifyError(
                                    path,
                                    withInternals,
                                    err
                                ) {
                                    if (!err.Update) {
                                        // not one of ours, cast it
                                        err = new exports.TemplateError(err);
                                    }

                                    err.Update(path); // Unless they marked the dev flag, show them a trace from here

                                    if (!withInternals) {
                                        var old = err;
                                        err = new Error(old.message);
                                        err.name = old.name;
                                    }

                                    return err;
                                }

                                exports._prettifyError = _prettifyError;

                                function TemplateError(message, lineno, colno) {
                                    var err;
                                    var cause;

                                    if (message instanceof Error) {
                                        cause = message;
                                        message =
                                            cause.name + ': ' + cause.message;
                                    }

                                    if (Object.setPrototypeOf) {
                                        err = new Error(message);
                                        Object.setPrototypeOf(
                                            err,
                                            TemplateError.prototype
                                        );
                                    } else {
                                        err = this;
                                        Object.defineProperty(err, 'message', {
                                            enumerable: false,
                                            writable: true,
                                            value: message
                                        });
                                    }

                                    Object.defineProperty(err, 'name', {
                                        value: 'Template render error'
                                    });

                                    if (Error.captureStackTrace) {
                                        Error.captureStackTrace(
                                            err,
                                            this.constructor
                                        );
                                    }

                                    var getStack;

                                    if (cause) {
                                        var stackDescriptor = Object.getOwnPropertyDescriptor(
                                            cause,
                                            'stack'
                                        );

                                        getStack =
                                            stackDescriptor &&
                                            (stackDescriptor.get ||
                                                function() {
                                                    return stackDescriptor.value;
                                                });

                                        if (!getStack) {
                                            getStack = function getStack() {
                                                return cause.stack;
                                            };
                                        }
                                    } else {
                                        var stack = new Error(message).stack;

                                        getStack = function getStack() {
                                            return stack;
                                        };
                                    }

                                    Object.defineProperty(err, 'stack', {
                                        get: function get() {
                                            return getStack.call(err);
                                        }
                                    });
                                    Object.defineProperty(err, 'cause', {
                                        value: cause
                                    });
                                    err.lineno = lineno;
                                    err.colno = colno;
                                    err.firstUpdate = true;

                                    err.Update = function Update(path) {
                                        var msg =
                                            '(' +
                                            (path || 'unknown path') +
                                            ')'; // only show lineno + colno next to path of template
                                        // where error occurred

                                        if (this.firstUpdate) {
                                            if (this.lineno && this.colno) {
                                                msg +=
                                                    ' [Line ' +
                                                    this.lineno +
                                                    ', Column ' +
                                                    this.colno +
                                                    ']';
                                            } else if (this.lineno) {
                                                msg +=
                                                    ' [Line ' +
                                                    this.lineno +
                                                    ']';
                                            }
                                        }

                                        msg += '\n ';

                                        if (this.firstUpdate) {
                                            msg += ' ';
                                        }

                                        this.message =
                                            msg + (this.message || '');
                                        this.firstUpdate = false;
                                        return this;
                                    };

                                    return err;
                                }

                                if (Object.setPrototypeOf) {
                                    Object.setPrototypeOf(
                                        TemplateError.prototype,
                                        Error.prototype
                                    );
                                } else {
                                    TemplateError.prototype = Object.create(
                                        Error.prototype,
                                        {
                                            constructor: {
                                                value: TemplateError
                                            }
                                        }
                                    );
                                }

                                exports.TemplateError = TemplateError;

                                function escape(val) {
                                    return val.replace(
                                        escapeRegex,
                                        lookupEscape
                                    );
                                }

                                exports.escape = escape;

                                function isFunction(obj) {
                                    return (
                                        ObjProto.toString.call(obj) ===
                                        '[object Function]'
                                    );
                                }

                                exports.isFunction = isFunction;

                                function isArray(obj) {
                                    return (
                                        ObjProto.toString.call(obj) ===
                                        '[object Array]'
                                    );
                                }

                                exports.isArray = isArray;

                                function isString(obj) {
                                    return (
                                        ObjProto.toString.call(obj) ===
                                        '[object String]'
                                    );
                                }

                                exports.isString = isString;

                                function isObject(obj) {
                                    return (
                                        ObjProto.toString.call(obj) ===
                                        '[object Object]'
                                    );
                                }

                                exports.isObject = isObject;

                                function groupBy(obj, val) {
                                    var result = {};
                                    var iterator = isFunction(val)
                                        ? val
                                        : function(o) {
                                              return o[val];
                                          };

                                    for (var i = 0; i < obj.length; i++) {
                                        var value = obj[i];
                                        var key = iterator(value, i);
                                        (
                                            result[key] || (result[key] = [])
                                        ).push(value);
                                    }

                                    return result;
                                }

                                exports.groupBy = groupBy;

                                function toArray(obj) {
                                    return Array.prototype.slice.call(obj);
                                }

                                exports.toArray = toArray;

                                function without(array) {
                                    var result = [];

                                    if (!array) {
                                        return result;
                                    }

                                    var length = array.length;
                                    var contains = toArray(arguments).slice(1);
                                    var index = -1;

                                    while (++index < length) {
                                        if (
                                            indexOf(contains, array[index]) ===
                                            -1
                                        ) {
                                            result.push(array[index]);
                                        }
                                    }

                                    return result;
                                }

                                exports.without = without;

                                function repeat(char_, n) {
                                    var str = '';

                                    for (var i = 0; i < n; i++) {
                                        str += char_;
                                    }

                                    return str;
                                }

                                exports.repeat = repeat;

                                function each(obj, func, context) {
                                    if (obj == null) {
                                        return;
                                    }

                                    if (
                                        ArrayProto.forEach &&
                                        obj.forEach === ArrayProto.forEach
                                    ) {
                                        obj.forEach(func, context);
                                    } else if (obj.length === +obj.length) {
                                        for (
                                            var i = 0, l = obj.length;
                                            i < l;
                                            i++
                                        ) {
                                            func.call(context, obj[i], i, obj);
                                        }
                                    }
                                }

                                exports.each = each;

                                function map(obj, func) {
                                    var results = [];

                                    if (obj == null) {
                                        return results;
                                    }

                                    if (
                                        ArrayProto.map &&
                                        obj.map === ArrayProto.map
                                    ) {
                                        return obj.map(func);
                                    }

                                    for (var i = 0; i < obj.length; i++) {
                                        results[results.length] = func(
                                            obj[i],
                                            i
                                        );
                                    }

                                    if (obj.length === +obj.length) {
                                        results.length = obj.length;
                                    }

                                    return results;
                                }

                                exports.map = map;

                                function asyncIter(arr, iter, cb) {
                                    var i = -1;

                                    function next() {
                                        i++;

                                        if (i < arr.length) {
                                            iter(arr[i], i, next, cb);
                                        } else {
                                            cb();
                                        }
                                    }

                                    next();
                                }

                                exports.asyncIter = asyncIter;

                                function asyncFor(obj, iter, cb) {
                                    var keys = keys_(obj || {});
                                    var len = keys.length;
                                    var i = -1;

                                    function next() {
                                        i++;
                                        var k = keys[i];

                                        if (i < len) {
                                            iter(k, obj[k], i, len, next);
                                        } else {
                                            cb();
                                        }
                                    }

                                    next();
                                }

                                exports.asyncFor = asyncFor;

                                function indexOf(
                                    arr,
                                    searchElement,
                                    fromIndex
                                ) {
                                    return Array.prototype.indexOf.call(
                                        arr || [],
                                        searchElement,
                                        fromIndex
                                    );
                                }

                                exports.indexOf = indexOf;

                                function keys_(obj) {
                                    /* eslint-disable no-restricted-syntax */
                                    var arr = [];

                                    for (var k in obj) {
                                        if (hasOwnProp(obj, k)) {
                                            arr.push(k);
                                        }
                                    }

                                    return arr;
                                }

                                exports.keys = keys_;

                                function _entries(obj) {
                                    return keys_(obj).map(function(k) {
                                        return [k, obj[k]];
                                    });
                                }

                                exports._entries = _entries;

                                function _values(obj) {
                                    return keys_(obj).map(function(k) {
                                        return obj[k];
                                    });
                                }

                                exports._values = _values;

                                function extend(obj1, obj2) {
                                    obj1 = obj1 || {};
                                    keys_(obj2).forEach(function(k) {
                                        obj1[k] = obj2[k];
                                    });
                                    return obj1;
                                }

                                exports._assign = exports.extend = extend;

                                function inOperator(key, val) {
                                    if (isArray(val) || isString(val)) {
                                        return val.indexOf(key) !== -1;
                                    } else if (isObject(val)) {
                                        return key in val;
                                    }

                                    throw new Error(
                                        'Cannot use "in" operator to search for "' +
                                            key +
                                            '" in unexpected types.'
                                    );
                                }

                                exports.inOperator = inOperator;

                                /***/
                            },
                            /* 2 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                'use strict';

                                var lib = __webpack_require__(1);

                                var arrayFrom = Array.from;
                                var supportsIterators =
                                    typeof Symbol === 'function' &&
                                    Symbol.iterator &&
                                    typeof arrayFrom === 'function'; // Frames keep track of scoping both at compile-time and run-time so
                                // we know how to access variables. Block tags can introduce special
                                // variables, for example.

                                var Frame =
                                    /*#__PURE__*/
                                    (function() {
                                        function Frame(parent, isolateWrites) {
                                            this.variables = {};
                                            this.parent = parent;
                                            this.topLevel = false; // if this is true, writes (set) should never propagate upwards past
                                            // this frame to its parent (though reads may).

                                            this.isolateWrites = isolateWrites;
                                        }

                                        var _proto = Frame.prototype;

                                        _proto.set = function set(
                                            name,
                                            val,
                                            resolveUp
                                        ) {
                                            // Allow variables with dots by automatically creating the
                                            // nested structure
                                            var parts = name.split('.');
                                            var obj = this.variables;
                                            var frame = this;

                                            if (resolveUp) {
                                                if (
                                                    (frame = this.resolve(
                                                        parts[0],
                                                        true
                                                    ))
                                                ) {
                                                    frame.set(name, val);
                                                    return;
                                                }
                                            }

                                            for (
                                                var i = 0;
                                                i < parts.length - 1;
                                                i++
                                            ) {
                                                var id = parts[i];

                                                if (!obj[id]) {
                                                    obj[id] = {};
                                                }

                                                obj = obj[id];
                                            }

                                            obj[parts[parts.length - 1]] = val;
                                        };

                                        _proto.get = function get(name) {
                                            var val = this.variables[name];

                                            if (val !== undefined) {
                                                return val;
                                            }

                                            return null;
                                        };

                                        _proto.lookup = function lookup(name) {
                                            var p = this.parent;
                                            var val = this.variables[name];

                                            if (val !== undefined) {
                                                return val;
                                            }

                                            return p && p.lookup(name);
                                        };

                                        _proto.resolve = function resolve(
                                            name,
                                            forWrite
                                        ) {
                                            var p =
                                                forWrite && this.isolateWrites
                                                    ? undefined
                                                    : this.parent;
                                            var val = this.variables[name];

                                            if (val !== undefined) {
                                                return this;
                                            }

                                            return p && p.resolve(name);
                                        };

                                        _proto.push = function push(
                                            isolateWrites
                                        ) {
                                            return new Frame(
                                                this,
                                                isolateWrites
                                            );
                                        };

                                        _proto.pop = function pop() {
                                            return this.parent;
                                        };

                                        return Frame;
                                    })();

                                function makeMacro(argNames, kwargNames, func) {
                                    var _this = this;

                                    return function() {
                                        for (
                                            var _len = arguments.length,
                                                macroArgs = new Array(_len),
                                                _key = 0;
                                            _key < _len;
                                            _key++
                                        ) {
                                            macroArgs[_key] = arguments[_key];
                                        }

                                        var argCount = numArgs(macroArgs);
                                        var args;
                                        var kwargs = getKeywordArgs(macroArgs);

                                        if (argCount > argNames.length) {
                                            args = macroArgs.slice(
                                                0,
                                                argNames.length
                                            ); // Positional arguments that should be passed in as
                                            // keyword arguments (essentially default values)

                                            macroArgs
                                                .slice(args.length, argCount)
                                                .forEach(function(val, i) {
                                                    if (i < kwargNames.length) {
                                                        kwargs[
                                                            kwargNames[i]
                                                        ] = val;
                                                    }
                                                });
                                            args.push(kwargs);
                                        } else if (argCount < argNames.length) {
                                            args = macroArgs.slice(0, argCount);

                                            for (
                                                var i = argCount;
                                                i < argNames.length;
                                                i++
                                            ) {
                                                var arg = argNames[i]; // Keyword arguments that should be passed as
                                                // positional arguments, i.e. the caller explicitly
                                                // used the name of a positional arg

                                                args.push(kwargs[arg]);
                                                delete kwargs[arg];
                                            }

                                            args.push(kwargs);
                                        } else {
                                            args = macroArgs;
                                        }

                                        return func.apply(_this, args);
                                    };
                                }

                                function makeKeywordArgs(obj) {
                                    obj.__keywords = true;
                                    return obj;
                                }

                                function isKeywordArgs(obj) {
                                    return (
                                        obj &&
                                        Object.prototype.hasOwnProperty.call(
                                            obj,
                                            '__keywords'
                                        )
                                    );
                                }

                                function getKeywordArgs(args) {
                                    var len = args.length;

                                    if (len) {
                                        var lastArg = args[len - 1];

                                        if (isKeywordArgs(lastArg)) {
                                            return lastArg;
                                        }
                                    }

                                    return {};
                                }

                                function numArgs(args) {
                                    var len = args.length;

                                    if (len === 0) {
                                        return 0;
                                    }

                                    var lastArg = args[len - 1];

                                    if (isKeywordArgs(lastArg)) {
                                        return len - 1;
                                    } else {
                                        return len;
                                    }
                                } // A SafeString object indicates that the string should not be
                                // autoescaped. This happens magically because autoescaping only
                                // occurs on primitive string objects.

                                function SafeString(val) {
                                    if (typeof val !== 'string') {
                                        return val;
                                    }

                                    this.val = val;
                                    this.length = val.length;
                                }

                                SafeString.prototype = Object.create(
                                    String.prototype,
                                    {
                                        length: {
                                            writable: true,
                                            configurable: true,
                                            value: 0
                                        }
                                    }
                                );

                                SafeString.prototype.valueOf = function valueOf() {
                                    return this.val;
                                };

                                SafeString.prototype.toString = function toString() {
                                    return this.val;
                                };

                                function copySafeness(dest, target) {
                                    if (dest instanceof SafeString) {
                                        return new SafeString(target);
                                    }

                                    return target.toString();
                                }

                                function markSafe(val) {
                                    var type = typeof val;

                                    if (type === 'string') {
                                        return new SafeString(val);
                                    } else if (type !== 'function') {
                                        return val;
                                    } else {
                                        return function wrapSafe(args) {
                                            var ret = val.apply(
                                                this,
                                                arguments
                                            );

                                            if (typeof ret === 'string') {
                                                return new SafeString(ret);
                                            }

                                            return ret;
                                        };
                                    }
                                }

                                function suppressValue(val, autoescape) {
                                    val =
                                        val !== undefined && val !== null
                                            ? val
                                            : '';

                                    if (
                                        autoescape &&
                                        !(val instanceof SafeString)
                                    ) {
                                        val = lib.escape(val.toString());
                                    }

                                    return val;
                                }

                                function ensureDefined(val, lineno, colno) {
                                    if (val === null || val === undefined) {
                                        throw new lib.TemplateError(
                                            'attempted to output null or undefined value',
                                            lineno + 1,
                                            colno + 1
                                        );
                                    }

                                    return val;
                                }

                                function memberLookup(obj, val) {
                                    if (obj === undefined || obj === null) {
                                        return undefined;
                                    }

                                    if (typeof obj[val] === 'function') {
                                        return function() {
                                            for (
                                                var _len2 = arguments.length,
                                                    args = new Array(_len2),
                                                    _key2 = 0;
                                                _key2 < _len2;
                                                _key2++
                                            ) {
                                                args[_key2] = arguments[_key2];
                                            }

                                            return obj[val].apply(obj, args);
                                        };
                                    }

                                    return obj[val];
                                }

                                function callWrap(obj, name, context, args) {
                                    if (!obj) {
                                        throw new Error(
                                            'Unable to call `' +
                                                name +
                                                '`, which is undefined or falsey'
                                        );
                                    } else if (typeof obj !== 'function') {
                                        throw new Error(
                                            'Unable to call `' +
                                                name +
                                                '`, which is not a function'
                                        );
                                    }

                                    return obj.apply(context, args);
                                }

                                function contextOrFrameLookup(
                                    context,
                                    frame,
                                    name
                                ) {
                                    var val = frame.lookup(name);
                                    return val !== undefined
                                        ? val
                                        : context.lookup(name);
                                }

                                function handleError(error, lineno, colno) {
                                    if (error.lineno) {
                                        return error;
                                    } else {
                                        return new lib.TemplateError(
                                            error,
                                            lineno,
                                            colno
                                        );
                                    }
                                }

                                function asyncEach(arr, dimen, iter, cb) {
                                    if (lib.isArray(arr)) {
                                        var len = arr.length;
                                        lib.asyncIter(
                                            arr,
                                            function iterCallback(
                                                item,
                                                i,
                                                next
                                            ) {
                                                switch (dimen) {
                                                    case 1:
                                                        iter(
                                                            item,
                                                            i,
                                                            len,
                                                            next
                                                        );
                                                        break;

                                                    case 2:
                                                        iter(
                                                            item[0],
                                                            item[1],
                                                            i,
                                                            len,
                                                            next
                                                        );
                                                        break;

                                                    case 3:
                                                        iter(
                                                            item[0],
                                                            item[1],
                                                            item[2],
                                                            i,
                                                            len,
                                                            next
                                                        );
                                                        break;

                                                    default:
                                                        item.push(i, len, next);
                                                        iter.apply(this, item);
                                                }
                                            },
                                            cb
                                        );
                                    } else {
                                        lib.asyncFor(
                                            arr,
                                            function iterCallback(
                                                key,
                                                val,
                                                i,
                                                len,
                                                next
                                            ) {
                                                iter(key, val, i, len, next);
                                            },
                                            cb
                                        );
                                    }
                                }

                                function asyncAll(arr, dimen, func, cb) {
                                    var finished = 0;
                                    var len;
                                    var outputArr;

                                    function done(i, output) {
                                        finished++;
                                        outputArr[i] = output;

                                        if (finished === len) {
                                            cb(null, outputArr.join(''));
                                        }
                                    }

                                    if (lib.isArray(arr)) {
                                        len = arr.length;
                                        outputArr = new Array(len);

                                        if (len === 0) {
                                            cb(null, '');
                                        } else {
                                            for (
                                                var i = 0;
                                                i < arr.length;
                                                i++
                                            ) {
                                                var item = arr[i];

                                                switch (dimen) {
                                                    case 1:
                                                        func(
                                                            item,
                                                            i,
                                                            len,
                                                            done
                                                        );
                                                        break;

                                                    case 2:
                                                        func(
                                                            item[0],
                                                            item[1],
                                                            i,
                                                            len,
                                                            done
                                                        );
                                                        break;

                                                    case 3:
                                                        func(
                                                            item[0],
                                                            item[1],
                                                            item[2],
                                                            i,
                                                            len,
                                                            done
                                                        );
                                                        break;

                                                    default:
                                                        item.push(i, len, done);
                                                        func.apply(this, item);
                                                }
                                            }
                                        }
                                    } else {
                                        var keys = lib.keys(arr || {});
                                        len = keys.length;
                                        outputArr = new Array(len);

                                        if (len === 0) {
                                            cb(null, '');
                                        } else {
                                            for (
                                                var _i = 0;
                                                _i < keys.length;
                                                _i++
                                            ) {
                                                var k = keys[_i];
                                                func(k, arr[k], _i, len, done);
                                            }
                                        }
                                    }
                                }

                                function fromIterator(arr) {
                                    if (
                                        typeof arr !== 'object' ||
                                        arr === null ||
                                        lib.isArray(arr)
                                    ) {
                                        return arr;
                                    } else if (
                                        supportsIterators &&
                                        Symbol.iterator in arr
                                    ) {
                                        return arrayFrom(arr);
                                    } else {
                                        return arr;
                                    }
                                }

                                module.exports = {
                                    Frame: Frame,
                                    makeMacro: makeMacro,
                                    makeKeywordArgs: makeKeywordArgs,
                                    numArgs: numArgs,
                                    suppressValue: suppressValue,
                                    ensureDefined: ensureDefined,
                                    memberLookup: memberLookup,
                                    contextOrFrameLookup: contextOrFrameLookup,
                                    callWrap: callWrap,
                                    handleError: handleError,
                                    isArray: lib.isArray,
                                    keys: lib.keys,
                                    SafeString: SafeString,
                                    copySafeness: copySafeness,
                                    markSafe: markSafe,
                                    asyncEach: asyncEach,
                                    asyncAll: asyncAll,
                                    inOperator: lib.inOperator,
                                    fromIterator: fromIterator
                                };

                                /***/
                            },
                            /* 3 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                'use strict';

                                function _inheritsLoose(subClass, superClass) {
                                    subClass.prototype = Object.create(
                                        superClass.prototype
                                    );
                                    subClass.prototype.constructor = subClass;
                                    subClass.__proto__ = superClass;
                                }

                                var Loader = __webpack_require__(4);

                                var PrecompiledLoader =
                                    /*#__PURE__*/
                                    (function(_Loader) {
                                        _inheritsLoose(
                                            PrecompiledLoader,
                                            _Loader
                                        );

                                        function PrecompiledLoader(
                                            compiledTemplates
                                        ) {
                                            var _this;

                                            _this = _Loader.call(this) || this;
                                            _this.precompiled =
                                                compiledTemplates || {};
                                            return _this;
                                        }

                                        var _proto =
                                            PrecompiledLoader.prototype;

                                        _proto.getSource = function getSource(
                                            name
                                        ) {
                                            if (this.precompiled[name]) {
                                                return {
                                                    src: {
                                                        type: 'code',
                                                        obj: this.precompiled[
                                                            name
                                                        ]
                                                    },
                                                    path: name
                                                };
                                            }

                                            return null;
                                        };

                                        return PrecompiledLoader;
                                    })(Loader);

                                module.exports = {
                                    PrecompiledLoader: PrecompiledLoader
                                };

                                /***/
                            },
                            /* 4 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                'use strict';

                                function _inheritsLoose(subClass, superClass) {
                                    subClass.prototype = Object.create(
                                        superClass.prototype
                                    );
                                    subClass.prototype.constructor = subClass;
                                    subClass.__proto__ = superClass;
                                }

                                var path = __webpack_require__(0);

                                var Obj = __webpack_require__(5);

                                module.exports =
                                    /*#__PURE__*/
                                    (function(_Obj) {
                                        _inheritsLoose(Loader, _Obj);

                                        function Loader() {
                                            return (
                                                _Obj.apply(this, arguments) ||
                                                this
                                            );
                                        }

                                        var _proto = Loader.prototype;

                                        _proto.on = function on(name, func) {
                                            this.listeners =
                                                this.listeners || {};
                                            this.listeners[name] =
                                                this.listeners[name] || [];
                                            this.listeners[name].push(func);
                                        };

                                        _proto.emit = function emit(name) {
                                            for (
                                                var _len = arguments.length,
                                                    args = new Array(
                                                        _len > 1 ? _len - 1 : 0
                                                    ),
                                                    _key = 1;
                                                _key < _len;
                                                _key++
                                            ) {
                                                args[_key - 1] =
                                                    arguments[_key];
                                            }

                                            if (
                                                this.listeners &&
                                                this.listeners[name]
                                            ) {
                                                this.listeners[name].forEach(
                                                    function(listener) {
                                                        listener.apply(
                                                            void 0,
                                                            args
                                                        );
                                                    }
                                                );
                                            }
                                        };

                                        _proto.resolve = function resolve(
                                            from,
                                            to
                                        ) {
                                            return path.resolve(
                                                path.dirname(from),
                                                to
                                            );
                                        };

                                        _proto.isRelative = function isRelative(
                                            filename
                                        ) {
                                            return (
                                                filename.indexOf('./') === 0 ||
                                                filename.indexOf('../') === 0
                                            );
                                        };

                                        return Loader;
                                    })(Obj);

                                /***/
                            },
                            /* 5 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                'use strict';
                                // A simple class system, more documentation to come

                                function _defineProperties(target, props) {
                                    for (var i = 0; i < props.length; i++) {
                                        var descriptor = props[i];
                                        descriptor.enumerable =
                                            descriptor.enumerable || false;
                                        descriptor.configurable = true;
                                        if ('value' in descriptor)
                                            descriptor.writable = true;
                                        Object.defineProperty(
                                            target,
                                            descriptor.key,
                                            descriptor
                                        );
                                    }
                                }

                                function _createClass(
                                    Constructor,
                                    protoProps,
                                    staticProps
                                ) {
                                    if (protoProps)
                                        _defineProperties(
                                            Constructor.prototype,
                                            protoProps
                                        );
                                    if (staticProps)
                                        _defineProperties(
                                            Constructor,
                                            staticProps
                                        );
                                    return Constructor;
                                }

                                function _inheritsLoose(subClass, superClass) {
                                    subClass.prototype = Object.create(
                                        superClass.prototype
                                    );
                                    subClass.prototype.constructor = subClass;
                                    subClass.__proto__ = superClass;
                                }

                                var lib = __webpack_require__(1);

                                function parentWrap(parent, prop) {
                                    if (
                                        typeof parent !== 'function' ||
                                        typeof prop !== 'function'
                                    ) {
                                        return prop;
                                    }

                                    return function wrap() {
                                        // Save the current parent method
                                        var tmp = this.parent; // Set parent to the previous method, call, and restore

                                        this.parent = parent;
                                        var res = prop.apply(this, arguments);
                                        this.parent = tmp;
                                        return res;
                                    };
                                }

                                function extendClass(cls, name, props) {
                                    props = props || {};
                                    lib.keys(props).forEach(function(k) {
                                        props[k] = parentWrap(
                                            cls.prototype[k],
                                            props[k]
                                        );
                                    });

                                    var subclass =
                                        /*#__PURE__*/
                                        (function(_cls) {
                                            _inheritsLoose(subclass, _cls);

                                            function subclass() {
                                                return (
                                                    _cls.apply(
                                                        this,
                                                        arguments
                                                    ) || this
                                                );
                                            }

                                            _createClass(subclass, [
                                                {
                                                    key: 'typename',
                                                    get: function get() {
                                                        return name;
                                                    }
                                                }
                                            ]);

                                            return subclass;
                                        })(cls);

                                    lib._assign(subclass.prototype, props);

                                    return subclass;
                                }

                                var Obj =
                                    /*#__PURE__*/
                                    (function() {
                                        function Obj() {
                                            // Unfortunately necessary for backwards compatibility
                                            this.init.apply(this, arguments);
                                        }

                                        var _proto = Obj.prototype;

                                        _proto.init = function init() {};

                                        Obj.extend = function extend(
                                            name,
                                            props
                                        ) {
                                            if (typeof name === 'object') {
                                                props = name;
                                                name = 'anonymous';
                                            }

                                            return extendClass(
                                                this,
                                                name,
                                                props
                                            );
                                        };

                                        _createClass(Obj, [
                                            {
                                                key: 'typename',
                                                get: function get() {
                                                    return this.constructor
                                                        .name;
                                                }
                                            }
                                        ]);

                                        return Obj;
                                    })();

                                module.exports = Obj;

                                /***/
                            },
                            /* 6 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                'use strict';

                                var lib = __webpack_require__(1);

                                var _require = __webpack_require__(7),
                                    Environment = _require.Environment,
                                    Template = _require.Template;

                                var Loader = __webpack_require__(4);

                                var loaders = __webpack_require__(3);

                                var precompile = __webpack_require__(0);

                                var compiler = __webpack_require__(0);

                                var parser = __webpack_require__(0);

                                var lexer = __webpack_require__(0);

                                var runtime = __webpack_require__(2);

                                var nodes = __webpack_require__(0);

                                var installJinjaCompat = __webpack_require__(
                                    16
                                ); // A single instance of an environment, since this is so commonly used

                                var e;

                                function configure(templatesPath, opts) {
                                    opts = opts || {};

                                    if (lib.isObject(templatesPath)) {
                                        opts = templatesPath;
                                        templatesPath = null;
                                    }

                                    var TemplateLoader;

                                    if (loaders.FileSystemLoader) {
                                        TemplateLoader = new loaders.FileSystemLoader(
                                            templatesPath,
                                            {
                                                watch: opts.watch,
                                                noCache: opts.noCache
                                            }
                                        );
                                    } else if (loaders.WebLoader) {
                                        TemplateLoader = new loaders.WebLoader(
                                            templatesPath,
                                            {
                                                useCache:
                                                    opts.web &&
                                                    opts.web.useCache,
                                                async:
                                                    opts.web && opts.web.async
                                            }
                                        );
                                    }

                                    e = new Environment(TemplateLoader, opts);

                                    if (opts && opts.express) {
                                        e.express(opts.express);
                                    }

                                    return e;
                                }

                                module.exports = {
                                    Environment: Environment,
                                    Template: Template,
                                    Loader: Loader,
                                    FileSystemLoader: loaders.FileSystemLoader,
                                    PrecompiledLoader:
                                        loaders.PrecompiledLoader,
                                    WebLoader: loaders.WebLoader,
                                    compiler: compiler,
                                    parser: parser,
                                    lexer: lexer,
                                    runtime: runtime,
                                    lib: lib,
                                    nodes: nodes,
                                    installJinjaCompat: installJinjaCompat,
                                    configure: configure,
                                    reset: function reset() {
                                        e = undefined;
                                    },
                                    compile: function compile(
                                        src,
                                        env,
                                        path,
                                        eagerCompile
                                    ) {
                                        if (!e) {
                                            configure();
                                        }

                                        return new Template(
                                            src,
                                            env,
                                            path,
                                            eagerCompile
                                        );
                                    },
                                    render: function render(name, ctx, cb) {
                                        if (!e) {
                                            configure();
                                        }

                                        return e.render(name, ctx, cb);
                                    },
                                    renderString: function renderString(
                                        src,
                                        ctx,
                                        cb
                                    ) {
                                        if (!e) {
                                            configure();
                                        }

                                        return e.renderString(src, ctx, cb);
                                    },
                                    precompile: precompile
                                        ? precompile.precompile
                                        : undefined,
                                    precompileString: precompile
                                        ? precompile.precompileString
                                        : undefined
                                };

                                /***/
                            },
                            /* 7 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                'use strict';

                                function _inheritsLoose(subClass, superClass) {
                                    subClass.prototype = Object.create(
                                        superClass.prototype
                                    );
                                    subClass.prototype.constructor = subClass;
                                    subClass.__proto__ = superClass;
                                }

                                var asap = __webpack_require__(8);

                                var _waterfall = __webpack_require__(11);

                                var lib = __webpack_require__(1);

                                var compiler = __webpack_require__(0);

                                var filters = __webpack_require__(12);

                                var _require = __webpack_require__(3),
                                    FileSystemLoader =
                                        _require.FileSystemLoader,
                                    WebLoader = _require.WebLoader,
                                    PrecompiledLoader =
                                        _require.PrecompiledLoader;

                                var tests = __webpack_require__(13);

                                var globals = __webpack_require__(14);

                                var Obj = __webpack_require__(5);

                                var globalRuntime = __webpack_require__(2);

                                var handleError = globalRuntime.handleError,
                                    Frame = globalRuntime.Frame;

                                var expressApp = __webpack_require__(15); // If the user is using the async API, *always* call it
                                // asynchronously even if the template was synchronous.

                                function callbackAsap(cb, err, res) {
                                    asap(function() {
                                        cb(err, res);
                                    });
                                }
                                /**
                                 * A no-op template, for use with {% include ignore missing %}
                                 */

                                var noopTmplSrc = {
                                    type: 'code',
                                    obj: {
                                        root: function root(
                                            env,
                                            context,
                                            frame,
                                            runtime,
                                            cb
                                        ) {
                                            try {
                                                cb(null, '');
                                            } catch (e) {
                                                cb(handleError(e, null, null));
                                            }
                                        }
                                    }
                                };

                                var Environment =
                                    /*#__PURE__*/
                                    (function(_Obj) {
                                        _inheritsLoose(Environment, _Obj);

                                        function Environment() {
                                            return (
                                                _Obj.apply(this, arguments) ||
                                                this
                                            );
                                        }

                                        var _proto = Environment.prototype;

                                        _proto.init = function init(
                                            loaders,
                                            opts
                                        ) {
                                            var _this = this;

                                            // The dev flag determines the trace that'll be shown on errors.
                                            // If set to true, returns the full trace from the error point,
                                            // otherwise will return trace starting from Template.render
                                            // (the full trace from within nunjucks may confuse developers using
                                            //  the library)
                                            // defaults to false
                                            opts = this.opts = opts || {};
                                            this.opts.dev = !!opts.dev; // The autoescape flag sets global autoescaping. If true,
                                            // every string variable will be escaped by default.
                                            // If false, strings can be manually escaped using the `escape` filter.
                                            // defaults to true

                                            this.opts.autoescape =
                                                opts.autoescape != null
                                                    ? opts.autoescape
                                                    : true; // If true, this will make the system throw errors if trying
                                            // to output a null or undefined value

                                            this.opts.throwOnUndefined = !!opts.throwOnUndefined;
                                            this.opts.trimBlocks = !!opts.trimBlocks;
                                            this.opts.lstripBlocks = !!opts.lstripBlocks;
                                            this.loaders = [];

                                            if (!loaders) {
                                                // The filesystem loader is only available server-side
                                                if (FileSystemLoader) {
                                                    this.loaders = [
                                                        new FileSystemLoader(
                                                            'views'
                                                        )
                                                    ];
                                                } else if (WebLoader) {
                                                    this.loaders = [
                                                        new WebLoader('/views')
                                                    ];
                                                }
                                            } else {
                                                this.loaders = lib.isArray(
                                                    loaders
                                                )
                                                    ? loaders
                                                    : [loaders];
                                            } // It's easy to use precompiled templates: just include them
                                            // before you configure nunjucks and this will automatically
                                            // pick it up and use it

                                            if (
                                                typeof window !== 'undefined' &&
                                                window.nunjucksPrecompiled
                                            ) {
                                                this.loaders.unshift(
                                                    new PrecompiledLoader(
                                                        window.nunjucksPrecompiled
                                                    )
                                                );
                                            }

                                            this.initCache();
                                            this.globals = globals();
                                            this.filters = {};
                                            this.tests = {};
                                            this.asyncFilters = [];
                                            this.extensions = {};
                                            this.extensionsList = [];

                                            lib._entries(filters).forEach(
                                                function(_ref) {
                                                    var name = _ref[0],
                                                        filter = _ref[1];
                                                    return _this.addFilter(
                                                        name,
                                                        filter
                                                    );
                                                }
                                            );

                                            lib._entries(tests).forEach(
                                                function(_ref2) {
                                                    var name = _ref2[0],
                                                        test = _ref2[1];
                                                    return _this.addTest(
                                                        name,
                                                        test
                                                    );
                                                }
                                            );
                                        };

                                        _proto.initCache = function initCache() {
                                            // Caching and cache busting
                                            this.loaders.forEach(function(
                                                loader
                                            ) {
                                                loader.cache = {};

                                                if (
                                                    typeof loader.on ===
                                                    'function'
                                                ) {
                                                    loader.on(
                                                        'update',
                                                        function(template) {
                                                            loader.cache[
                                                                template
                                                            ] = null;
                                                        }
                                                    );
                                                }
                                            });
                                        };

                                        _proto.addExtension = function addExtension(
                                            name,
                                            extension
                                        ) {
                                            extension.__name = name;
                                            this.extensions[name] = extension;
                                            this.extensionsList.push(extension);
                                            return this;
                                        };

                                        _proto.removeExtension = function removeExtension(
                                            name
                                        ) {
                                            var extension = this.getExtension(
                                                name
                                            );

                                            if (!extension) {
                                                return;
                                            }

                                            this.extensionsList = lib.without(
                                                this.extensionsList,
                                                extension
                                            );
                                            delete this.extensions[name];
                                        };

                                        _proto.getExtension = function getExtension(
                                            name
                                        ) {
                                            return this.extensions[name];
                                        };

                                        _proto.hasExtension = function hasExtension(
                                            name
                                        ) {
                                            return !!this.extensions[name];
                                        };

                                        _proto.addGlobal = function addGlobal(
                                            name,
                                            value
                                        ) {
                                            this.globals[name] = value;
                                            return this;
                                        };

                                        _proto.getGlobal = function getGlobal(
                                            name
                                        ) {
                                            if (
                                                typeof this.globals[name] ===
                                                'undefined'
                                            ) {
                                                throw new Error(
                                                    'global not found: ' + name
                                                );
                                            }

                                            return this.globals[name];
                                        };

                                        _proto.addFilter = function addFilter(
                                            name,
                                            func,
                                            async
                                        ) {
                                            var wrapped = func;

                                            if (async) {
                                                this.asyncFilters.push(name);
                                            }

                                            this.filters[name] = wrapped;
                                            return this;
                                        };

                                        _proto.getFilter = function getFilter(
                                            name
                                        ) {
                                            if (!this.filters[name]) {
                                                throw new Error(
                                                    'filter not found: ' + name
                                                );
                                            }

                                            return this.filters[name];
                                        };

                                        _proto.addTest = function addTest(
                                            name,
                                            func
                                        ) {
                                            this.tests[name] = func;
                                            return this;
                                        };

                                        _proto.getTest = function getTest(
                                            name
                                        ) {
                                            if (!this.tests[name]) {
                                                throw new Error(
                                                    'test not found: ' + name
                                                );
                                            }

                                            return this.tests[name];
                                        };

                                        _proto.resolveTemplate = function resolveTemplate(
                                            loader,
                                            parentName,
                                            filename
                                        ) {
                                            var isRelative =
                                                loader.isRelative && parentName
                                                    ? loader.isRelative(
                                                          filename
                                                      )
                                                    : false;
                                            return isRelative && loader.resolve
                                                ? loader.resolve(
                                                      parentName,
                                                      filename
                                                  )
                                                : filename;
                                        };

                                        _proto.getTemplate = function getTemplate(
                                            name,
                                            eagerCompile,
                                            parentName,
                                            ignoreMissing,
                                            cb
                                        ) {
                                            var _this2 = this;

                                            var that = this;
                                            var tmpl = null;

                                            if (name && name.raw) {
                                                // this fixes autoescape for templates referenced in symbols
                                                name = name.raw;
                                            }

                                            if (lib.isFunction(parentName)) {
                                                cb = parentName;
                                                parentName = null;
                                                eagerCompile =
                                                    eagerCompile || false;
                                            }

                                            if (lib.isFunction(eagerCompile)) {
                                                cb = eagerCompile;
                                                eagerCompile = false;
                                            }

                                            if (name instanceof Template) {
                                                tmpl = name;
                                            } else if (
                                                typeof name !== 'string'
                                            ) {
                                                throw new Error(
                                                    'template names must be a string: ' +
                                                        name
                                                );
                                            } else {
                                                for (
                                                    var i = 0;
                                                    i < this.loaders.length;
                                                    i++
                                                ) {
                                                    var loader = this.loaders[
                                                        i
                                                    ];
                                                    tmpl =
                                                        loader.cache[
                                                            this.resolveTemplate(
                                                                loader,
                                                                parentName,
                                                                name
                                                            )
                                                        ];

                                                    if (tmpl) {
                                                        break;
                                                    }
                                                }
                                            }

                                            if (tmpl) {
                                                if (eagerCompile) {
                                                    tmpl.compile();
                                                }

                                                if (cb) {
                                                    cb(null, tmpl);
                                                    return undefined;
                                                } else {
                                                    return tmpl;
                                                }
                                            }

                                            var syncResult;

                                            var createTemplate = function createTemplate(
                                                err,
                                                info
                                            ) {
                                                if (
                                                    !info &&
                                                    !err &&
                                                    !ignoreMissing
                                                ) {
                                                    err = new Error(
                                                        'template not found: ' +
                                                            name
                                                    );
                                                }

                                                if (err) {
                                                    if (cb) {
                                                        cb(err);
                                                        return;
                                                    } else {
                                                        throw err;
                                                    }
                                                }

                                                var newTmpl;

                                                if (!info) {
                                                    newTmpl = new Template(
                                                        noopTmplSrc,
                                                        _this2,
                                                        '',
                                                        eagerCompile
                                                    );
                                                } else {
                                                    newTmpl = new Template(
                                                        info.src,
                                                        _this2,
                                                        info.path,
                                                        eagerCompile
                                                    );

                                                    if (!info.noCache) {
                                                        info.loader.cache[
                                                            name
                                                        ] = newTmpl;
                                                    }
                                                }

                                                if (cb) {
                                                    cb(null, newTmpl);
                                                } else {
                                                    syncResult = newTmpl;
                                                }
                                            };

                                            lib.asyncIter(
                                                this.loaders,
                                                function(
                                                    loader,
                                                    i,
                                                    next,
                                                    done
                                                ) {
                                                    function handle(err, src) {
                                                        if (err) {
                                                            done(err);
                                                        } else if (src) {
                                                            src.loader = loader;
                                                            done(null, src);
                                                        } else {
                                                            next();
                                                        }
                                                    } // Resolve name relative to parentName

                                                    name = that.resolveTemplate(
                                                        loader,
                                                        parentName,
                                                        name
                                                    );

                                                    if (loader.async) {
                                                        loader.getSource(
                                                            name,
                                                            handle
                                                        );
                                                    } else {
                                                        handle(
                                                            null,
                                                            loader.getSource(
                                                                name
                                                            )
                                                        );
                                                    }
                                                },
                                                createTemplate
                                            );
                                            return syncResult;
                                        };

                                        _proto.express = function express(app) {
                                            return expressApp(this, app);
                                        };

                                        _proto.render = function render(
                                            name,
                                            ctx,
                                            cb
                                        ) {
                                            if (lib.isFunction(ctx)) {
                                                cb = ctx;
                                                ctx = null;
                                            } // We support a synchronous API to make it easier to migrate
                                            // existing code to async. This works because if you don't do
                                            // anything async work, the whole thing is actually run
                                            // synchronously.

                                            var syncResult = null;
                                            this.getTemplate(name, function(
                                                err,
                                                tmpl
                                            ) {
                                                if (err && cb) {
                                                    callbackAsap(cb, err);
                                                } else if (err) {
                                                    throw err;
                                                } else {
                                                    syncResult = tmpl.render(
                                                        ctx,
                                                        cb
                                                    );
                                                }
                                            });
                                            return syncResult;
                                        };

                                        _proto.renderString = function renderString(
                                            src,
                                            ctx,
                                            opts,
                                            cb
                                        ) {
                                            if (lib.isFunction(opts)) {
                                                cb = opts;
                                                opts = {};
                                            }

                                            opts = opts || {};
                                            var tmpl = new Template(
                                                src,
                                                this,
                                                opts.path
                                            );
                                            return tmpl.render(ctx, cb);
                                        };

                                        _proto.waterfall = function waterfall(
                                            tasks,
                                            callback,
                                            forceAsync
                                        ) {
                                            return _waterfall(
                                                tasks,
                                                callback,
                                                forceAsync
                                            );
                                        };

                                        return Environment;
                                    })(Obj);

                                var Context =
                                    /*#__PURE__*/
                                    (function(_Obj2) {
                                        _inheritsLoose(Context, _Obj2);

                                        function Context() {
                                            return (
                                                _Obj2.apply(this, arguments) ||
                                                this
                                            );
                                        }

                                        var _proto2 = Context.prototype;

                                        _proto2.init = function init(
                                            ctx,
                                            blocks,
                                            env
                                        ) {
                                            var _this3 = this;

                                            // Has to be tied to an environment so we can tap into its globals.
                                            this.env = env || new Environment(); // Make a duplicate of ctx

                                            this.ctx = lib.extend({}, ctx);
                                            this.blocks = {};
                                            this.exported = [];
                                            lib.keys(blocks).forEach(function(
                                                name
                                            ) {
                                                _this3.addBlock(
                                                    name,
                                                    blocks[name]
                                                );
                                            });
                                        };

                                        _proto2.lookup = function lookup(name) {
                                            // This is one of the most called functions, so optimize for
                                            // the typical case where the name isn't in the globals
                                            if (
                                                name in this.env.globals &&
                                                !(name in this.ctx)
                                            ) {
                                                return this.env.globals[name];
                                            } else {
                                                return this.ctx[name];
                                            }
                                        };

                                        _proto2.setVariable = function setVariable(
                                            name,
                                            val
                                        ) {
                                            this.ctx[name] = val;
                                        };

                                        _proto2.getVariables = function getVariables() {
                                            return this.ctx;
                                        };

                                        _proto2.addBlock = function addBlock(
                                            name,
                                            block
                                        ) {
                                            this.blocks[name] =
                                                this.blocks[name] || [];
                                            this.blocks[name].push(block);
                                            return this;
                                        };

                                        _proto2.getBlock = function getBlock(
                                            name
                                        ) {
                                            if (!this.blocks[name]) {
                                                throw new Error(
                                                    'unknown block "' +
                                                        name +
                                                        '"'
                                                );
                                            }

                                            return this.blocks[name][0];
                                        };

                                        _proto2.getSuper = function getSuper(
                                            env,
                                            name,
                                            block,
                                            frame,
                                            runtime,
                                            cb
                                        ) {
                                            var idx = lib.indexOf(
                                                this.blocks[name] || [],
                                                block
                                            );
                                            var blk = this.blocks[name][
                                                idx + 1
                                            ];
                                            var context = this;

                                            if (idx === -1 || !blk) {
                                                throw new Error(
                                                    'no super block available for "' +
                                                        name +
                                                        '"'
                                                );
                                            }

                                            blk(
                                                env,
                                                context,
                                                frame,
                                                runtime,
                                                cb
                                            );
                                        };

                                        _proto2.addExport = function addExport(
                                            name
                                        ) {
                                            this.exported.push(name);
                                        };

                                        _proto2.getExported = function getExported() {
                                            var _this4 = this;

                                            var exported = {};
                                            this.exported.forEach(function(
                                                name
                                            ) {
                                                exported[name] =
                                                    _this4.ctx[name];
                                            });
                                            return exported;
                                        };

                                        return Context;
                                    })(Obj);

                                var Template =
                                    /*#__PURE__*/
                                    (function(_Obj3) {
                                        _inheritsLoose(Template, _Obj3);

                                        function Template() {
                                            return (
                                                _Obj3.apply(this, arguments) ||
                                                this
                                            );
                                        }

                                        var _proto3 = Template.prototype;

                                        _proto3.init = function init(
                                            src,
                                            env,
                                            path,
                                            eagerCompile
                                        ) {
                                            this.env = env || new Environment();

                                            if (lib.isObject(src)) {
                                                switch (src.type) {
                                                    case 'code':
                                                        this.tmplProps =
                                                            src.obj;
                                                        break;

                                                    case 'string':
                                                        this.tmplStr = src.obj;
                                                        break;

                                                    default:
                                                        throw new Error(
                                                            'Unexpected template object type ' +
                                                                src.type +
                                                                "; expected 'code', or 'string'"
                                                        );
                                                }
                                            } else if (lib.isString(src)) {
                                                this.tmplStr = src;
                                            } else {
                                                throw new Error(
                                                    'src must be a string or an object describing the source'
                                                );
                                            }

                                            this.path = path;

                                            if (eagerCompile) {
                                                try {
                                                    this._compile();
                                                } catch (err) {
                                                    throw lib._prettifyError(
                                                        this.path,
                                                        this.env.opts.dev,
                                                        err
                                                    );
                                                }
                                            } else {
                                                this.compiled = false;
                                            }
                                        };

                                        _proto3.render = function render(
                                            ctx,
                                            parentFrame,
                                            cb
                                        ) {
                                            var _this5 = this;

                                            if (typeof ctx === 'function') {
                                                cb = ctx;
                                                ctx = {};
                                            } else if (
                                                typeof parentFrame ===
                                                'function'
                                            ) {
                                                cb = parentFrame;
                                                parentFrame = null;
                                            } // If there is a parent frame, we are being called from internal
                                            // code of another template, and the internal system
                                            // depends on the sync/async nature of the parent template
                                            // to be inherited, so force an async callback

                                            var forceAsync = !parentFrame; // Catch compile errors for async rendering

                                            try {
                                                this.compile();
                                            } catch (e) {
                                                var err = lib._prettifyError(
                                                    this.path,
                                                    this.env.opts.dev,
                                                    e
                                                );

                                                if (cb) {
                                                    return callbackAsap(
                                                        cb,
                                                        err
                                                    );
                                                } else {
                                                    throw err;
                                                }
                                            }

                                            var context = new Context(
                                                ctx || {},
                                                this.blocks,
                                                this.env
                                            );
                                            var frame = parentFrame
                                                ? parentFrame.push(true)
                                                : new Frame();
                                            frame.topLevel = true;
                                            var syncResult = null;
                                            var didError = false;
                                            this.rootRenderFunc(
                                                this.env,
                                                context,
                                                frame,
                                                globalRuntime,
                                                function(err, res) {
                                                    if (didError) {
                                                        // prevent multiple calls to cb
                                                        return;
                                                    }

                                                    if (err) {
                                                        err = lib._prettifyError(
                                                            _this5.path,
                                                            _this5.env.opts.dev,
                                                            err
                                                        );
                                                        didError = true;
                                                    }

                                                    if (cb) {
                                                        if (forceAsync) {
                                                            callbackAsap(
                                                                cb,
                                                                err,
                                                                res
                                                            );
                                                        } else {
                                                            cb(err, res);
                                                        }
                                                    } else {
                                                        if (err) {
                                                            throw err;
                                                        }

                                                        syncResult = res;
                                                    }
                                                }
                                            );
                                            return syncResult;
                                        };

                                        _proto3.getExported = function getExported(
                                            ctx,
                                            parentFrame,
                                            cb
                                        ) {
                                            // eslint-disable-line consistent-return
                                            if (typeof ctx === 'function') {
                                                cb = ctx;
                                                ctx = {};
                                            }

                                            if (
                                                typeof parentFrame ===
                                                'function'
                                            ) {
                                                cb = parentFrame;
                                                parentFrame = null;
                                            } // Catch compile errors for async rendering

                                            try {
                                                this.compile();
                                            } catch (e) {
                                                if (cb) {
                                                    return cb(e);
                                                } else {
                                                    throw e;
                                                }
                                            }

                                            var frame = parentFrame
                                                ? parentFrame.push()
                                                : new Frame();
                                            frame.topLevel = true; // Run the rootRenderFunc to populate the context with exported vars

                                            var context = new Context(
                                                ctx || {},
                                                this.blocks,
                                                this.env
                                            );
                                            this.rootRenderFunc(
                                                this.env,
                                                context,
                                                frame,
                                                globalRuntime,
                                                function(err) {
                                                    if (err) {
                                                        cb(err, null);
                                                    } else {
                                                        cb(
                                                            null,
                                                            context.getExported()
                                                        );
                                                    }
                                                }
                                            );
                                        };

                                        _proto3.compile = function compile() {
                                            if (!this.compiled) {
                                                this._compile();
                                            }
                                        };

                                        _proto3._compile = function _compile() {
                                            var props;

                                            if (this.tmplProps) {
                                                props = this.tmplProps;
                                            } else {
                                                var source = compiler.compile(
                                                    this.tmplStr,
                                                    this.env.asyncFilters,
                                                    this.env.extensionsList,
                                                    this.path,
                                                    this.env.opts
                                                );
                                                var func = new Function(source); // eslint-disable-line no-new-func

                                                props = func();
                                            }

                                            this.blocks = this._getBlocks(
                                                props
                                            );
                                            this.rootRenderFunc = props.root;
                                            this.compiled = true;
                                        };

                                        _proto3._getBlocks = function _getBlocks(
                                            props
                                        ) {
                                            var blocks = {};
                                            lib.keys(props).forEach(function(
                                                k
                                            ) {
                                                if (k.slice(0, 2) === 'b_') {
                                                    blocks[k.slice(2)] =
                                                        props[k];
                                                }
                                            });
                                            return blocks;
                                        };

                                        return Template;
                                    })(Obj);

                                module.exports = {
                                    Environment: Environment,
                                    Template: Template
                                };

                                /***/
                            },
                            /* 8 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                'use strict';

                                // rawAsap provides everything we need except exception management.
                                var rawAsap = __webpack_require__(9);
                                // RawTasks are recycled to reduce GC churn.
                                var freeTasks = [];
                                // We queue errors to ensure they are thrown in right order (FIFO).
                                // Array-as-queue is good enough here, since we are just dealing with exceptions.
                                var pendingErrors = [];
                                var requestErrorThrow = rawAsap.makeRequestCallFromTimer(
                                    throwFirstError
                                );

                                function throwFirstError() {
                                    if (pendingErrors.length) {
                                        throw pendingErrors.shift();
                                    }
                                }

                                /**
                                 * Calls a task as soon as possible after returning, in its own event, with priority
                                 * over other events like animation, reflow, and repaint. An error thrown from an
                                 * event will not interrupt, nor even substantially slow down the processing of
                                 * other events, but will be rather postponed to a lower priority event.
                                 * @param {{call}} task A callable object, typically a function that takes no
                                 * arguments.
                                 */
                                module.exports = asap;
                                function asap(task) {
                                    var rawTask;
                                    if (freeTasks.length) {
                                        rawTask = freeTasks.pop();
                                    } else {
                                        rawTask = new RawTask();
                                    }
                                    rawTask.task = task;
                                    rawAsap(rawTask);
                                }

                                // We wrap tasks with recyclable task objects.  A task object implements
                                // `call`, just like a function.
                                function RawTask() {
                                    this.task = null;
                                }

                                // The sole purpose of wrapping the task is to catch the exception and recycle
                                // the task object after its single use.
                                RawTask.prototype.call = function() {
                                    try {
                                        this.task.call();
                                    } catch (error) {
                                        if (asap.onerror) {
                                            // This hook exists purely for testing purposes.
                                            // Its name will be periodically randomized to break any code that
                                            // depends on its existence.
                                            asap.onerror(error);
                                        } else {
                                            // In a web browser, exceptions are not fatal. However, to avoid
                                            // slowing down the queue of pending tasks, we rethrow the error in a
                                            // lower priority turn.
                                            pendingErrors.push(error);
                                            requestErrorThrow();
                                        }
                                    } finally {
                                        this.task = null;
                                        freeTasks[freeTasks.length] = this;
                                    }
                                };

                                /***/
                            },
                            /* 9 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                'use strict';
                                /* WEBPACK VAR INJECTION */ (function(global) {
                                    // Use the fastest means possible to execute a task in its own turn, with
                                    // priority over other events including IO, animation, reflow, and redraw
                                    // events in browsers.
                                    //
                                    // An exception thrown by a task will permanently interrupt the processing of
                                    // subsequent tasks. The higher level `asap` function ensures that if an
                                    // exception is thrown by a task, that the task queue will continue flushing as
                                    // soon as possible, but if you use `rawAsap` directly, you are responsible to
                                    // either ensure that no exceptions are thrown from your task, or to manually
                                    // call `rawAsap.requestFlush` if an exception is thrown.
                                    module.exports = rawAsap;
                                    function rawAsap(task) {
                                        if (!queue.length) {
                                            requestFlush();
                                            flushing = true;
                                        }
                                        // Equivalent to push, but avoids a function call.
                                        queue[queue.length] = task;
                                    }

                                    var queue = [];
                                    // Once a flush has been requested, no further calls to `requestFlush` are
                                    // necessary until the next `flush` completes.
                                    var flushing = false;
                                    // `requestFlush` is an implementation-specific method that attempts to kick
                                    // off a `flush` event as quickly as possible. `flush` will attempt to exhaust
                                    // the event queue before yielding to the browser's own event loop.
                                    var requestFlush;
                                    // The position of the next task to execute in the task queue. This is
                                    // preserved between calls to `flush` so that it can be resumed if
                                    // a task throws an exception.
                                    var index = 0;
                                    // If a task schedules additional tasks recursively, the task queue can grow
                                    // unbounded. To prevent memory exhaustion, the task queue will periodically
                                    // truncate already-completed tasks.
                                    var capacity = 1024;

                                    // The flush function processes all tasks that have been scheduled with
                                    // `rawAsap` unless and until one of those tasks throws an exception.
                                    // If a task throws an exception, `flush` ensures that its state will remain
                                    // consistent and will resume where it left off when called again.
                                    // However, `flush` does not make any arrangements to be called again if an
                                    // exception is thrown.
                                    function flush() {
                                        while (index < queue.length) {
                                            var currentIndex = index;
                                            // Advance the index before calling the task. This ensures that we will
                                            // begin flushing on the next task the task throws an error.
                                            index = index + 1;
                                            queue[currentIndex].call();
                                            // Prevent leaking memory for long chains of recursive calls to `asap`.
                                            // If we call `asap` within tasks scheduled by `asap`, the queue will
                                            // grow, but to avoid an O(n) walk for every task we execute, we don't
                                            // shift tasks off the queue after they have been executed.
                                            // Instead, we periodically shift 1024 tasks off the queue.
                                            if (index > capacity) {
                                                // Manually shift all values starting at the index back to the
                                                // beginning of the queue.
                                                for (
                                                    var scan = 0,
                                                        newLength =
                                                            queue.length -
                                                            index;
                                                    scan < newLength;
                                                    scan++
                                                ) {
                                                    queue[scan] =
                                                        queue[scan + index];
                                                }
                                                queue.length -= index;
                                                index = 0;
                                            }
                                        }
                                        queue.length = 0;
                                        index = 0;
                                        flushing = false;
                                    }

                                    // `requestFlush` is implemented using a strategy based on data collected from
                                    // every available SauceLabs Selenium web driver worker at time of writing.
                                    // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

                                    // Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
                                    // have WebKitMutationObserver but not un-prefixed MutationObserver.
                                    // Must use `global` or `self` instead of `window` to work in both frames and web
                                    // workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

                                    /* globals self */
                                    var scope =
                                        typeof global !== 'undefined'
                                            ? global
                                            : self;
                                    var BrowserMutationObserver =
                                        scope.MutationObserver ||
                                        scope.WebKitMutationObserver;

                                    // MutationObservers are desirable because they have high priority and work
                                    // reliably everywhere they are implemented.
                                    // They are implemented in all modern browsers.
                                    //
                                    // - Android 4-4.3
                                    // - Chrome 26-34
                                    // - Firefox 14-29
                                    // - Internet Explorer 11
                                    // - iPad Safari 6-7.1
                                    // - iPhone Safari 7-7.1
                                    // - Safari 6-7
                                    if (
                                        typeof BrowserMutationObserver ===
                                        'function'
                                    ) {
                                        requestFlush = makeRequestCallFromMutationObserver(
                                            flush
                                        );

                                        // MessageChannels are desirable because they give direct access to the HTML
                                        // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
                                        // 11-12, and in web workers in many engines.
                                        // Although message channels yield to any queued rendering and IO tasks, they
                                        // would be better than imposing the 4ms delay of timers.
                                        // However, they do not work reliably in Internet Explorer or Safari.

                                        // Internet Explorer 10 is the only browser that has setImmediate but does
                                        // not have MutationObservers.
                                        // Although setImmediate yields to the browser's renderer, it would be
                                        // preferrable to falling back to setTimeout since it does not have
                                        // the minimum 4ms penalty.
                                        // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
                                        // Desktop to a lesser extent) that renders both setImmediate and
                                        // MessageChannel useless for the purposes of ASAP.
                                        // https://github.com/kriskowal/q/issues/396

                                        // Timers are implemented universally.
                                        // We fall back to timers in workers in most engines, and in foreground
                                        // contexts in the following browsers.
                                        // However, note that even this simple case requires nuances to operate in a
                                        // broad spectrum of browsers.
                                        //
                                        // - Firefox 3-13
                                        // - Internet Explorer 6-9
                                        // - iPad Safari 4.3
                                        // - Lynx 2.8.7
                                    } else {
                                        requestFlush = makeRequestCallFromTimer(
                                            flush
                                        );
                                    }

                                    // `requestFlush` requests that the high priority event queue be flushed as
                                    // soon as possible.
                                    // This is useful to prevent an error thrown in a task from stalling the event
                                    // queue if the exception handled by Node.js’s
                                    // `process.on("uncaughtException")` or by a domain.
                                    rawAsap.requestFlush = requestFlush;

                                    // To request a high priority event, we induce a mutation observer by toggling
                                    // the text of a text node between "1" and "-1".
                                    function makeRequestCallFromMutationObserver(
                                        callback
                                    ) {
                                        var toggle = 1;
                                        var observer = new BrowserMutationObserver(
                                            callback
                                        );
                                        var node = document.createTextNode('');
                                        observer.observe(node, {
                                            characterData: true
                                        });
                                        return function requestCall() {
                                            toggle = -toggle;
                                            node.data = toggle;
                                        };
                                    }

                                    // The message channel technique was discovered by Malte Ubl and was the
                                    // original foundation for this library.
                                    // http://www.nonblocking.io/2011/06/windownexttick.html

                                    // Safari 6.0.5 (at least) intermittently fails to create message ports on a
                                    // page's first load. Thankfully, this version of Safari supports
                                    // MutationObservers, so we don't need to fall back in that case.

                                    // function makeRequestCallFromMessageChannel(callback) {
                                    //     var channel = new MessageChannel();
                                    //     channel.port1.onmessage = callback;
                                    //     return function requestCall() {
                                    //         channel.port2.postMessage(0);
                                    //     };
                                    // }

                                    // For reasons explained above, we are also unable to use `setImmediate`
                                    // under any circumstances.
                                    // Even if we were, there is another bug in Internet Explorer 10.
                                    // It is not sufficient to assign `setImmediate` to `requestFlush` because
                                    // `setImmediate` must be called *by name* and therefore must be wrapped in a
                                    // closure.
                                    // Never forget.

                                    // function makeRequestCallFromSetImmediate(callback) {
                                    //     return function requestCall() {
                                    //         setImmediate(callback);
                                    //     };
                                    // }

                                    // Safari 6.0 has a problem where timers will get lost while the user is
                                    // scrolling. This problem does not impact ASAP because Safari 6.0 supports
                                    // mutation observers, so that implementation is used instead.
                                    // However, if we ever elect to use timers in Safari, the prevalent work-around
                                    // is to add a scroll event listener that calls for a flush.

                                    // `setTimeout` does not call the passed callback if the delay is less than
                                    // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
                                    // even then.

                                    function makeRequestCallFromTimer(
                                        callback
                                    ) {
                                        return function requestCall() {
                                            // We dispatch a timeout with a specified delay of 0 for engines that
                                            // can reliably accommodate that request. This will usually be snapped
                                            // to a 4 milisecond delay, but once we're flushing, there's no delay
                                            // between events.
                                            var timeoutHandle = setTimeout(
                                                handleTimer,
                                                0
                                            );
                                            // However, since this timer gets frequently dropped in Firefox
                                            // workers, we enlist an interval handle that will try to fire
                                            // an event 20 times per second until it succeeds.
                                            var intervalHandle = setInterval(
                                                handleTimer,
                                                50
                                            );

                                            function handleTimer() {
                                                // Whichever timer succeeds will cancel both timers and
                                                // execute the callback.
                                                clearTimeout(timeoutHandle);
                                                clearInterval(intervalHandle);
                                                callback();
                                            }
                                        };
                                    }

                                    // This is for `asap.js` only.
                                    // Its name will be periodically randomized to break any code that depends on
                                    // its existence.
                                    rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

                                    // ASAP was originally a nextTick shim included in Q. This was factored out
                                    // into this ASAP package. It was later adapted to RSVP which made further
                                    // amendments. These decisions, particularly to marginalize MessageChannel and
                                    // to capture the MutationObserver implementation in a closure, were integrated
                                    // back into ASAP proper.
                                    // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

                                    /* WEBPACK VAR INJECTION */
                                }.call(exports, __webpack_require__(10)));

                                /***/
                            },
                            /* 10 */
                            /***/ function(module, exports) {
                                var g;

                                // This works in non-strict mode
                                g = (function() {
                                    return this;
                                })();

                                try {
                                    // This works if eval is allowed (see CSP)
                                    g =
                                        g ||
                                        Function('return this')() ||
                                        (1, eval)('this');
                                } catch (e) {
                                    // This works if the window reference is available
                                    if (typeof window === 'object') g = window;
                                }

                                // g can still be undefined, but nothing to do about it...
                                // We return undefined, instead of nothing here, so it's
                                // easier to handle this case. if(!global) { ...}

                                module.exports = g;

                                /***/
                            },
                            /* 11 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                var __WEBPACK_AMD_DEFINE_ARRAY__,
                                    __WEBPACK_AMD_DEFINE_RESULT__; // MIT license (by Elan Shanker).
                                (function(globals) {
                                    'use strict';

                                    var executeSync = function() {
                                        var args = Array.prototype.slice.call(
                                            arguments
                                        );
                                        if (typeof args[0] === 'function') {
                                            args[0].apply(null, args.splice(1));
                                        }
                                    };

                                    var executeAsync = function(fn) {
                                        if (
                                            typeof setImmediate === 'function'
                                        ) {
                                            setImmediate(fn);
                                        } else if (
                                            typeof process !== 'undefined' &&
                                            process.nextTick
                                        ) {
                                            process.nextTick(fn);
                                        } else {
                                            setTimeout(fn, 0);
                                        }
                                    };

                                    var makeIterator = function(tasks) {
                                        var makeCallback = function(index) {
                                            var fn = function() {
                                                if (tasks.length) {
                                                    tasks[index].apply(
                                                        null,
                                                        arguments
                                                    );
                                                }
                                                return fn.next();
                                            };
                                            fn.next = function() {
                                                return index < tasks.length - 1
                                                    ? makeCallback(index + 1)
                                                    : null;
                                            };
                                            return fn;
                                        };
                                        return makeCallback(0);
                                    };

                                    var _isArray =
                                        Array.isArray ||
                                        function(maybeArray) {
                                            return (
                                                Object.prototype.toString.call(
                                                    maybeArray
                                                ) === '[object Array]'
                                            );
                                        };

                                    var waterfall = function(
                                        tasks,
                                        callback,
                                        forceAsync
                                    ) {
                                        var nextTick = forceAsync
                                            ? executeAsync
                                            : executeSync;
                                        callback = callback || function() {};
                                        if (!_isArray(tasks)) {
                                            var err = new Error(
                                                'First argument to waterfall must be an array of functions'
                                            );
                                            return callback(err);
                                        }
                                        if (!tasks.length) {
                                            return callback();
                                        }
                                        var wrapIterator = function(iterator) {
                                            return function(err) {
                                                if (err) {
                                                    callback.apply(
                                                        null,
                                                        arguments
                                                    );
                                                    callback = function() {};
                                                } else {
                                                    var args = Array.prototype.slice.call(
                                                        arguments,
                                                        1
                                                    );
                                                    var next = iterator.next();
                                                    if (next) {
                                                        args.push(
                                                            wrapIterator(next)
                                                        );
                                                    } else {
                                                        args.push(callback);
                                                    }
                                                    nextTick(function() {
                                                        iterator.apply(
                                                            null,
                                                            args
                                                        );
                                                    });
                                                }
                                            };
                                        };
                                        wrapIterator(makeIterator(tasks))();
                                    };

                                    if (true) {
                                        !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
                                        (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                                            return waterfall;
                                        }.apply(
                                            exports,
                                            __WEBPACK_AMD_DEFINE_ARRAY__
                                        )),
                                        __WEBPACK_AMD_DEFINE_RESULT__ !==
                                            undefined &&
                                            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // RequireJS
                                    } else {
                                    }
                                })(this);

                                /***/
                            },
                            /* 12 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                'use strict';

                                var lib = __webpack_require__(1);

                                var r = __webpack_require__(2);

                                var exports = (module.exports = {});

                                function normalize(value, defaultValue) {
                                    if (
                                        value === null ||
                                        value === undefined ||
                                        value === false
                                    ) {
                                        return defaultValue;
                                    }

                                    return value;
                                }

                                exports.abs = Math.abs;

                                function isNaN(num) {
                                    return num !== num; // eslint-disable-line no-self-compare
                                }

                                function batch(arr, linecount, fillWith) {
                                    var i;
                                    var res = [];
                                    var tmp = [];

                                    for (i = 0; i < arr.length; i++) {
                                        if (i % linecount === 0 && tmp.length) {
                                            res.push(tmp);
                                            tmp = [];
                                        }

                                        tmp.push(arr[i]);
                                    }

                                    if (tmp.length) {
                                        if (fillWith) {
                                            for (
                                                i = tmp.length;
                                                i < linecount;
                                                i++
                                            ) {
                                                tmp.push(fillWith);
                                            }
                                        }

                                        res.push(tmp);
                                    }

                                    return res;
                                }

                                exports.batch = batch;

                                function capitalize(str) {
                                    str = normalize(str, '');
                                    var ret = str.toLowerCase();
                                    return r.copySafeness(
                                        str,
                                        ret.charAt(0).toUpperCase() +
                                            ret.slice(1)
                                    );
                                }

                                exports.capitalize = capitalize;

                                function center(str, width) {
                                    str = normalize(str, '');
                                    width = width || 80;

                                    if (str.length >= width) {
                                        return str;
                                    }

                                    var spaces = width - str.length;
                                    var pre = lib.repeat(
                                        ' ',
                                        spaces / 2 - (spaces % 2)
                                    );
                                    var post = lib.repeat(' ', spaces / 2);
                                    return r.copySafeness(
                                        str,
                                        pre + str + post
                                    );
                                }

                                exports.center = center;

                                function default_(val, def, bool) {
                                    if (bool) {
                                        return val || def;
                                    } else {
                                        return val !== undefined ? val : def;
                                    }
                                } // TODO: it is confusing to export something called 'default'

                                exports['default'] = default_; // eslint-disable-line dot-notation

                                function dictsort(val, caseSensitive, by) {
                                    if (!lib.isObject(val)) {
                                        throw new lib.TemplateError(
                                            'dictsort filter: val must be an object'
                                        );
                                    }

                                    var array = []; // deliberately include properties from the object's prototype

                                    for (var k in val) {
                                        // eslint-disable-line guard-for-in, no-restricted-syntax
                                        array.push([k, val[k]]);
                                    }

                                    var si;

                                    if (by === undefined || by === 'key') {
                                        si = 0;
                                    } else if (by === 'value') {
                                        si = 1;
                                    } else {
                                        throw new lib.TemplateError(
                                            'dictsort filter: You can only sort by either key or value'
                                        );
                                    }

                                    array.sort(function(t1, t2) {
                                        var a = t1[si];
                                        var b = t2[si];

                                        if (!caseSensitive) {
                                            if (lib.isString(a)) {
                                                a = a.toUpperCase();
                                            }

                                            if (lib.isString(b)) {
                                                b = b.toUpperCase();
                                            }
                                        }

                                        return a > b ? 1 : a === b ? 0 : -1; // eslint-disable-line no-nested-ternary
                                    });
                                    return array;
                                }

                                exports.dictsort = dictsort;

                                function dump(obj, spaces) {
                                    return JSON.stringify(obj, null, spaces);
                                }

                                exports.dump = dump;

                                function escape(str) {
                                    if (str instanceof r.SafeString) {
                                        return str;
                                    }

                                    str =
                                        str === null || str === undefined
                                            ? ''
                                            : str;
                                    return r.markSafe(
                                        lib.escape(str.toString())
                                    );
                                }

                                exports.escape = escape;

                                function safe(str) {
                                    if (str instanceof r.SafeString) {
                                        return str;
                                    }

                                    str =
                                        str === null || str === undefined
                                            ? ''
                                            : str;
                                    return r.markSafe(str.toString());
                                }

                                exports.safe = safe;

                                function first(arr) {
                                    return arr[0];
                                }

                                exports.first = first;

                                function forceescape(str) {
                                    str =
                                        str === null || str === undefined
                                            ? ''
                                            : str;
                                    return r.markSafe(
                                        lib.escape(str.toString())
                                    );
                                }

                                exports.forceescape = forceescape;

                                function groupby(arr, attr) {
                                    return lib.groupBy(arr, attr);
                                }

                                exports.groupby = groupby;

                                function indent(str, width, indentfirst) {
                                    str = normalize(str, '');

                                    if (str === '') {
                                        return '';
                                    }

                                    width = width || 4; // let res = '';

                                    var lines = str.split('\n');
                                    var sp = lib.repeat(' ', width);
                                    var res = lines
                                        .map(function(l, i) {
                                            return i === 0 && !indentfirst
                                                ? l + '\n'
                                                : '' + sp + l + '\n';
                                        })
                                        .join('');
                                    return r.copySafeness(str, res);
                                }

                                exports.indent = indent;

                                function join(arr, del, attr) {
                                    del = del || '';

                                    if (attr) {
                                        arr = lib.map(arr, function(v) {
                                            return v[attr];
                                        });
                                    }

                                    return arr.join(del);
                                }

                                exports.join = join;

                                function last(arr) {
                                    return arr[arr.length - 1];
                                }

                                exports.last = last;

                                function lengthFilter(val) {
                                    var value = normalize(val, '');

                                    if (value !== undefined) {
                                        if (
                                            (typeof Map === 'function' &&
                                                value instanceof Map) ||
                                            (typeof Set === 'function' &&
                                                value instanceof Set)
                                        ) {
                                            // ECMAScript 2015 Maps and Sets
                                            return value.size;
                                        }

                                        if (
                                            lib.isObject(value) &&
                                            !(value instanceof r.SafeString)
                                        ) {
                                            // Objects (besides SafeStrings), non-primative Arrays
                                            return lib.keys(value).length;
                                        }

                                        return value.length;
                                    }

                                    return 0;
                                }

                                exports.length = lengthFilter;

                                function list(val) {
                                    if (lib.isString(val)) {
                                        return val.split('');
                                    } else if (lib.isObject(val)) {
                                        return lib
                                            ._entries(val || {})
                                            .map(function(_ref) {
                                                var key = _ref[0],
                                                    value = _ref[1];
                                                return {
                                                    key: key,
                                                    value: value
                                                };
                                            });
                                    } else if (lib.isArray(val)) {
                                        return val;
                                    } else {
                                        throw new lib.TemplateError(
                                            'list filter: type not iterable'
                                        );
                                    }
                                }

                                exports.list = list;

                                function lower(str) {
                                    str = normalize(str, '');
                                    return str.toLowerCase();
                                }

                                exports.lower = lower;

                                function nl2br(str) {
                                    if (str === null || str === undefined) {
                                        return '';
                                    }

                                    return r.copySafeness(
                                        str,
                                        str.replace(/\r\n|\n/g, '<br />\n')
                                    );
                                }

                                exports.nl2br = nl2br;

                                function random(arr) {
                                    return arr[
                                        Math.floor(Math.random() * arr.length)
                                    ];
                                }

                                exports.random = random;

                                function rejectattr(arr, attr) {
                                    return arr.filter(function(item) {
                                        return !item[attr];
                                    });
                                }

                                exports.rejectattr = rejectattr;

                                function selectattr(arr, attr) {
                                    return arr.filter(function(item) {
                                        return !!item[attr];
                                    });
                                }

                                exports.selectattr = selectattr;

                                function replace(str, old, new_, maxCount) {
                                    var originalStr = str;

                                    if (old instanceof RegExp) {
                                        return str.replace(old, new_);
                                    }

                                    if (typeof maxCount === 'undefined') {
                                        maxCount = -1;
                                    }

                                    var res = ''; // Output
                                    // Cast Numbers in the search term to string

                                    if (typeof old === 'number') {
                                        old = '' + old;
                                    } else if (typeof old !== 'string') {
                                        // If it is something other than number or string,
                                        // return the original string
                                        return str;
                                    } // Cast numbers in the replacement to string

                                    if (typeof str === 'number') {
                                        str = '' + str;
                                    } // If by now, we don't have a string, throw it back

                                    if (
                                        typeof str !== 'string' &&
                                        !(str instanceof r.SafeString)
                                    ) {
                                        return str;
                                    } // ShortCircuits

                                    if (old === '') {
                                        // Mimic the python behaviour: empty string is replaced
                                        // by replacement e.g. "abc"|replace("", ".") -> .a.b.c.
                                        res =
                                            new_ +
                                            str.split('').join(new_) +
                                            new_;
                                        return r.copySafeness(str, res);
                                    }

                                    var nextIndex = str.indexOf(old); // if # of replacements to perform is 0, or the string to does
                                    // not contain the old value, return the string

                                    if (maxCount === 0 || nextIndex === -1) {
                                        return str;
                                    }

                                    var pos = 0;
                                    var count = 0; // # of replacements made

                                    while (
                                        nextIndex > -1 &&
                                        (maxCount === -1 || count < maxCount)
                                    ) {
                                        // Grab the next chunk of src string and add it with the
                                        // replacement, to the result
                                        res +=
                                            str.substring(pos, nextIndex) +
                                            new_; // Increment our pointer in the src string

                                        pos = nextIndex + old.length;
                                        count++; // See if there are any more replacements to be made

                                        nextIndex = str.indexOf(old, pos);
                                    } // We've either reached the end, or done the max # of
                                    // replacements, tack on any remaining string

                                    if (pos < str.length) {
                                        res += str.substring(pos);
                                    }

                                    return r.copySafeness(originalStr, res);
                                }

                                exports.replace = replace;

                                function reverse(val) {
                                    var arr;

                                    if (lib.isString(val)) {
                                        arr = list(val);
                                    } else {
                                        // Copy it
                                        arr = lib.map(val, function(v) {
                                            return v;
                                        });
                                    }

                                    arr.reverse();

                                    if (lib.isString(val)) {
                                        return r.copySafeness(
                                            val,
                                            arr.join('')
                                        );
                                    }

                                    return arr;
                                }

                                exports.reverse = reverse;

                                function round(val, precision, method) {
                                    precision = precision || 0;
                                    var factor = Math.pow(10, precision);
                                    var rounder;

                                    if (method === 'ceil') {
                                        rounder = Math.ceil;
                                    } else if (method === 'floor') {
                                        rounder = Math.floor;
                                    } else {
                                        rounder = Math.round;
                                    }

                                    return rounder(val * factor) / factor;
                                }

                                exports.round = round;

                                function slice(arr, slices, fillWith) {
                                    var sliceLength = Math.floor(
                                        arr.length / slices
                                    );
                                    var extra = arr.length % slices;
                                    var res = [];
                                    var offset = 0;

                                    for (var i = 0; i < slices; i++) {
                                        var start = offset + i * sliceLength;

                                        if (i < extra) {
                                            offset++;
                                        }

                                        var end =
                                            offset + (i + 1) * sliceLength;
                                        var currSlice = arr.slice(start, end);

                                        if (fillWith && i >= extra) {
                                            currSlice.push(fillWith);
                                        }

                                        res.push(currSlice);
                                    }

                                    return res;
                                }

                                exports.slice = slice;

                                function sum(arr, attr, start) {
                                    if (start === void 0) {
                                        start = 0;
                                    }

                                    if (attr) {
                                        arr = lib.map(arr, function(v) {
                                            return v[attr];
                                        });
                                    }

                                    return (
                                        start +
                                        arr.reduce(function(a, b) {
                                            return a + b;
                                        }, 0)
                                    );
                                }

                                exports.sum = sum;
                                exports.sort = r.makeMacro(
                                    [
                                        'value',
                                        'reverse',
                                        'case_sensitive',
                                        'attribute'
                                    ],
                                    [],
                                    function(arr, reversed, caseSens, attr) {
                                        // Copy it
                                        var array = lib.map(arr, function(v) {
                                            return v;
                                        });
                                        array.sort(function(a, b) {
                                            var x = attr ? a[attr] : a;
                                            var y = attr ? b[attr] : b;

                                            if (
                                                !caseSens &&
                                                lib.isString(x) &&
                                                lib.isString(y)
                                            ) {
                                                x = x.toLowerCase();
                                                y = y.toLowerCase();
                                            }

                                            if (x < y) {
                                                return reversed ? 1 : -1;
                                            } else if (x > y) {
                                                return reversed ? -1 : 1;
                                            } else {
                                                return 0;
                                            }
                                        });
                                        return array;
                                    }
                                );

                                function string(obj) {
                                    return r.copySafeness(obj, obj);
                                }

                                exports.string = string;

                                function striptags(input, preserveLinebreaks) {
                                    input = normalize(input, '');
                                    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;
                                    var trimmedInput = trim(
                                        input.replace(tags, '')
                                    );
                                    var res = '';

                                    if (preserveLinebreaks) {
                                        res = trimmedInput
                                            .replace(/^ +| +$/gm, '') // remove leading and trailing spaces
                                            .replace(/ +/g, ' ') // squash adjacent spaces
                                            .replace(/(\r\n)/g, '\n') // normalize linebreaks (CRLF -> LF)
                                            .replace(/\n\n\n+/g, '\n\n'); // squash abnormal adjacent linebreaks
                                    } else {
                                        res = trimmedInput.replace(
                                            /\s+/gi,
                                            ' '
                                        );
                                    }

                                    return r.copySafeness(input, res);
                                }

                                exports.striptags = striptags;

                                function title(str) {
                                    str = normalize(str, '');
                                    var words = str
                                        .split(' ')
                                        .map(function(word) {
                                            return capitalize(word);
                                        });
                                    return r.copySafeness(str, words.join(' '));
                                }

                                exports.title = title;

                                function trim(str) {
                                    return r.copySafeness(
                                        str,
                                        str.replace(/^\s*|\s*$/g, '')
                                    );
                                }

                                exports.trim = trim;

                                function truncate(
                                    input,
                                    length,
                                    killwords,
                                    end
                                ) {
                                    var orig = input;
                                    input = normalize(input, '');
                                    length = length || 255;

                                    if (input.length <= length) {
                                        return input;
                                    }

                                    if (killwords) {
                                        input = input.substring(0, length);
                                    } else {
                                        var idx = input.lastIndexOf(
                                            ' ',
                                            length
                                        );

                                        if (idx === -1) {
                                            idx = length;
                                        }

                                        input = input.substring(0, idx);
                                    }

                                    input +=
                                        end !== undefined && end !== null
                                            ? end
                                            : '...';
                                    return r.copySafeness(orig, input);
                                }

                                exports.truncate = truncate;

                                function upper(str) {
                                    str = normalize(str, '');
                                    return str.toUpperCase();
                                }

                                exports.upper = upper;

                                function urlencode(obj) {
                                    var enc = encodeURIComponent;

                                    if (lib.isString(obj)) {
                                        return enc(obj);
                                    } else {
                                        var keyvals = lib.isArray(obj)
                                            ? obj
                                            : lib._entries(obj);
                                        return keyvals
                                            .map(function(_ref2) {
                                                var k = _ref2[0],
                                                    v = _ref2[1];
                                                return enc(k) + '=' + enc(v);
                                            })
                                            .join('&');
                                    }
                                }

                                exports.urlencode = urlencode; // For the jinja regexp, see
                                // https://github.com/mitsuhiko/jinja2/blob/f15b814dcba6aa12bc74d1f7d0c881d55f7126be/jinja2/utils.py#L20-L23

                                var puncRe = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/; // from http://blog.gerv.net/2011/05/html5_email_address_regexp/

                                var emailRe = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i;
                                var httpHttpsRe = /^https?:\/\/.*$/;
                                var wwwRe = /^www\./;
                                var tldRe = /\.(?:org|net|com)(?:\:|\/|$)/;

                                function urlize(str, length, nofollow) {
                                    if (isNaN(length)) {
                                        length = Infinity;
                                    }

                                    var noFollowAttr =
                                        nofollow === true
                                            ? ' rel="nofollow"'
                                            : '';
                                    var words = str
                                        .split(/(\s+)/)
                                        .filter(function(word) {
                                            // If the word has no length, bail. This can happen for str with
                                            // trailing whitespace.
                                            return word && word.length;
                                        })
                                        .map(function(word) {
                                            var matches = word.match(puncRe);
                                            var possibleUrl = matches
                                                ? matches[1]
                                                : word;
                                            var shortUrl = possibleUrl.substr(
                                                0,
                                                length
                                            ); // url that starts with http or https

                                            if (httpHttpsRe.test(possibleUrl)) {
                                                return (
                                                    '<a href="' +
                                                    possibleUrl +
                                                    '"' +
                                                    noFollowAttr +
                                                    '>' +
                                                    shortUrl +
                                                    '</a>'
                                                );
                                            } // url that starts with www.

                                            if (wwwRe.test(possibleUrl)) {
                                                return (
                                                    '<a href="http://' +
                                                    possibleUrl +
                                                    '"' +
                                                    noFollowAttr +
                                                    '>' +
                                                    shortUrl +
                                                    '</a>'
                                                );
                                            } // an email address of the form username@domain.tld

                                            if (emailRe.test(possibleUrl)) {
                                                return (
                                                    '<a href="mailto:' +
                                                    possibleUrl +
                                                    '">' +
                                                    possibleUrl +
                                                    '</a>'
                                                );
                                            } // url that ends in .com, .org or .net that is not an email address

                                            if (tldRe.test(possibleUrl)) {
                                                return (
                                                    '<a href="http://' +
                                                    possibleUrl +
                                                    '"' +
                                                    noFollowAttr +
                                                    '>' +
                                                    shortUrl +
                                                    '</a>'
                                                );
                                            }

                                            return word;
                                        });
                                    return words.join('');
                                }

                                exports.urlize = urlize;

                                function wordcount(str) {
                                    str = normalize(str, '');
                                    var words = str ? str.match(/\w+/g) : null;
                                    return words ? words.length : null;
                                }

                                exports.wordcount = wordcount;

                                function float(val, def) {
                                    var res = parseFloat(val);
                                    return isNaN(res) ? def : res;
                                }

                                exports.float = float;

                                function int(val, def) {
                                    var res = parseInt(val, 10);
                                    return isNaN(res) ? def : res;
                                }

                                exports.int = int; // Aliases

                                exports.d = exports.default;
                                exports.e = exports.escape;

                                /***/
                            },
                            /* 13 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                'use strict';

                                var SafeString = __webpack_require__(2)
                                    .SafeString;
                                /**
                                 * Returns `true` if the object is a function, otherwise `false`.
                                 * @param { any } value
                                 * @returns { boolean }
                                 */

                                function callable(value) {
                                    return typeof value === 'function';
                                }

                                exports.callable = callable;
                                /**
                                 * Returns `true` if the object is strictly not `undefined`.
                                 * @param { any } value
                                 * @returns { boolean }
                                 */

                                function defined(value) {
                                    return value !== undefined;
                                }

                                exports.defined = defined;
                                /**
                                 * Returns `true` if the operand (one) is divisble by the test's argument
                                 * (two).
                                 * @param { number } one
                                 * @param { number } two
                                 * @returns { boolean }
                                 */

                                function divisibleby(one, two) {
                                    return one % two === 0;
                                }

                                exports.divisibleby = divisibleby;
                                /**
                                 * Returns true if the string has been escaped (i.e., is a SafeString).
                                 * @param { any } value
                                 * @returns { boolean }
                                 */

                                function escaped(value) {
                                    return value instanceof SafeString;
                                }

                                exports.escaped = escaped;
                                /**
                                 * Returns `true` if the arguments are strictly equal.
                                 * @param { any } one
                                 * @param { any } two
                                 */

                                function equalto(one, two) {
                                    return one === two;
                                }

                                exports.equalto = equalto; // Aliases

                                exports.eq = exports.equalto;
                                exports.sameas = exports.equalto;
                                /**
                                 * Returns `true` if the value is evenly divisible by 2.
                                 * @param { number } value
                                 * @returns { boolean }
                                 */

                                function even(value) {
                                    return value % 2 === 0;
                                }

                                exports.even = even;
                                /**
                                 * Returns `true` if the value is falsy - if I recall correctly, '', 0, false,
                                 * undefined, NaN or null. I don't know if we should stick to the default JS
                                 * behavior or attempt to replicate what Python believes should be falsy (i.e.,
                                 * empty arrays, empty dicts, not 0...).
                                 * @param { any } value
                                 * @returns { boolean }
                                 */

                                function falsy(value) {
                                    return !value;
                                }

                                exports.falsy = falsy;
                                /**
                                 * Returns `true` if the operand (one) is greater or equal to the test's
                                 * argument (two).
                                 * @param { number } one
                                 * @param { number } two
                                 * @returns { boolean }
                                 */

                                function ge(one, two) {
                                    return one >= two;
                                }

                                exports.ge = ge;
                                /**
                                 * Returns `true` if the operand (one) is greater than the test's argument
                                 * (two).
                                 * @param { number } one
                                 * @param { number } two
                                 * @returns { boolean }
                                 */

                                function greaterthan(one, two) {
                                    return one > two;
                                }

                                exports.greaterthan = greaterthan; // alias

                                exports.gt = exports.greaterthan;
                                /**
                                 * Returns `true` if the operand (one) is less than or equal to the test's
                                 * argument (two).
                                 * @param { number } one
                                 * @param { number } two
                                 * @returns { boolean }
                                 */

                                function le(one, two) {
                                    return one <= two;
                                }

                                exports.le = le;
                                /**
                                 * Returns `true` if the operand (one) is less than the test's passed argument
                                 * (two).
                                 * @param { number } one
                                 * @param { number } two
                                 * @returns { boolean }
                                 */

                                function lessthan(one, two) {
                                    return one < two;
                                }

                                exports.lessthan = lessthan; // alias

                                exports.lt = exports.lessthan;
                                /**
                                 * Returns `true` if the string is lowercased.
                                 * @param { string } value
                                 * @returns { boolean }
                                 */

                                function lower(value) {
                                    return value.toLowerCase() === value;
                                }

                                exports.lower = lower;
                                /**
                                 * Returns `true` if the operand (one) is less than or equal to the test's
                                 * argument (two).
                                 * @param { number } one
                                 * @param { number } two
                                 * @returns { boolean }
                                 */

                                function ne(one, two) {
                                    return one !== two;
                                }

                                exports.ne = ne;
                                /**
                                 * Returns true if the value is strictly equal to `null`.
                                 * @param { any }
                                 * @returns { boolean }
                                 */

                                function nullTest(value) {
                                    return value === null;
                                }

                                exports.null = nullTest;
                                /**
                                 * Returns true if value is a number.
                                 * @param { any }
                                 * @returns { boolean }
                                 */

                                function number(value) {
                                    return typeof value === 'number';
                                }

                                exports.number = number;
                                /**
                                 * Returns `true` if the value is *not* evenly divisible by 2.
                                 * @param { number } value
                                 * @returns { boolean }
                                 */

                                function odd(value) {
                                    return value % 2 === 1;
                                }

                                exports.odd = odd;
                                /**
                                 * Returns `true` if the value is a string, `false` if not.
                                 * @param { any } value
                                 * @returns { boolean }
                                 */

                                function string(value) {
                                    return typeof value === 'string';
                                }

                                exports.string = string;
                                /**
                                 * Returns `true` if the value is not in the list of things considered falsy:
                                 * '', null, undefined, 0, NaN and false.
                                 * @param { any } value
                                 * @returns { boolean }
                                 */

                                function truthy(value) {
                                    return !!value;
                                }

                                exports.truthy = truthy;
                                /**
                                 * Returns `true` if the value is undefined.
                                 * @param { any } value
                                 * @returns { boolean }
                                 */

                                function undefinedTest(value) {
                                    return value === undefined;
                                }

                                exports.undefined = undefinedTest;
                                /**
                                 * Returns `true` if the string is uppercased.
                                 * @param { string } value
                                 * @returns { boolean }
                                 */

                                function upper(value) {
                                    return value.toUpperCase() === value;
                                }

                                exports.upper = upper;
                                /**
                                 * If ES6 features are available, returns `true` if the value implements the
                                 * `Symbol.iterator` method. If not, it's a string or Array.
                                 *
                                 * Could potentially cause issues if a browser exists that has Set and Map but
                                 * not Symbol.
                                 *
                                 * @param { any } value
                                 * @returns { boolean }
                                 */

                                function iterable(value) {
                                    if (typeof Symbol !== 'undefined') {
                                        return !!value[Symbol.iterator];
                                    } else {
                                        return (
                                            Array.isArray(value) ||
                                            typeof value === 'string'
                                        );
                                    }
                                }

                                exports.iterable = iterable;
                                /**
                                 * If ES6 features are available, returns `true` if the value is an object hash
                                 * or an ES6 Map. Otherwise just return if it's an object hash.
                                 * @param { any } value
                                 * @returns { boolean }
                                 */

                                function mapping(value) {
                                    // only maps and object hashes
                                    var bool =
                                        value !== null &&
                                        value !== undefined &&
                                        typeof value === 'object' &&
                                        !Array.isArray(value);

                                    if (Set) {
                                        return bool && !(value instanceof Set);
                                    } else {
                                        return bool;
                                    }
                                }

                                exports.mapping = mapping;

                                /***/
                            },
                            /* 14 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                'use strict';

                                function _cycler(items) {
                                    var index = -1;
                                    return {
                                        current: null,
                                        reset: function reset() {
                                            index = -1;
                                            this.current = null;
                                        },
                                        next: function next() {
                                            index++;

                                            if (index >= items.length) {
                                                index = 0;
                                            }

                                            this.current = items[index];
                                            return this.current;
                                        }
                                    };
                                }

                                function _joiner(sep) {
                                    sep = sep || ',';
                                    var first = true;
                                    return function() {
                                        var val = first ? '' : sep;
                                        first = false;
                                        return val;
                                    };
                                } // Making this a function instead so it returns a new object
                                // each time it's called. That way, if something like an environment
                                // uses it, they will each have their own copy.

                                function globals() {
                                    return {
                                        range: function range(
                                            start,
                                            stop,
                                            step
                                        ) {
                                            if (typeof stop === 'undefined') {
                                                stop = start;
                                                start = 0;
                                                step = 1;
                                            } else if (!step) {
                                                step = 1;
                                            }

                                            var arr = [];

                                            if (step > 0) {
                                                for (
                                                    var i = start;
                                                    i < stop;
                                                    i += step
                                                ) {
                                                    arr.push(i);
                                                }
                                            } else {
                                                for (
                                                    var _i = start;
                                                    _i > stop;
                                                    _i += step
                                                ) {
                                                    // eslint-disable-line for-direction
                                                    arr.push(_i);
                                                }
                                            }

                                            return arr;
                                        },
                                        cycler: function cycler() {
                                            return _cycler(
                                                Array.prototype.slice.call(
                                                    arguments
                                                )
                                            );
                                        },
                                        joiner: function joiner(sep) {
                                            return _joiner(sep);
                                        }
                                    };
                                }

                                module.exports = globals;

                                /***/
                            },
                            /* 15 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                var path = __webpack_require__(0);

                                module.exports = function express(env, app) {
                                    function NunjucksView(name, opts) {
                                        this.name = name;
                                        this.path = name;
                                        this.defaultEngine = opts.defaultEngine;
                                        this.ext = path.extname(name);

                                        if (!this.ext && !this.defaultEngine) {
                                            throw new Error(
                                                'No default engine was specified and no extension was provided.'
                                            );
                                        }

                                        if (!this.ext) {
                                            this.name += this.ext =
                                                (this.defaultEngine[0] !== '.'
                                                    ? '.'
                                                    : '') + this.defaultEngine;
                                        }
                                    }

                                    NunjucksView.prototype.render = function render(
                                        opts,
                                        cb
                                    ) {
                                        env.render(this.name, opts, cb);
                                    };

                                    app.set('view', NunjucksView);
                                    app.set('nunjucksEnv', env);
                                    return env;
                                };

                                /***/
                            },
                            /* 16 */
                            /***/ function(
                                module,
                                exports,
                                __webpack_require__
                            ) {
                                function installCompat() {
                                    'use strict';
                                    /* eslint-disable camelcase */
                                    // This must be called like `nunjucks.installCompat` so that `this`
                                    // references the nunjucks instance

                                    var runtime = this.runtime;
                                    var lib = this.lib; // Handle slim case where these 'modules' are excluded from the built source

                                    var Compiler = this.compiler.Compiler;
                                    var Parser = this.parser.Parser;
                                    var nodes = this.nodes;
                                    var lexer = this.lexer;
                                    var orig_contextOrFrameLookup =
                                        runtime.contextOrFrameLookup;
                                    var orig_memberLookup =
                                        runtime.memberLookup;
                                    var orig_Compiler_assertType;
                                    var orig_Parser_parseAggregate;

                                    if (Compiler) {
                                        orig_Compiler_assertType =
                                            Compiler.prototype.assertType;
                                    }

                                    if (Parser) {
                                        orig_Parser_parseAggregate =
                                            Parser.prototype.parseAggregate;
                                    }

                                    function uninstall() {
                                        runtime.contextOrFrameLookup = orig_contextOrFrameLookup;
                                        runtime.memberLookup = orig_memberLookup;

                                        if (Compiler) {
                                            Compiler.prototype.assertType = orig_Compiler_assertType;
                                        }

                                        if (Parser) {
                                            Parser.prototype.parseAggregate = orig_Parser_parseAggregate;
                                        }
                                    }

                                    runtime.contextOrFrameLookup = function contextOrFrameLookup(
                                        context,
                                        frame,
                                        key
                                    ) {
                                        var val = orig_contextOrFrameLookup.apply(
                                            this,
                                            arguments
                                        );

                                        if (val !== undefined) {
                                            return val;
                                        }

                                        switch (key) {
                                            case 'True':
                                                return true;

                                            case 'False':
                                                return false;

                                            case 'None':
                                                return null;

                                            default:
                                                return undefined;
                                        }
                                    };

                                    function getTokensState(tokens) {
                                        return {
                                            index: tokens.index,
                                            lineno: tokens.lineno,
                                            colno: tokens.colno
                                        };
                                    }

                                    if (false) {
                                        var Slice;
                                    }

                                    function sliceLookup(
                                        obj,
                                        start,
                                        stop,
                                        step
                                    ) {
                                        obj = obj || [];

                                        if (start === null) {
                                            start =
                                                step < 0 ? obj.length - 1 : 0;
                                        }

                                        if (stop === null) {
                                            stop = step < 0 ? -1 : obj.length;
                                        } else if (stop < 0) {
                                            stop += obj.length;
                                        }

                                        if (start < 0) {
                                            start += obj.length;
                                        }

                                        var results = [];

                                        for (var i = start; ; i += step) {
                                            if (i < 0 || i > obj.length) {
                                                break;
                                            }

                                            if (step > 0 && i >= stop) {
                                                break;
                                            }

                                            if (step < 0 && i <= stop) {
                                                break;
                                            }

                                            results.push(
                                                runtime.memberLookup(obj, i)
                                            );
                                        }

                                        return results;
                                    }

                                    function hasOwnProp(obj, key) {
                                        return Object.prototype.hasOwnProperty.call(
                                            obj,
                                            key
                                        );
                                    }

                                    var ARRAY_MEMBERS = {
                                        pop: function pop(index) {
                                            if (index === undefined) {
                                                return this.pop();
                                            }

                                            if (
                                                index >= this.length ||
                                                index < 0
                                            ) {
                                                throw new Error('KeyError');
                                            }

                                            return this.splice(index, 1);
                                        },
                                        append: function append(element) {
                                            return this.push(element);
                                        },
                                        remove: function remove(element) {
                                            for (
                                                var i = 0;
                                                i < this.length;
                                                i++
                                            ) {
                                                if (this[i] === element) {
                                                    return this.splice(i, 1);
                                                }
                                            }

                                            throw new Error('ValueError');
                                        },
                                        count: function count(element) {
                                            var count = 0;

                                            for (
                                                var i = 0;
                                                i < this.length;
                                                i++
                                            ) {
                                                if (this[i] === element) {
                                                    count++;
                                                }
                                            }

                                            return count;
                                        },
                                        index: function index(element) {
                                            var i;

                                            if (
                                                (i = this.indexOf(element)) ===
                                                -1
                                            ) {
                                                throw new Error('ValueError');
                                            }

                                            return i;
                                        },
                                        find: function find(element) {
                                            return this.indexOf(element);
                                        },
                                        insert: function insert(index, elem) {
                                            return this.splice(index, 0, elem);
                                        }
                                    };
                                    var OBJECT_MEMBERS = {
                                        items: function items() {
                                            return lib._entries(this);
                                        },
                                        values: function values() {
                                            return lib._values(this);
                                        },
                                        keys: function keys() {
                                            return lib.keys(this);
                                        },
                                        get: function get(key, def) {
                                            var output = this[key];

                                            if (output === undefined) {
                                                output = def;
                                            }

                                            return output;
                                        },
                                        has_key: function has_key(key) {
                                            return hasOwnProp(this, key);
                                        },
                                        pop: function pop(key, def) {
                                            var output = this[key];

                                            if (
                                                output === undefined &&
                                                def !== undefined
                                            ) {
                                                output = def;
                                            } else if (output === undefined) {
                                                throw new Error('KeyError');
                                            } else {
                                                delete this[key];
                                            }

                                            return output;
                                        },
                                        popitem: function popitem() {
                                            var keys = lib.keys(this);

                                            if (!keys.length) {
                                                throw new Error('KeyError');
                                            }

                                            var k = keys[0];
                                            var val = this[k];
                                            delete this[k];
                                            return [k, val];
                                        },
                                        setdefault: function setdefault(
                                            key,
                                            def
                                        ) {
                                            if (def === void 0) {
                                                def = null;
                                            }

                                            if (!(key in this)) {
                                                this[key] = def;
                                            }

                                            return this[key];
                                        },
                                        update: function update(kwargs) {
                                            lib._assign(this, kwargs);

                                            return null; // Always returns None
                                        }
                                    };
                                    OBJECT_MEMBERS.iteritems =
                                        OBJECT_MEMBERS.items;
                                    OBJECT_MEMBERS.itervalues =
                                        OBJECT_MEMBERS.values;
                                    OBJECT_MEMBERS.iterkeys =
                                        OBJECT_MEMBERS.keys;

                                    runtime.memberLookup = function memberLookup(
                                        obj,
                                        val,
                                        autoescape
                                    ) {
                                        if (arguments.length === 4) {
                                            return sliceLookup.apply(
                                                this,
                                                arguments
                                            );
                                        }

                                        obj = obj || {}; // If the object is an object, return any of the methods that Python would
                                        // otherwise provide.

                                        if (
                                            lib.isArray(obj) &&
                                            hasOwnProp(ARRAY_MEMBERS, val)
                                        ) {
                                            return ARRAY_MEMBERS[val].bind(obj);
                                        }

                                        if (
                                            lib.isObject(obj) &&
                                            hasOwnProp(OBJECT_MEMBERS, val)
                                        ) {
                                            return OBJECT_MEMBERS[val].bind(
                                                obj
                                            );
                                        }

                                        return orig_memberLookup.apply(
                                            this,
                                            arguments
                                        );
                                    };

                                    return uninstall;
                                }

                                module.exports = installCompat;

                                /***/
                            }
                            /******/
                        ]
                    );
                });
                //# sourceMappingURL=nunjucks-slim.js.map
                /* WEBPACK VAR INJECTION */
            }.call(
                this,
                __webpack_require__(17).setImmediate,
                __webpack_require__(19)
            ));

            /***/
        },
        /* 17 */
        /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                var scope =
                    (typeof global !== 'undefined' && global) ||
                    (typeof self !== 'undefined' && self) ||
                    window;
                var apply = Function.prototype.apply;

                // DOM APIs, for completeness

                exports.setTimeout = function() {
                    return new Timeout(
                        apply.call(setTimeout, scope, arguments),
                        clearTimeout
                    );
                };
                exports.setInterval = function() {
                    return new Timeout(
                        apply.call(setInterval, scope, arguments),
                        clearInterval
                    );
                };
                exports.clearTimeout = exports.clearInterval = function(
                    timeout
                ) {
                    if (timeout) {
                        timeout.close();
                    }
                };

                function Timeout(id, clearFn) {
                    this._id = id;
                    this._clearFn = clearFn;
                }
                Timeout.prototype.unref = Timeout.prototype.ref = function() {};
                Timeout.prototype.close = function() {
                    this._clearFn.call(scope, this._id);
                };

                // Does not start the time, just sets up the members needed.
                exports.enroll = function(item, msecs) {
                    clearTimeout(item._idleTimeoutId);
                    item._idleTimeout = msecs;
                };

                exports.unenroll = function(item) {
                    clearTimeout(item._idleTimeoutId);
                    item._idleTimeout = -1;
                };

                exports._unrefActive = exports.active = function(item) {
                    clearTimeout(item._idleTimeoutId);

                    var msecs = item._idleTimeout;
                    if (msecs >= 0) {
                        item._idleTimeoutId = setTimeout(function onTimeout() {
                            if (item._onTimeout) item._onTimeout();
                        }, msecs);
                    }
                };

                // setimmediate attaches itself to the global object
                __webpack_require__(18);
                // On some exotic environments, it's not clear which object `setimmediate` was
                // able to install onto.  Search each possibility in the same order as the
                // `setimmediate` library.
                exports.setImmediate =
                    (typeof self !== 'undefined' && self.setImmediate) ||
                    (typeof global !== 'undefined' && global.setImmediate) ||
                    (this && this.setImmediate);
                exports.clearImmediate =
                    (typeof self !== 'undefined' && self.clearImmediate) ||
                    (typeof global !== 'undefined' && global.clearImmediate) ||
                    (this && this.clearImmediate);

                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(7)));

            /***/
        },
        /* 18 */
        /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global, process) {
                (function(global, undefined) {
                    'use strict';

                    if (global.setImmediate) {
                        return;
                    }

                    var nextHandle = 1; // Spec says greater than zero
                    var tasksByHandle = {};
                    var currentlyRunningATask = false;
                    var doc = global.document;
                    var registerImmediate;

                    function setImmediate(callback) {
                        // Callback can either be a function or a string
                        if (typeof callback !== 'function') {
                            callback = new Function('' + callback);
                        }
                        // Copy function arguments
                        var args = new Array(arguments.length - 1);
                        for (var i = 0; i < args.length; i++) {
                            args[i] = arguments[i + 1];
                        }
                        // Store and register the task
                        var task = { callback: callback, args: args };
                        tasksByHandle[nextHandle] = task;
                        registerImmediate(nextHandle);
                        return nextHandle++;
                    }

                    function clearImmediate(handle) {
                        delete tasksByHandle[handle];
                    }

                    function run(task) {
                        var callback = task.callback;
                        var args = task.args;
                        switch (args.length) {
                            case 0:
                                callback();
                                break;
                            case 1:
                                callback(args[0]);
                                break;
                            case 2:
                                callback(args[0], args[1]);
                                break;
                            case 3:
                                callback(args[0], args[1], args[2]);
                                break;
                            default:
                                callback.apply(undefined, args);
                                break;
                        }
                    }

                    function runIfPresent(handle) {
                        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
                        // So if we're currently running a task, we'll need to delay this invocation.
                        if (currentlyRunningATask) {
                            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                            // "too much recursion" error.
                            setTimeout(runIfPresent, 0, handle);
                        } else {
                            var task = tasksByHandle[handle];
                            if (task) {
                                currentlyRunningATask = true;
                                try {
                                    run(task);
                                } finally {
                                    clearImmediate(handle);
                                    currentlyRunningATask = false;
                                }
                            }
                        }
                    }

                    function installNextTickImplementation() {
                        registerImmediate = function(handle) {
                            process.nextTick(function() {
                                runIfPresent(handle);
                            });
                        };
                    }

                    function canUsePostMessage() {
                        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
                        // where `global.postMessage` means something completely different and can't be used for this purpose.
                        if (global.postMessage && !global.importScripts) {
                            var postMessageIsAsynchronous = true;
                            var oldOnMessage = global.onmessage;
                            global.onmessage = function() {
                                postMessageIsAsynchronous = false;
                            };
                            global.postMessage('', '*');
                            global.onmessage = oldOnMessage;
                            return postMessageIsAsynchronous;
                        }
                    }

                    function installPostMessageImplementation() {
                        // Installs an event handler on `global` for the `message` event: see
                        // * https://developer.mozilla.org/en/DOM/window.postMessage
                        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

                        var messagePrefix =
                            'setImmediate$' + Math.random() + '$';
                        var onGlobalMessage = function(event) {
                            if (
                                event.source === global &&
                                typeof event.data === 'string' &&
                                event.data.indexOf(messagePrefix) === 0
                            ) {
                                runIfPresent(
                                    +event.data.slice(messagePrefix.length)
                                );
                            }
                        };

                        if (global.addEventListener) {
                            global.addEventListener(
                                'message',
                                onGlobalMessage,
                                false
                            );
                        } else {
                            global.attachEvent('onmessage', onGlobalMessage);
                        }

                        registerImmediate = function(handle) {
                            global.postMessage(messagePrefix + handle, '*');
                        };
                    }

                    function installMessageChannelImplementation() {
                        var channel = new MessageChannel();
                        channel.port1.onmessage = function(event) {
                            var handle = event.data;
                            runIfPresent(handle);
                        };

                        registerImmediate = function(handle) {
                            channel.port2.postMessage(handle);
                        };
                    }

                    function installReadyStateChangeImplementation() {
                        var html = doc.documentElement;
                        registerImmediate = function(handle) {
                            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                            var script = doc.createElement('script');
                            script.onreadystatechange = function() {
                                runIfPresent(handle);
                                script.onreadystatechange = null;
                                html.removeChild(script);
                                script = null;
                            };
                            html.appendChild(script);
                        };
                    }

                    function installSetTimeoutImplementation() {
                        registerImmediate = function(handle) {
                            setTimeout(runIfPresent, 0, handle);
                        };
                    }

                    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
                    var attachTo =
                        Object.getPrototypeOf && Object.getPrototypeOf(global);
                    attachTo =
                        attachTo && attachTo.setTimeout ? attachTo : global;

                    // Don't get fooled by e.g. browserify environments.
                    if (
                        {}.toString.call(global.process) === '[object process]'
                    ) {
                        // For Node.js before 0.9
                        installNextTickImplementation();
                    } else if (canUsePostMessage()) {
                        // For non-IE10 modern browsers
                        installPostMessageImplementation();
                    } else if (global.MessageChannel) {
                        // For web workers, where supported
                        installMessageChannelImplementation();
                    } else if (
                        doc &&
                        'onreadystatechange' in doc.createElement('script')
                    ) {
                        // For IE 6–8
                        installReadyStateChangeImplementation();
                    } else {
                        // For older browsers
                        installSetTimeoutImplementation();
                    }

                    attachTo.setImmediate = setImmediate;
                    attachTo.clearImmediate = clearImmediate;
                })(
                    typeof self === 'undefined'
                        ? typeof global === 'undefined'
                            ? this
                            : global
                        : self
                );

                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(7), __webpack_require__(19)));

            /***/
        },
        /* 19 */
        /***/ function(module, exports) {
            // shim for using process in browser
            var process = (module.exports = {});

            // cached from whatever global is present so that test runners that stub it
            // don't break things.  But we need to wrap it in a try catch in case it is
            // wrapped in strict mode code which doesn't define any globals.  It's inside a
            // function because try/catches deoptimize in certain engines.

            var cachedSetTimeout;
            var cachedClearTimeout;

            function defaultSetTimout() {
                throw new Error('setTimeout has not been defined');
            }
            function defaultClearTimeout() {
                throw new Error('clearTimeout has not been defined');
            }
            (function() {
                try {
                    if (typeof setTimeout === 'function') {
                        cachedSetTimeout = setTimeout;
                    } else {
                        cachedSetTimeout = defaultSetTimout;
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === 'function') {
                        cachedClearTimeout = clearTimeout;
                    } else {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            })();
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    //normal enviroments in sane situations
                    return setTimeout(fun, 0);
                }
                // if setTimeout wasn't available but was latter defined
                if (
                    (cachedSetTimeout === defaultSetTimout ||
                        !cachedSetTimeout) &&
                    setTimeout
                ) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    //normal enviroments in sane situations
                    return clearTimeout(marker);
                }
                // if clearTimeout wasn't available but was latter defined
                if (
                    (cachedClearTimeout === defaultClearTimeout ||
                        !cachedClearTimeout) &&
                    clearTimeout
                ) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;

            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return;
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }

            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;

                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }

            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue);
                }
            };

            // v8 likes predictible objects
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = ''; // empty string to avoid regexp issues
            process.versions = {};

            function noop() {}

            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;

            process.listeners = function(name) {
                return [];
            };

            process.binding = function(name) {
                throw new Error('process.binding is not supported');
            };

            process.cwd = function() {
                return '/';
            };
            process.chdir = function(dir) {
                throw new Error('process.chdir is not supported');
            };
            process.umask = function() {
                return 0;
            };

            /***/
        },
        /* 20 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(16);
            var env;
            if (!nunjucks.currentEnv) {
                env = nunjucks.currentEnv = new nunjucks.Environment(
                    [],
                    undefined
                );
            } else {
                env = nunjucks.currentEnv;
            }
            var dependencies =
                nunjucks.webpackDependencies ||
                (nunjucks.webpackDependencies = {});
            dependencies['../layout.tpl'] = __webpack_require__(21);
            dependencies['../header/header.tpl'] = __webpack_require__(26);
            dependencies['./script.tpl'] = __webpack_require__(28);

            var shim = __webpack_require__(24);

            (function() {
                (nunjucks.nunjucksPrecompiled =
                    nunjucks.nunjucksPrecompiled || {})[
                    'src/view/include/content/content.tpl'
                ] = (function() {
                    function root(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var parentTemplate = null;
                            env.getTemplate(
                                '../layout.tpl',
                                true,
                                'src/view/include/content/content.tpl',
                                false,
                                function(t_3, t_2) {
                                    if (t_3) {
                                        cb(t_3);
                                        return;
                                    }
                                    parentTemplate = t_2;
                                    for (var t_1 in parentTemplate.blocks) {
                                        context.addBlock(
                                            t_1,
                                            parentTemplate.blocks[t_1]
                                        );
                                    }
                                    output += ' ';
                                    (parentTemplate
                                        ? function(e, c, f, r, cb) {
                                              cb('');
                                          }
                                        : context.getBlock('body'))(
                                        env,
                                        context,
                                        frame,
                                        runtime,
                                        function(t_5, t_4) {
                                            if (t_5) {
                                                cb(t_5);
                                                return;
                                            }
                                            output += t_4;
                                            output += ' ';
                                            (parentTemplate
                                                ? function(e, c, f, r, cb) {
                                                      cb('');
                                                  }
                                                : context.getBlock('head'))(
                                                env,
                                                context,
                                                frame,
                                                runtime,
                                                function(t_7, t_6) {
                                                    if (t_7) {
                                                        cb(t_7);
                                                        return;
                                                    }
                                                    output += t_6;
                                                    if (parentTemplate) {
                                                        parentTemplate.rootRenderFunc(
                                                            env,
                                                            context,
                                                            frame,
                                                            runtime,
                                                            cb
                                                        );
                                                    } else {
                                                        cb(null, output);
                                                    }
                                                }
                                            );
                                        }
                                    );
                                }
                            );
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    function b_body(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var frame = frame.push(true);
                            output += '<header id="header"> ';
                            var tasks = [];
                            tasks.push(function(callback) {
                                env.getTemplate(
                                    '../header/header.tpl',
                                    false,
                                    'src/view/include/content/content.tpl',
                                    false,
                                    function(t_9, t_8) {
                                        if (t_9) {
                                            cb(t_9);
                                            return;
                                        }
                                        callback(null, t_8);
                                    }
                                );
                            });
                            tasks.push(function(template, callback) {
                                template.render(
                                    context.getVariables(),
                                    frame,
                                    function(t_11, t_10) {
                                        if (t_11) {
                                            cb(t_11);
                                            return;
                                        }
                                        callback(null, t_10);
                                    }
                                );
                            });
                            tasks.push(function(result, callback) {
                                output += result;
                                callback(null);
                            });
                            env.waterfall(tasks, function() {
                                output += ' ';
                                context.getBlock(
                                    'header'
                                )(env, context, frame, runtime, function(t_13, t_12) {
                                    if (t_13) {
                                        cb(t_13);
                                        return;
                                    }
                                    output += t_12;
                                    output += '</header><main id="main"> ';
                                    context.getBlock(
                                        'content'
                                    )(env, context, frame, runtime, function(t_15, t_14) {
                                        if (t_15) {
                                            cb(t_15);
                                            return;
                                        }
                                        output += t_14;
                                        output += '</main> ';
                                        var tasks = [];
                                        tasks.push(function(callback) {
                                            env.getTemplate(
                                                './script.tpl',
                                                false,
                                                'src/view/include/content/content.tpl',
                                                false,
                                                function(t_17, t_16) {
                                                    if (t_17) {
                                                        cb(t_17);
                                                        return;
                                                    }
                                                    callback(null, t_16);
                                                }
                                            );
                                        });
                                        tasks.push(function(
                                            template,
                                            callback
                                        ) {
                                            template.render(
                                                context.getVariables(),
                                                frame,
                                                function(t_19, t_18) {
                                                    if (t_19) {
                                                        cb(t_19);
                                                        return;
                                                    }
                                                    callback(null, t_18);
                                                }
                                            );
                                        });
                                        tasks.push(function(result, callback) {
                                            output += result;
                                            callback(null);
                                        });
                                        env.waterfall(tasks, function() {
                                            output += ' ';
                                            context.getBlock(
                                                'script'
                                            )(env, context, frame, runtime, function(t_21, t_20) {
                                                if (t_21) {
                                                    cb(t_21);
                                                    return;
                                                }
                                                output += t_20;
                                                output += '<footer> ';
                                                context.getBlock(
                                                    'footer'
                                                )(env, context, frame, runtime, function(t_23, t_22) {
                                                    if (t_23) {
                                                        cb(t_23);
                                                        return;
                                                    }
                                                    output += t_22;
                                                    output += '</footer> ';
                                                    cb(null, output);
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    function b_header(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var frame = frame.push(true);
                            cb(null, output);
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    function b_content(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var frame = frame.push(true);
                            cb(null, output);
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    function b_script(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var frame = frame.push(true);
                            cb(null, output);
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    function b_footer(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var frame = frame.push(true);
                            cb(null, output);
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    function b_head(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var frame = frame.push(true);
                            output += ' ';
                            context.getBlock('style')(
                                env,
                                context,
                                frame,
                                runtime,
                                function(t_25, t_24) {
                                    if (t_25) {
                                        cb(t_25);
                                        return;
                                    }
                                    output += t_24;
                                    output += ' ';
                                    cb(null, output);
                                }
                            );
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    function b_style(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var frame = frame.push(true);
                            cb(null, output);
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    return {
                        b_body: b_body,
                        b_header: b_header,
                        b_content: b_content,
                        b_script: b_script,
                        b_footer: b_footer,
                        b_head: b_head,
                        b_style: b_style,
                        root: root
                    };
                })();
            })();

            module.exports = shim(
                nunjucks,
                env,
                nunjucks.nunjucksPrecompiled[
                    'src/view/include/content/content.tpl'
                ],
                dependencies
            );

            /***/
        },
        /* 21 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(16);
            var env;
            if (!nunjucks.currentEnv) {
                env = nunjucks.currentEnv = new nunjucks.Environment(
                    [],
                    undefined
                );
            } else {
                env = nunjucks.currentEnv;
            }
            var dependencies =
                nunjucks.webpackDependencies ||
                (nunjucks.webpackDependencies = {});
            dependencies['./head/head.tpl'] = __webpack_require__(22);

            var shim = __webpack_require__(24);

            (function() {
                (nunjucks.nunjucksPrecompiled =
                    nunjucks.nunjucksPrecompiled || {})[
                    'src/view/include/layout.tpl'
                ] = (function() {
                    function root(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var parentTemplate = null;
                            output += '<head> ';
                            var tasks = [];
                            tasks.push(function(callback) {
                                env.getTemplate(
                                    './head/head.tpl',
                                    false,
                                    'src/view/include/layout.tpl',
                                    false,
                                    function(t_2, t_1) {
                                        if (t_2) {
                                            cb(t_2);
                                            return;
                                        }
                                        callback(null, t_1);
                                    }
                                );
                            });
                            tasks.push(function(template, callback) {
                                template.render(
                                    context.getVariables(),
                                    frame,
                                    function(t_4, t_3) {
                                        if (t_4) {
                                            cb(t_4);
                                            return;
                                        }
                                        callback(null, t_3);
                                    }
                                );
                            });
                            tasks.push(function(result, callback) {
                                output += result;
                                callback(null);
                            });
                            env.waterfall(tasks, function() {
                                output += ' ';
                                (parentTemplate
                                    ? function(e, c, f, r, cb) {
                                          cb('');
                                      }
                                    : context.getBlock(
                                          'head'
                                      ))(env, context, frame, runtime, function(t_6, t_5) {
                                    if (t_6) {
                                        cb(t_6);
                                        return;
                                    }
                                    output += t_5;
                                    output += '<title> ';
                                    output += runtime.suppressValue(
                                        runtime.contextOrFrameLookup(
                                            context,
                                            frame,
                                            'pageTitle'
                                        ),
                                        env.opts.autoescape
                                    );
                                    output += '</title></head><body> ';
                                    (parentTemplate
                                        ? function(e, c, f, r, cb) {
                                              cb('');
                                          }
                                        : context.getBlock(
                                              'body'
                                          ))(env, context, frame, runtime, function(t_8, t_7) {
                                        if (t_8) {
                                            cb(t_8);
                                            return;
                                        }
                                        output += t_7;
                                        output += '</body>';
                                        if (parentTemplate) {
                                            parentTemplate.rootRenderFunc(
                                                env,
                                                context,
                                                frame,
                                                runtime,
                                                cb
                                            );
                                        } else {
                                            cb(null, output);
                                        }
                                    });
                                });
                            });
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    function b_head(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var frame = frame.push(true);
                            cb(null, output);
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    function b_body(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var frame = frame.push(true);
                            cb(null, output);
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    return {
                        b_head: b_head,
                        b_body: b_body,
                        root: root
                    };
                })();
            })();

            module.exports = shim(
                nunjucks,
                env,
                nunjucks.nunjucksPrecompiled['src/view/include/layout.tpl'],
                dependencies
            );

            /***/
        },
        /* 22 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(16);
            var env;
            if (!nunjucks.currentEnv) {
                env = nunjucks.currentEnv = new nunjucks.Environment(
                    [],
                    undefined
                );
            } else {
                env = nunjucks.currentEnv;
            }
            var dependencies =
                nunjucks.webpackDependencies ||
                (nunjucks.webpackDependencies = {});
            dependencies['./meta.tpl'] = __webpack_require__(23);
            dependencies['./style.tpl'] = __webpack_require__(25);

            var shim = __webpack_require__(24);

            (function() {
                (nunjucks.nunjucksPrecompiled =
                    nunjucks.nunjucksPrecompiled || {})[
                    'src/view/include/head/head.tpl'
                ] = (function() {
                    function root(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var parentTemplate = null;
                            var tasks = [];
                            tasks.push(function(callback) {
                                env.getTemplate(
                                    './meta.tpl',
                                    false,
                                    'src/view/include/head/head.tpl',
                                    false,
                                    function(t_2, t_1) {
                                        if (t_2) {
                                            cb(t_2);
                                            return;
                                        }
                                        callback(null, t_1);
                                    }
                                );
                            });
                            tasks.push(function(template, callback) {
                                template.render(
                                    context.getVariables(),
                                    frame,
                                    function(t_4, t_3) {
                                        if (t_4) {
                                            cb(t_4);
                                            return;
                                        }
                                        callback(null, t_3);
                                    }
                                );
                            });
                            tasks.push(function(result, callback) {
                                output += result;
                                callback(null);
                            });
                            env.waterfall(tasks, function() {
                                output += ' ';
                                var tasks = [];
                                tasks.push(function(callback) {
                                    env.getTemplate(
                                        './style.tpl',
                                        false,
                                        'src/view/include/head/head.tpl',
                                        false,
                                        function(t_6, t_5) {
                                            if (t_6) {
                                                cb(t_6);
                                                return;
                                            }
                                            callback(null, t_5);
                                        }
                                    );
                                });
                                tasks.push(function(template, callback) {
                                    template.render(
                                        context.getVariables(),
                                        frame,
                                        function(t_8, t_7) {
                                            if (t_8) {
                                                cb(t_8);
                                                return;
                                            }
                                            callback(null, t_7);
                                        }
                                    );
                                });
                                tasks.push(function(result, callback) {
                                    output += result;
                                    callback(null);
                                });
                                env.waterfall(tasks, function() {
                                    if (parentTemplate) {
                                        parentTemplate.rootRenderFunc(
                                            env,
                                            context,
                                            frame,
                                            runtime,
                                            cb
                                        );
                                    } else {
                                        cb(null, output);
                                    }
                                });
                            });
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    return {
                        root: root
                    };
                })();
            })();

            module.exports = shim(
                nunjucks,
                env,
                nunjucks.nunjucksPrecompiled['src/view/include/head/head.tpl'],
                dependencies
            );

            /***/
        },
        /* 23 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(16);
            var env;
            if (!nunjucks.currentEnv) {
                env = nunjucks.currentEnv = new nunjucks.Environment(
                    [],
                    undefined
                );
            } else {
                env = nunjucks.currentEnv;
            }
            var dependencies =
                nunjucks.webpackDependencies ||
                (nunjucks.webpackDependencies = {});

            var shim = __webpack_require__(24);

            (function() {
                (nunjucks.nunjucksPrecompiled =
                    nunjucks.nunjucksPrecompiled || {})[
                    'src/view/include/head/meta.tpl'
                ] = (function() {
                    function root(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var parentTemplate = null;
                            output +=
                                '<meta charset="UTF-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="theme-color" content="#ffffff"><meta name="viewport" content="initial-scale=1, width=device-width"><meta name="referrer" content="no-referrer"><meta name="Description" content="Made By SettingDust with ♥">';
                            if (parentTemplate) {
                                parentTemplate.rootRenderFunc(
                                    env,
                                    context,
                                    frame,
                                    runtime,
                                    cb
                                );
                            } else {
                                cb(null, output);
                            }
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    return {
                        root: root
                    };
                })();
            })();

            module.exports = shim(
                nunjucks,
                env,
                nunjucks.nunjucksPrecompiled['src/view/include/head/meta.tpl'],
                dependencies
            );

            /***/
        },
        /* 24 */
        /***/ function(module, exports) {
            module.exports = function(nunjucks, env, obj, dependencies) {
                var oldRoot = obj.root;

                obj.root = function(
                    env,
                    context,
                    frame,
                    runtime,
                    ignoreMissing,
                    cb
                ) {
                    var oldGetTemplate = env.getTemplate;
                    env.getTemplate = function(
                        name,
                        ec,
                        parentName,
                        ignoreMissing,
                        cb
                    ) {
                        if (typeof ec === 'function') {
                            cb = ec = false;
                        }
                        var _require = function(name) {
                            try {
                                // add a reference to the already resolved dependency here
                                return dependencies[name];
                            } catch (e) {
                                if (frame.get('_require')) {
                                    return frame.get('_require')(name);
                                } else {
                                    console.warn(
                                        'Could not load template "%s"',
                                        name
                                    );
                                }
                            }
                        };

                        var tmpl = _require(name);
                        frame.set('_require', _require);

                        if (ec) tmpl.compile();
                        cb(null, tmpl);
                    };

                    oldRoot(
                        env,
                        context,
                        frame,
                        runtime,
                        ignoreMissing,
                        function(err, res) {
                            env.getTemplate = oldGetTemplate;
                            cb(err, res);
                        }
                    );
                };

                var src = {
                    obj: obj,
                    type: 'code'
                };

                return new nunjucks.Template(src, env);
            };

            /***/
        },
        /* 25 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(16);
            var env;
            if (!nunjucks.currentEnv) {
                env = nunjucks.currentEnv = new nunjucks.Environment(
                    [],
                    undefined
                );
            } else {
                env = nunjucks.currentEnv;
            }
            var dependencies =
                nunjucks.webpackDependencies ||
                (nunjucks.webpackDependencies = {});

            var shim = __webpack_require__(24);

            (function() {
                (nunjucks.nunjucksPrecompiled =
                    nunjucks.nunjucksPrecompiled || {})[
                    'src/view/include/head/style.tpl'
                ] = (function() {
                    function root(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var parentTemplate = null;
                            output +=
                                '<link rel="stylesheet" href="https://fonts.geekzu.org/css?family=Noto+Sans+SC:400,500&amp;subset=chinese-simplified"><link href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.min.css" rel="stylesheet"><link rel="stylesheet" href="https://cdn.bootcss.com/Ripple.js/1.2.1/ripple.min.css">';
                            if (parentTemplate) {
                                parentTemplate.rootRenderFunc(
                                    env,
                                    context,
                                    frame,
                                    runtime,
                                    cb
                                );
                            } else {
                                cb(null, output);
                            }
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    return {
                        root: root
                    };
                })();
            })();

            module.exports = shim(
                nunjucks,
                env,
                nunjucks.nunjucksPrecompiled['src/view/include/head/style.tpl'],
                dependencies
            );

            /***/
        },
        /* 26 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(16);
            var env;
            if (!nunjucks.currentEnv) {
                env = nunjucks.currentEnv = new nunjucks.Environment(
                    [],
                    undefined
                );
            } else {
                env = nunjucks.currentEnv;
            }
            var dependencies =
                nunjucks.webpackDependencies ||
                (nunjucks.webpackDependencies = {});
            dependencies['./search.tpl'] = __webpack_require__(27);

            var shim = __webpack_require__(24);

            (function() {
                (nunjucks.nunjucksPrecompiled =
                    nunjucks.nunjucksPrecompiled || {})[
                    'src/view/include/header/header.tpl'
                ] = (function() {
                    function root(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var parentTemplate = null;
                            output += '<a class="title" href="/">';
                            output += runtime.suppressValue(
                                runtime.contextOrFrameLookup(
                                    context,
                                    frame,
                                    'title'
                                ),
                                env.opts.autoescape
                            );
                            output += '</a><div class="space"></div> ';
                            var tasks = [];
                            tasks.push(function(callback) {
                                env.getTemplate(
                                    './search.tpl',
                                    false,
                                    'src/view/include/header/header.tpl',
                                    false,
                                    function(t_2, t_1) {
                                        if (t_2) {
                                            cb(t_2);
                                            return;
                                        }
                                        callback(null, t_1);
                                    }
                                );
                            });
                            tasks.push(function(template, callback) {
                                template.render(
                                    context.getVariables(),
                                    frame,
                                    function(t_4, t_3) {
                                        if (t_4) {
                                            cb(t_4);
                                            return;
                                        }
                                        callback(null, t_3);
                                    }
                                );
                            });
                            tasks.push(function(result, callback) {
                                output += result;
                                callback(null);
                            });
                            env.waterfall(tasks, function() {
                                output +=
                                    '<div class="space"></div><div id="avatar"><div class="icon"></div></div>';
                                if (parentTemplate) {
                                    parentTemplate.rootRenderFunc(
                                        env,
                                        context,
                                        frame,
                                        runtime,
                                        cb
                                    );
                                } else {
                                    cb(null, output);
                                }
                            });
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    return {
                        root: root
                    };
                })();
            })();

            module.exports = shim(
                nunjucks,
                env,
                nunjucks.nunjucksPrecompiled[
                    'src/view/include/header/header.tpl'
                ],
                dependencies
            );

            /***/
        },
        /* 27 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(16);
            var env;
            if (!nunjucks.currentEnv) {
                env = nunjucks.currentEnv = new nunjucks.Environment(
                    [],
                    undefined
                );
            } else {
                env = nunjucks.currentEnv;
            }
            var dependencies =
                nunjucks.webpackDependencies ||
                (nunjucks.webpackDependencies = {});

            var shim = __webpack_require__(24);

            (function() {
                (nunjucks.nunjucksPrecompiled =
                    nunjucks.nunjucksPrecompiled || {})[
                    'src/view/include/header/search.tpl'
                ] = (function() {
                    function root(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var parentTemplate = null;
                            output +=
                                '<div id="header-search"> <span class="icon" id="header-search-icon"><i class="material-icons">search</i></span> <label><input type="text" placeholder="搜索你想要的" maxlength="64"></label> <span class="icon" id="header-search-clear"><i class="material-icons">close</i></span></div>';
                            if (parentTemplate) {
                                parentTemplate.rootRenderFunc(
                                    env,
                                    context,
                                    frame,
                                    runtime,
                                    cb
                                );
                            } else {
                                cb(null, output);
                            }
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    return {
                        root: root
                    };
                })();
            })();

            module.exports = shim(
                nunjucks,
                env,
                nunjucks.nunjucksPrecompiled[
                    'src/view/include/header/search.tpl'
                ],
                dependencies
            );

            /***/
        },
        /* 28 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(16);
            var env;
            if (!nunjucks.currentEnv) {
                env = nunjucks.currentEnv = new nunjucks.Environment(
                    [],
                    undefined
                );
            } else {
                env = nunjucks.currentEnv;
            }
            var dependencies =
                nunjucks.webpackDependencies ||
                (nunjucks.webpackDependencies = {});

            var shim = __webpack_require__(24);

            (function() {
                (nunjucks.nunjucksPrecompiled =
                    nunjucks.nunjucksPrecompiled || {})[
                    'src/view/include/content/script.tpl'
                ] = (function() {
                    function root(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var parentTemplate = null;
                            output +=
                                '<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.slim.min.js"></script><script defer src="https://cdn.bootcss.com/Ripple.js/1.2.1/ripple.min.js"></script>';
                            if (parentTemplate) {
                                parentTemplate.rootRenderFunc(
                                    env,
                                    context,
                                    frame,
                                    runtime,
                                    cb
                                );
                            } else {
                                cb(null, output);
                            }
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    return {
                        root: root
                    };
                })();
            })();

            module.exports = shim(
                nunjucks,
                env,
                nunjucks.nunjucksPrecompiled[
                    'src/view/include/content/script.tpl'
                ],
                dependencies
            );

            /***/
        },
        /* 29 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _monkey_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                30
            );
            /* harmony import */ var _monkey_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                _monkey_config__WEBPACK_IMPORTED_MODULE_0__
            );

            /* harmony default export */ __webpack_exports__['default'] = {
                info: message => {
                    console.info(
                        `[${
                            _monkey_config__WEBPACK_IMPORTED_MODULE_0___default
                                .a.header.name
                        }]`,
                        message
                    );
                },
                debug: message => {
                    console.debug(
                        `[${
                            _monkey_config__WEBPACK_IMPORTED_MODULE_0___default
                                .a.header.name
                        }]`,
                        message
                    );
                },
                warn: message => {
                    console.warn(
                        `[${
                            _monkey_config__WEBPACK_IMPORTED_MODULE_0___default
                                .a.header.name
                        }]`,
                        message
                    );
                }
            };

            /***/
        },
        /* 30 */
        /***/ function(module, exports) {
            let name = 'BiliPlus Material';
            let version = '3.0.0';
            let description = 'A theme to biliplus';

            const config = {
                entry: './src/javascript/index.js'
            };

            const header = {
                name: name,
                version: version,
                description: description,
                author: 'SettingDust',
                include: ['http*://*.biliplus.com/*'],
                require: ['https://cdn.bootcss.com/jquery/3.3.1/jquery.js'],
                grant: [
                    'GM_addStyle',
                    'GM_getValue',
                    'GM_setValue',
                    'GM_listValues'
                ]
            };
            module.exports.config = config;
            module.exports.header = header;
            module.exports.buildedHeader = () => {
                let headerString = [];
                headerString.push('// ==UserScript==');
                for (let headerKey in header) {
                    if (Array.isArray(header[headerKey])) {
                        if (header[headerKey].length > 0)
                            headerString.push('//');
                        for (let p in header[headerKey]) {
                            headerString.push(
                                '// @' +
                                    headerKey.padEnd(13) +
                                    header[headerKey][p]
                            );
                        }
                    } else {
                        headerString.push(
                            '// @' + headerKey.padEnd(13) + header[headerKey]
                        );
                    }
                }
                headerString.push('// ==/UserScript==');
                headerString.push('');
                return headerString.join('\n');
            };

            /***/
        },
        /* 31 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__['default'] = {
                bpThrottle: (fn, gapTime) => {
                    let _lastTime = null;

                    return () => {
                        let _nowTime = new Date();
                        if (_nowTime - _lastTime > gapTime || !_lastTime) {
                            fn();
                            _lastTime = _nowTime;
                        }
                    };
                },
                bpSearch: text => {
                    bpLogger.debug(text);
                    if (text.match(/\d+/)) {
                        window.open(`/video/av${text}`);
                    } else {
                        location.assign(`/search?q=${text}`);
                    }
                }
            };

            /***/
        },
        /* 32 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            if (loginInfo) GM_setValue('user', loginInfo);
            const user = GM_getValue('user');

            /* harmony default export */ __webpack_exports__['default'] = {
                user: user || {
                    isLogin: false,
                    uname: '\u6e38\u5ba2',
                    mid: 0,
                    level: 0,
                    face: 'https://static.hdslb.com/images/member/noface.gif',
                    expires: 0
                },
                config: {
                    title: 'BiliPlus'
                },
                api: {
                    dynamic: {
                        video: '/me/dynamic/page/1/',
                        bangumi: '/me/dynamic/page/102/%page%',
                        comment: '/me/dynamic/page/101/%page%'
                    },
                    live: '/me/dynamic/page/100/',
                    search: {}
                }
            };

            /***/
        },
        /* 33 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _view_include_card_feed_tpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                34
            );
            /* harmony import */ var _view_include_card_feed_tpl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                _view_include_card_feed_tpl__WEBPACK_IMPORTED_MODULE_0__
            );
            /* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                35
            );
            /* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                182
            );

            const api = bpVars.api.dynamic.bangumi;
            let currentPage = 1;
            let isLoading = false;

            function getFeeds(page) {
                return new Promise((resolve, reject) => {
                    $.get({
                        url: api.replace('%page%', page),
                        success: data => {
                            if (data.code === 0) {
                                $('#feed-count').text(data.data.page.count);
                                resolve(data.data);
                            } else reject(data);
                        },
                        error: data => {
                            reject(data);
                        }
                    });
                });
            }

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = async () => {
                const $feed = $('#feed .card-list');
                let scrollbar;

                function appendFeeds(feeds) {
                    for (const feed of feeds) {
                        if (scrollbar)
                            $(scrollbar.contentEl).append(
                                _view_include_card_feed_tpl__WEBPACK_IMPORTED_MODULE_0___default.a.render(
                                    feed
                                )
                            );
                        else
                            $feed.append(
                                _view_include_card_feed_tpl__WEBPACK_IMPORTED_MODULE_0___default.a.render(
                                    feed
                                )
                            );
                    }
                    isLoading = false;
                }

                async function appendNextFeeds() {
                    isLoading = true;
                    appendFeeds((await getFeeds(currentPage++)).feeds);
                }

                await appendNextFeeds();
                scrollbar = smooth_scrollbar__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                ].init($feed.get(0));
                scrollbar.addListener(
                    Object(
                        throttle_debounce__WEBPACK_IMPORTED_MODULE_2__[
                            'debounce'
                        ]
                    )(200, async status => {
                        if (
                            status.limit.y -
                                (($(window).width() > 2) ^ 10 ? 1e3 : 5e2) <=
                                status.offset.y &&
                            !isLoading
                        ) {
                            await appendNextFeeds();
                        }
                    })
                );
                scrollbar.addListener(
                    Object(
                        throttle_debounce__WEBPACK_IMPORTED_MODULE_2__[
                            'throttle'
                        ]
                    )(50, status => {
                        if (status.offset.y > 0) {
                            $('#feed header').addClass('on');
                        } else {
                            $('#feed header').removeClass('on');
                        }
                    })
                );
                $(() => {
                    $('#feed .top').click(() => {
                        scrollbar.scrollTo(0, 0, 225);
                        bpLogger.debug(1);
                    });
                });
            };

            /***/
        },
        /* 34 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(16);
            var env;
            if (!nunjucks.currentEnv) {
                env = nunjucks.currentEnv = new nunjucks.Environment(
                    [],
                    undefined
                );
            } else {
                env = nunjucks.currentEnv;
            }
            var dependencies =
                nunjucks.webpackDependencies ||
                (nunjucks.webpackDependencies = {});

            var shim = __webpack_require__(24);

            (function() {
                (nunjucks.nunjucksPrecompiled =
                    nunjucks.nunjucksPrecompiled || {})[
                    'src/view/include/card/feed.tpl'
                ] = (function() {
                    function root(env, context, frame, runtime, cb) {
                        var lineno = null;
                        var colno = null;
                        var output = '';
                        try {
                            var parentTemplate = null;
                            output += '<div class="card"><a href="/av';
                            output += runtime.suppressValue(
                                runtime.memberLookup(
                                    runtime.contextOrFrameLookup(
                                        context,
                                        frame,
                                        'addition'
                                    ),
                                    'aid'
                                ),
                                env.opts.autoescape
                            );
                            output +=
                                '" target="_blank"><div class="cover"> <img src="';
                            output += runtime.suppressValue(
                                runtime.memberLookup(
                                    runtime.contextOrFrameLookup(
                                        context,
                                        frame,
                                        'addition'
                                    ),
                                    'pic'
                                ),
                                env.opts.autoescape
                            );
                            output += '" alt="';
                            output += runtime.suppressValue(
                                runtime.memberLookup(
                                    runtime.contextOrFrameLookup(
                                        context,
                                        frame,
                                        'addition'
                                    ),
                                    'description'
                                ),
                                env.opts.autoescape
                            );
                            output +=
                                '"></div></a><div class="content"><a href="/av';
                            output += runtime.suppressValue(
                                runtime.memberLookup(
                                    runtime.contextOrFrameLookup(
                                        context,
                                        frame,
                                        'addition'
                                    ),
                                    'aid'
                                ),
                                env.opts.autoescape
                            );
                            output += '" class="title" target="_blank"><h4>';
                            output += runtime.suppressValue(
                                runtime.memberLookup(
                                    runtime.contextOrFrameLookup(
                                        context,
                                        frame,
                                        'addition'
                                    ),
                                    'description'
                                ),
                                env.opts.autoescape
                            );
                            output += '</h4></a> <small class="desc">';
                            output += runtime.suppressValue(
                                runtime.memberLookup(
                                    runtime.contextOrFrameLookup(
                                        context,
                                        frame,
                                        'source'
                                    ),
                                    'title'
                                ),
                                env.opts.autoescape
                            );
                            output += '</small></div></div>';
                            if (parentTemplate) {
                                parentTemplate.rootRenderFunc(
                                    env,
                                    context,
                                    frame,
                                    runtime,
                                    cb
                                );
                            } else {
                                cb(null, output);
                            }
                        } catch (e) {
                            cb(runtime.handleError(e, lineno, colno));
                        }
                    }
                    return {
                        root: root
                    };
                })();
            })();

            module.exports = shim(
                nunjucks,
                env,
                nunjucks.nunjucksPrecompiled['src/view/include/card/feed.tpl'],
                dependencies
            );

            /***/
        },
        /* 35 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                36
            );
            /* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                37
            );
            /* harmony import */ var _scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                134
            );
            /* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                173
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'ScrollbarPlugin',
                function() {
                    return _plugin__WEBPACK_IMPORTED_MODULE_3__[
                        'ScrollbarPlugin'
                    ];
                }
            );

            /* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                181
            );

            /*!
             * cast `I.Scrollbar` to `Scrollbar` to avoid error
             *
             * `I.Scrollbar` is not assignable to `Scrollbar`:
             *     "privateProp" is missing in `I.Scrollbar`
             *
             * @see https://github.com/Microsoft/TypeScript/issues/2672
             */
            var SmoothScrollbar = /** @class */ (function(_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__['__extends'](
                    SmoothScrollbar,
                    _super
                );
                function SmoothScrollbar() {
                    return (
                        (_super !== null && _super.apply(this, arguments)) ||
                        this
                    );
                }
                /**
                 * Initializes a scrollbar on the given element.
                 *
                 * @param elem The DOM element that you want to initialize scrollbar to
                 * @param [options] Initial options
                 */
                SmoothScrollbar.init = function(elem, options) {
                    if (!elem || elem.nodeType !== 1) {
                        throw new TypeError(
                            'expect element to be DOM Element, but got ' + elem
                        );
                    }
                    // attach stylesheet
                    Object(
                        _style__WEBPACK_IMPORTED_MODULE_4__['attachStyle']
                    )();
                    if (
                        _scrollbar__WEBPACK_IMPORTED_MODULE_2__[
                            'scrollbarMap'
                        ].has(elem)
                    ) {
                        return _scrollbar__WEBPACK_IMPORTED_MODULE_2__[
                            'scrollbarMap'
                        ].get(elem);
                    }
                    return new _scrollbar__WEBPACK_IMPORTED_MODULE_2__[
                        'Scrollbar'
                    ](elem, options);
                };
                /**
                 * Automatically init scrollbar on all elements base on the selector `[data-scrollbar]`
                 *
                 * @param options Initial options
                 */
                SmoothScrollbar.initAll = function(options) {
                    return Array.from(
                        document.querySelectorAll('[data-scrollbar]'),
                        function(elem) {
                            return SmoothScrollbar.init(elem, options);
                        }
                    );
                };
                /**
                 * Check if there is a scrollbar on given element
                 *
                 * @param elem The DOM element that you want to check
                 */
                SmoothScrollbar.has = function(elem) {
                    return _scrollbar__WEBPACK_IMPORTED_MODULE_2__[
                        'scrollbarMap'
                    ].has(elem);
                };
                /**
                 * Gets scrollbar on the given element.
                 * If no scrollbar instance exsits, returns `undefined`
                 *
                 * @param elem The DOM element that you want to check.
                 */
                SmoothScrollbar.get = function(elem) {
                    return _scrollbar__WEBPACK_IMPORTED_MODULE_2__[
                        'scrollbarMap'
                    ].get(elem);
                };
                /**
                 * Returns an array that contains all scrollbar instances
                 */
                SmoothScrollbar.getAll = function() {
                    return Array.from(
                        _scrollbar__WEBPACK_IMPORTED_MODULE_2__[
                            'scrollbarMap'
                        ].values()
                    );
                };
                /**
                 * Removes scrollbar on the given element
                 */
                SmoothScrollbar.destroy = function(elem) {
                    var scrollbar = _scrollbar__WEBPACK_IMPORTED_MODULE_2__[
                        'scrollbarMap'
                    ].get(elem);
                    if (scrollbar) {
                        scrollbar.destroy();
                    }
                };
                /**
                 * Removes all scrollbar instances from current document
                 */
                SmoothScrollbar.destroyAll = function() {
                    _scrollbar__WEBPACK_IMPORTED_MODULE_2__[
                        'scrollbarMap'
                    ].forEach(function(scrollbar) {
                        scrollbar.destroy();
                    });
                };
                /**
                 * Attaches plugins to scrollbars
                 *
                 * @param ...Plugins Scrollbar plugin classes
                 */
                SmoothScrollbar.use = function() {
                    var Plugins = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        Plugins[_i] = arguments[_i];
                    }
                    return _plugin__WEBPACK_IMPORTED_MODULE_3__[
                        'addPlugins'
                    ].apply(void 0, Plugins);
                };
                /**
                 * Attaches default style sheets to current document.
                 * You don't need to call this method manually unless
                 * you removed the default styles via `Scrollbar.detachStyle()`
                 */
                SmoothScrollbar.attachStyle = function() {
                    return Object(
                        _style__WEBPACK_IMPORTED_MODULE_4__['attachStyle']
                    )();
                };
                /**
                 * Removes default styles from current document.
                 * Use this method when you want to use your own css for scrollbars.
                 */
                SmoothScrollbar.detachStyle = function() {
                    return Object(
                        _style__WEBPACK_IMPORTED_MODULE_4__['detachStyle']
                    )();
                };
                SmoothScrollbar.version = '8.3.1';
                SmoothScrollbar.ScrollbarPlugin =
                    _plugin__WEBPACK_IMPORTED_MODULE_3__['ScrollbarPlugin'];
                return SmoothScrollbar;
            })(_scrollbar__WEBPACK_IMPORTED_MODULE_2__['Scrollbar']);
            /* harmony default export */ __webpack_exports__[
                'default'
            ] = SmoothScrollbar;
            //# sourceMappingURL=index.js.map

            /***/
        },
        /* 36 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__extends',
                function() {
                    return __extends;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__assign',
                function() {
                    return __assign;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__rest',
                function() {
                    return __rest;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__decorate',
                function() {
                    return __decorate;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__param',
                function() {
                    return __param;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__metadata',
                function() {
                    return __metadata;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__awaiter',
                function() {
                    return __awaiter;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__generator',
                function() {
                    return __generator;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__exportStar',
                function() {
                    return __exportStar;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__values',
                function() {
                    return __values;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__read',
                function() {
                    return __read;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__spread',
                function() {
                    return __spread;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__await',
                function() {
                    return __await;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__asyncGenerator',
                function() {
                    return __asyncGenerator;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__asyncDelegator',
                function() {
                    return __asyncDelegator;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__asyncValues',
                function() {
                    return __asyncValues;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__makeTemplateObject',
                function() {
                    return __makeTemplateObject;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__importStar',
                function() {
                    return __importStar;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                '__importDefault',
                function() {
                    return __importDefault;
                }
            );
            /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
            /* global Reflect, Promise */

            var extendStatics = function(d, b) {
                extendStatics =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function(d, b) {
                            d.__proto__ = b;
                        }) ||
                    function(d, b) {
                        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    };
                return extendStatics(d, b);
            };

            function __extends(d, b) {
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype =
                    b === null
                        ? Object.create(b)
                        : ((__.prototype = b.prototype), new __());
            }

            var __assign = function() {
                __assign =
                    Object.assign ||
                    function __assign(t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s)
                                if (Object.prototype.hasOwnProperty.call(s, p))
                                    t[p] = s[p];
                        }
                        return t;
                    };
                return __assign.apply(this, arguments);
            };

            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (
                        Object.prototype.hasOwnProperty.call(s, p) &&
                        e.indexOf(p) < 0
                    )
                        t[p] = s[p];
                if (
                    s != null &&
                    typeof Object.getOwnPropertySymbols === 'function'
                )
                    for (
                        var i = 0, p = Object.getOwnPropertySymbols(s);
                        i < p.length;
                        i++
                    )
                        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
                return t;
            }

            function __decorate(decorators, target, key, desc) {
                var c = arguments.length,
                    r =
                        c < 3
                            ? target
                            : desc === null
                            ? (desc = Object.getOwnPropertyDescriptor(
                                  target,
                                  key
                              ))
                            : desc,
                    d;
                if (
                    typeof Reflect === 'object' &&
                    typeof Reflect.decorate === 'function'
                )
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if ((d = decorators[i]))
                            r =
                                (c < 3
                                    ? d(r)
                                    : c > 3
                                    ? d(target, key, r)
                                    : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }

            function __param(paramIndex, decorator) {
                return function(target, key) {
                    decorator(target, key, paramIndex);
                };
            }

            function __metadata(metadataKey, metadataValue) {
                if (
                    typeof Reflect === 'object' &&
                    typeof Reflect.metadata === 'function'
                )
                    return Reflect.metadata(metadataKey, metadataValue);
            }

            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator['throw'](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done
                            ? resolve(result.value)
                            : new P(function(resolve) {
                                  resolve(result.value);
                              }).then(fulfilled, rejected);
                    }
                    step(
                        (generator = generator.apply(
                            thisArg,
                            _arguments || []
                        )).next()
                    );
                });
            }

            function __generator(thisArg, body) {
                var _ = {
                        label: 0,
                        sent: function() {
                            if (t[0] & 1) throw t[1];
                            return t[1];
                        },
                        trys: [],
                        ops: []
                    },
                    f,
                    y,
                    t,
                    g;
                return (
                    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
                    typeof Symbol === 'function' &&
                        (g[Symbol.iterator] = function() {
                            return this;
                        }),
                    g
                );
                function verb(n) {
                    return function(v) {
                        return step([n, v]);
                    };
                }
                function step(op) {
                    if (f)
                        throw new TypeError('Generator is already executing.');
                    while (_)
                        try {
                            if (
                                ((f = 1),
                                y &&
                                    (t =
                                        op[0] & 2
                                            ? y['return']
                                            : op[0]
                                            ? y['throw'] ||
                                              ((t = y['return']) && t.call(y),
                                              0)
                                            : y.next) &&
                                    !(t = t.call(y, op[1])).done)
                            )
                                return t;
                            if (((y = 0), t)) op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !((t = _.trys),
                                        (t =
                                            t.length > 0 && t[t.length - 1])) &&
                                        (op[0] === 6 || op[0] === 2)
                                    ) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (
                                        op[0] === 3 &&
                                        (!t || (op[1] > t[0] && op[1] < t[3]))
                                    ) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2]) _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        } catch (e) {
                            op = [6, e];
                            y = 0;
                        } finally {
                            f = t = 0;
                        }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }

            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
            }

            function __values(o) {
                var m = typeof Symbol === 'function' && o[Symbol.iterator],
                    i = 0;
                if (m) return m.call(o);
                return {
                    next: function() {
                        if (o && i >= o.length) o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }

            function __read(o, n) {
                var m = typeof Symbol === 'function' && o[Symbol.iterator];
                if (!m) return o;
                var i = m.call(o),
                    r,
                    ar = [],
                    e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                } catch (error) {
                    e = { error: error };
                } finally {
                    try {
                        if (r && !r.done && (m = i['return'])) m.call(i);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return ar;
            }

            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }

            function __await(v) {
                return this instanceof __await
                    ? ((this.v = v), this)
                    : new __await(v);
            }

            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError('Symbol.asyncIterator is not defined.');
                var g = generator.apply(thisArg, _arguments || []),
                    i,
                    q = [];
                return (
                    (i = {}),
                    verb('next'),
                    verb('throw'),
                    verb('return'),
                    (i[Symbol.asyncIterator] = function() {
                        return this;
                    }),
                    i
                );
                function verb(n) {
                    if (g[n])
                        i[n] = function(v) {
                            return new Promise(function(a, b) {
                                q.push([n, v, a, b]) > 1 || resume(n, v);
                            });
                        };
                }
                function resume(n, v) {
                    try {
                        step(g[n](v));
                    } catch (e) {
                        settle(q[0][3], e);
                    }
                }
                function step(r) {
                    r.value instanceof __await
                        ? Promise.resolve(r.value.v).then(fulfill, reject)
                        : settle(q[0][2], r);
                }
                function fulfill(value) {
                    resume('next', value);
                }
                function reject(value) {
                    resume('throw', value);
                }
                function settle(f, v) {
                    if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
                }
            }

            function __asyncDelegator(o) {
                var i, p;
                return (
                    (i = {}),
                    verb('next'),
                    verb('throw', function(e) {
                        throw e;
                    }),
                    verb('return'),
                    (i[Symbol.iterator] = function() {
                        return this;
                    }),
                    i
                );
                function verb(n, f) {
                    i[n] = o[n]
                        ? function(v) {
                              return (p = !p)
                                  ? {
                                        value: __await(o[n](v)),
                                        done: n === 'return'
                                    }
                                  : f
                                  ? f(v)
                                  : v;
                          }
                        : f;
                }
            }

            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError('Symbol.asyncIterator is not defined.');
                var m = o[Symbol.asyncIterator],
                    i;
                return m
                    ? m.call(o)
                    : ((o =
                          typeof __values === 'function'
                              ? __values(o)
                              : o[Symbol.iterator]()),
                      (i = {}),
                      verb('next'),
                      verb('throw'),
                      verb('return'),
                      (i[Symbol.asyncIterator] = function() {
                          return this;
                      }),
                      i);
                function verb(n) {
                    i[n] =
                        o[n] &&
                        function(v) {
                            return new Promise(function(resolve, reject) {
                                (v = o[n](v)),
                                    settle(resolve, reject, v.done, v.value);
                            });
                        };
                }
                function settle(resolve, reject, d, v) {
                    Promise.resolve(v).then(function(v) {
                        resolve({ value: v, done: d });
                    }, reject);
                }
            }

            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, 'raw', { value: raw });
                } else {
                    cooked.raw = raw;
                }
                return cooked;
            }

            function __importStar(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }

            function __importDefault(mod) {
                return mod && mod.__esModule ? mod : { default: mod };
            }

            /***/
        },
        /* 37 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var core_js_fn_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                38
            );
            /* harmony import */ var core_js_fn_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                core_js_fn_map__WEBPACK_IMPORTED_MODULE_0__
            );
            /* harmony import */ var core_js_fn_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                113
            );
            /* harmony import */ var core_js_fn_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                core_js_fn_set__WEBPACK_IMPORTED_MODULE_1__
            );
            /* harmony import */ var core_js_fn_weak_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                118
            );
            /* harmony import */ var core_js_fn_weak_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                core_js_fn_weak_map__WEBPACK_IMPORTED_MODULE_2__
            );
            /* harmony import */ var core_js_fn_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                129
            );
            /* harmony import */ var core_js_fn_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                core_js_fn_array_from__WEBPACK_IMPORTED_MODULE_3__
            );
            /* harmony import */ var core_js_fn_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                132
            );
            /* harmony import */ var core_js_fn_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                core_js_fn_object_assign__WEBPACK_IMPORTED_MODULE_4__
            );

            //# sourceMappingURL=polyfills.js.map

            /***/
        },
        /* 38 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(39);
            __webpack_require__(60);
            __webpack_require__(85);
            __webpack_require__(89);
            __webpack_require__(106);
            __webpack_require__(109);
            __webpack_require__(111);
            module.exports = __webpack_require__(44).Map;

            /***/
        },
        /* 39 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            // 19.1.3.6 Object.prototype.toString()
            var classof = __webpack_require__(40);
            var test = {};
            test[__webpack_require__(42)('toStringTag')] = 'z';
            if (test + '' != '[object z]') {
                __webpack_require__(48)(
                    Object.prototype,
                    'toString',
                    function toString() {
                        return '[object ' + classof(this) + ']';
                    },
                    true
                );
            }

            /***/
        },
        /* 40 */
        /***/ function(module, exports, __webpack_require__) {
            // getting tag from 19.1.3.6 Object.prototype.toString()
            var cof = __webpack_require__(41);
            var TAG = __webpack_require__(42)('toStringTag');
            // ES3 wrong here
            var ARG =
                cof(
                    (function() {
                        return arguments;
                    })()
                ) == 'Arguments';

            // fallback for IE11 Script Access Denied error
            var tryGet = function(it, key) {
                try {
                    return it[key];
                } catch (e) {
                    /* empty */
                }
            };

            module.exports = function(it) {
                var O, T, B;
                return it === undefined
                    ? 'Undefined'
                    : it === null
                    ? 'Null'
                    : // @@toStringTag case
                    typeof (T = tryGet((O = Object(it)), TAG)) == 'string'
                    ? T
                    : // builtinTag case
                    ARG
                    ? cof(O)
                    : // ES3 arguments fallback
                    (B = cof(O)) == 'Object' && typeof O.callee == 'function'
                    ? 'Arguments'
                    : B;
            };

            /***/
        },
        /* 41 */
        /***/ function(module, exports) {
            var toString = {}.toString;

            module.exports = function(it) {
                return toString.call(it).slice(8, -1);
            };

            /***/
        },
        /* 42 */
        /***/ function(module, exports, __webpack_require__) {
            var store = __webpack_require__(43)('wks');
            var uid = __webpack_require__(47);
            var Symbol = __webpack_require__(45).Symbol;
            var USE_SYMBOL = typeof Symbol == 'function';

            var $exports = (module.exports = function(name) {
                return (
                    store[name] ||
                    (store[name] =
                        (USE_SYMBOL && Symbol[name]) ||
                        (USE_SYMBOL ? Symbol : uid)('Symbol.' + name))
                );
            });

            $exports.store = store;

            /***/
        },
        /* 43 */
        /***/ function(module, exports, __webpack_require__) {
            var core = __webpack_require__(44);
            var global = __webpack_require__(45);
            var SHARED = '__core-js_shared__';
            var store = global[SHARED] || (global[SHARED] = {});

            (module.exports = function(key, value) {
                return (
                    store[key] ||
                    (store[key] = value !== undefined ? value : {})
                );
            })('versions', []).push({
                version: core.version,
                mode: __webpack_require__(46) ? 'pure' : 'global',
                copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
            });

            /***/
        },
        /* 44 */
        /***/ function(module, exports) {
            var core = (module.exports = { version: '2.6.1' });
            if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

            /***/
        },
        /* 45 */
        /***/ function(module, exports) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = (module.exports =
                typeof window != 'undefined' && window.Math == Math
                    ? window
                    : typeof self != 'undefined' && self.Math == Math
                    ? self
                    : // eslint-disable-next-line no-new-func
                      Function('return this')());
            if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

            /***/
        },
        /* 46 */
        /***/ function(module, exports) {
            module.exports = false;

            /***/
        },
        /* 47 */
        /***/ function(module, exports) {
            var id = 0;
            var px = Math.random();
            module.exports = function(key) {
                return 'Symbol('.concat(
                    key === undefined ? '' : key,
                    ')_',
                    (++id + px).toString(36)
                );
            };

            /***/
        },
        /* 48 */
        /***/ function(module, exports, __webpack_require__) {
            var global = __webpack_require__(45);
            var hide = __webpack_require__(49);
            var has = __webpack_require__(59);
            var SRC = __webpack_require__(47)('src');
            var TO_STRING = 'toString';
            var $toString = Function[TO_STRING];
            var TPL = ('' + $toString).split(TO_STRING);

            __webpack_require__(44).inspectSource = function(it) {
                return $toString.call(it);
            };

            (module.exports = function(O, key, val, safe) {
                var isFunction = typeof val == 'function';
                if (isFunction) has(val, 'name') || hide(val, 'name', key);
                if (O[key] === val) return;
                if (isFunction)
                    has(val, SRC) ||
                        hide(
                            val,
                            SRC,
                            O[key] ? '' + O[key] : TPL.join(String(key))
                        );
                if (O === global) {
                    O[key] = val;
                } else if (!safe) {
                    delete O[key];
                    hide(O, key, val);
                } else if (O[key]) {
                    O[key] = val;
                } else {
                    hide(O, key, val);
                }
                // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
            })(Function.prototype, TO_STRING, function toString() {
                return (
                    (typeof this == 'function' && this[SRC]) ||
                    $toString.call(this)
                );
            });

            /***/
        },
        /* 49 */
        /***/ function(module, exports, __webpack_require__) {
            var dP = __webpack_require__(50);
            var createDesc = __webpack_require__(58);
            module.exports = __webpack_require__(54)
                ? function(object, key, value) {
                      return dP.f(object, key, createDesc(1, value));
                  }
                : function(object, key, value) {
                      object[key] = value;
                      return object;
                  };

            /***/
        },
        /* 50 */
        /***/ function(module, exports, __webpack_require__) {
            var anObject = __webpack_require__(51);
            var IE8_DOM_DEFINE = __webpack_require__(53);
            var toPrimitive = __webpack_require__(57);
            var dP = Object.defineProperty;

            exports.f = __webpack_require__(54)
                ? Object.defineProperty
                : function defineProperty(O, P, Attributes) {
                      anObject(O);
                      P = toPrimitive(P, true);
                      anObject(Attributes);
                      if (IE8_DOM_DEFINE)
                          try {
                              return dP(O, P, Attributes);
                          } catch (e) {
                              /* empty */
                          }
                      if ('get' in Attributes || 'set' in Attributes)
                          throw TypeError('Accessors not supported!');
                      if ('value' in Attributes) O[P] = Attributes.value;
                      return O;
                  };

            /***/
        },
        /* 51 */
        /***/ function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(52);
            module.exports = function(it) {
                if (!isObject(it)) throw TypeError(it + ' is not an object!');
                return it;
            };

            /***/
        },
        /* 52 */
        /***/ function(module, exports) {
            module.exports = function(it) {
                return typeof it === 'object'
                    ? it !== null
                    : typeof it === 'function';
            };

            /***/
        },
        /* 53 */
        /***/ function(module, exports, __webpack_require__) {
            module.exports =
                !__webpack_require__(54) &&
                !__webpack_require__(55)(function() {
                    return (
                        Object.defineProperty(
                            __webpack_require__(56)('div'),
                            'a',
                            {
                                get: function() {
                                    return 7;
                                }
                            }
                        ).a != 7
                    );
                });

            /***/
        },
        /* 54 */
        /***/ function(module, exports, __webpack_require__) {
            // Thank's IE8 for his funny defineProperty
            module.exports = !__webpack_require__(55)(function() {
                return (
                    Object.defineProperty({}, 'a', {
                        get: function() {
                            return 7;
                        }
                    }).a != 7
                );
            });

            /***/
        },
        /* 55 */
        /***/ function(module, exports) {
            module.exports = function(exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };

            /***/
        },
        /* 56 */
        /***/ function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(52);
            var document = __webpack_require__(45).document;
            // typeof document.createElement is 'object' in old IE
            var is = isObject(document) && isObject(document.createElement);
            module.exports = function(it) {
                return is ? document.createElement(it) : {};
            };

            /***/
        },
        /* 57 */
        /***/ function(module, exports, __webpack_require__) {
            // 7.1.1 ToPrimitive(input [, PreferredType])
            var isObject = __webpack_require__(52);
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module.exports = function(it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (
                    S &&
                    typeof (fn = it.toString) == 'function' &&
                    !isObject((val = fn.call(it)))
                )
                    return val;
                if (
                    typeof (fn = it.valueOf) == 'function' &&
                    !isObject((val = fn.call(it)))
                )
                    return val;
                if (
                    !S &&
                    typeof (fn = it.toString) == 'function' &&
                    !isObject((val = fn.call(it)))
                )
                    return val;
                throw TypeError("Can't convert object to primitive value");
            };

            /***/
        },
        /* 58 */
        /***/ function(module, exports) {
            module.exports = function(bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };

            /***/
        },
        /* 59 */
        /***/ function(module, exports) {
            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
            };

            /***/
        },
        /* 60 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var $at = __webpack_require__(61)(true);

            // 21.1.3.27 String.prototype[@@iterator]()
            __webpack_require__(64)(
                String,
                'String',
                function(iterated) {
                    this._t = String(iterated); // target
                    this._i = 0; // next index
                    // 21.1.5.2.1 %StringIteratorPrototype%.next()
                },
                function() {
                    var O = this._t;
                    var index = this._i;
                    var point;
                    if (index >= O.length)
                        return { value: undefined, done: true };
                    point = $at(O, index);
                    this._i += point.length;
                    return { value: point, done: false };
                }
            );

            /***/
        },
        /* 61 */
        /***/ function(module, exports, __webpack_require__) {
            var toInteger = __webpack_require__(62);
            var defined = __webpack_require__(63);
            // true  -> String#at
            // false -> String#codePointAt
            module.exports = function(TO_STRING) {
                return function(that, pos) {
                    var s = String(defined(that));
                    var i = toInteger(pos);
                    var l = s.length;
                    var a, b;
                    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                    a = s.charCodeAt(i);
                    return a < 0xd800 ||
                        a > 0xdbff ||
                        i + 1 === l ||
                        (b = s.charCodeAt(i + 1)) < 0xdc00 ||
                        b > 0xdfff
                        ? TO_STRING
                            ? s.charAt(i)
                            : a
                        : TO_STRING
                        ? s.slice(i, i + 2)
                        : ((a - 0xd800) << 10) + (b - 0xdc00) + 0x10000;
                };
            };

            /***/
        },
        /* 62 */
        /***/ function(module, exports) {
            // 7.1.4 ToInteger
            var ceil = Math.ceil;
            var floor = Math.floor;
            module.exports = function(it) {
                return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
            };

            /***/
        },
        /* 63 */
        /***/ function(module, exports) {
            // 7.2.1 RequireObjectCoercible(argument)
            module.exports = function(it) {
                if (it == undefined)
                    throw TypeError("Can't call method on  " + it);
                return it;
            };

            /***/
        },
        /* 64 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var LIBRARY = __webpack_require__(46);
            var $export = __webpack_require__(65);
            var redefine = __webpack_require__(48);
            var hide = __webpack_require__(49);
            var Iterators = __webpack_require__(68);
            var $iterCreate = __webpack_require__(69);
            var setToStringTag = __webpack_require__(82);
            var getPrototypeOf = __webpack_require__(83);
            var ITERATOR = __webpack_require__(42)('iterator');
            var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
            var FF_ITERATOR = '@@iterator';
            var KEYS = 'keys';
            var VALUES = 'values';

            var returnThis = function() {
                return this;
            };

            module.exports = function(
                Base,
                NAME,
                Constructor,
                next,
                DEFAULT,
                IS_SET,
                FORCED
            ) {
                $iterCreate(Constructor, NAME, next);
                var getMethod = function(kind) {
                    if (!BUGGY && kind in proto) return proto[kind];
                    switch (kind) {
                        case KEYS:
                            return function keys() {
                                return new Constructor(this, kind);
                            };
                        case VALUES:
                            return function values() {
                                return new Constructor(this, kind);
                            };
                    }
                    return function entries() {
                        return new Constructor(this, kind);
                    };
                };
                var TAG = NAME + ' Iterator';
                var DEF_VALUES = DEFAULT == VALUES;
                var VALUES_BUG = false;
                var proto = Base.prototype;
                var $native =
                    proto[ITERATOR] ||
                    proto[FF_ITERATOR] ||
                    (DEFAULT && proto[DEFAULT]);
                var $default = $native || getMethod(DEFAULT);
                var $entries = DEFAULT
                    ? !DEF_VALUES
                        ? $default
                        : getMethod('entries')
                    : undefined;
                var $anyNative =
                    NAME == 'Array' ? proto.entries || $native : $native;
                var methods, key, IteratorPrototype;
                // Fix native
                if ($anyNative) {
                    IteratorPrototype = getPrototypeOf(
                        $anyNative.call(new Base())
                    );
                    if (
                        IteratorPrototype !== Object.prototype &&
                        IteratorPrototype.next
                    ) {
                        // Set @@toStringTag to native iterators
                        setToStringTag(IteratorPrototype, TAG, true);
                        // fix for some old engines
                        if (
                            !LIBRARY &&
                            typeof IteratorPrototype[ITERATOR] != 'function'
                        )
                            hide(IteratorPrototype, ITERATOR, returnThis);
                    }
                }
                // fix Array#{values, @@iterator}.name in V8 / FF
                if (DEF_VALUES && $native && $native.name !== VALUES) {
                    VALUES_BUG = true;
                    $default = function values() {
                        return $native.call(this);
                    };
                }
                // Define iterator
                if (
                    (!LIBRARY || FORCED) &&
                    (BUGGY || VALUES_BUG || !proto[ITERATOR])
                ) {
                    hide(proto, ITERATOR, $default);
                }
                // Plug for library
                Iterators[NAME] = $default;
                Iterators[TAG] = returnThis;
                if (DEFAULT) {
                    methods = {
                        values: DEF_VALUES ? $default : getMethod(VALUES),
                        keys: IS_SET ? $default : getMethod(KEYS),
                        entries: $entries
                    };
                    if (FORCED)
                        for (key in methods) {
                            if (!(key in proto))
                                redefine(proto, key, methods[key]);
                        }
                    else
                        $export(
                            $export.P + $export.F * (BUGGY || VALUES_BUG),
                            NAME,
                            methods
                        );
                }
                return methods;
            };

            /***/
        },
        /* 65 */
        /***/ function(module, exports, __webpack_require__) {
            var global = __webpack_require__(45);
            var core = __webpack_require__(44);
            var hide = __webpack_require__(49);
            var redefine = __webpack_require__(48);
            var ctx = __webpack_require__(66);
            var PROTOTYPE = 'prototype';

            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F;
                var IS_GLOBAL = type & $export.G;
                var IS_STATIC = type & $export.S;
                var IS_PROTO = type & $export.P;
                var IS_BIND = type & $export.B;
                var target = IS_GLOBAL
                    ? global
                    : IS_STATIC
                    ? global[name] || (global[name] = {})
                    : (global[name] || {})[PROTOTYPE];
                var exports = IS_GLOBAL
                    ? core
                    : core[name] || (core[name] = {});
                var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
                var key, own, out, exp;
                if (IS_GLOBAL) source = name;
                for (key in source) {
                    // contains in native
                    own = !IS_FORCED && target && target[key] !== undefined;
                    // export native or passed
                    out = (own ? target : source)[key];
                    // bind timers to global for call from export context
                    exp =
                        IS_BIND && own
                            ? ctx(out, global)
                            : IS_PROTO && typeof out == 'function'
                            ? ctx(Function.call, out)
                            : out;
                    // extend global
                    if (target) redefine(target, key, out, type & $export.U);
                    // export
                    if (exports[key] != out) hide(exports, key, exp);
                    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
                }
            };
            global.core = core;
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            $export.U = 64; // safe
            $export.R = 128; // real proto method for `library`
            module.exports = $export;

            /***/
        },
        /* 66 */
        /***/ function(module, exports, __webpack_require__) {
            // optional / simple context binding
            var aFunction = __webpack_require__(67);
            module.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch (length) {
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function(/* ...args */) {
                    return fn.apply(that, arguments);
                };
            };

            /***/
        },
        /* 67 */
        /***/ function(module, exports) {
            module.exports = function(it) {
                if (typeof it != 'function')
                    throw TypeError(it + ' is not a function!');
                return it;
            };

            /***/
        },
        /* 68 */
        /***/ function(module, exports) {
            module.exports = {};

            /***/
        },
        /* 69 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var create = __webpack_require__(70);
            var descriptor = __webpack_require__(58);
            var setToStringTag = __webpack_require__(82);
            var IteratorPrototype = {};

            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            __webpack_require__(49)(
                IteratorPrototype,
                __webpack_require__(42)('iterator'),
                function() {
                    return this;
                }
            );

            module.exports = function(Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, {
                    next: descriptor(1, next)
                });
                setToStringTag(Constructor, NAME + ' Iterator');
            };

            /***/
        },
        /* 70 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            var anObject = __webpack_require__(51);
            var dPs = __webpack_require__(71);
            var enumBugKeys = __webpack_require__(80);
            var IE_PROTO = __webpack_require__(79)('IE_PROTO');
            var Empty = function() {
                /* empty */
            };
            var PROTOTYPE = 'prototype';

            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var createDict = function() {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = __webpack_require__(56)('iframe');
                var i = enumBugKeys.length;
                var lt = '<';
                var gt = '>';
                var iframeDocument;
                iframe.style.display = 'none';
                __webpack_require__(81).appendChild(iframe);
                iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                // createDict = iframe.contentWindow.Object;
                // html.removeChild(iframe);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(
                    lt +
                        'script' +
                        gt +
                        'document.F=Object' +
                        lt +
                        '/script' +
                        gt
                );
                iframeDocument.close();
                createDict = iframeDocument.F;
                while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
                return createDict();
            };

            module.exports =
                Object.create ||
                function create(O, Properties) {
                    var result;
                    if (O !== null) {
                        Empty[PROTOTYPE] = anObject(O);
                        result = new Empty();
                        Empty[PROTOTYPE] = null;
                        // add "__proto__" for Object.getPrototypeOf polyfill
                        result[IE_PROTO] = O;
                    } else result = createDict();
                    return Properties === undefined
                        ? result
                        : dPs(result, Properties);
                };

            /***/
        },
        /* 71 */
        /***/ function(module, exports, __webpack_require__) {
            var dP = __webpack_require__(50);
            var anObject = __webpack_require__(51);
            var getKeys = __webpack_require__(72);

            module.exports = __webpack_require__(54)
                ? Object.defineProperties
                : function defineProperties(O, Properties) {
                      anObject(O);
                      var keys = getKeys(Properties);
                      var length = keys.length;
                      var i = 0;
                      var P;
                      while (length > i)
                          dP.f(O, (P = keys[i++]), Properties[P]);
                      return O;
                  };

            /***/
        },
        /* 72 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            var $keys = __webpack_require__(73);
            var enumBugKeys = __webpack_require__(80);

            module.exports =
                Object.keys ||
                function keys(O) {
                    return $keys(O, enumBugKeys);
                };

            /***/
        },
        /* 73 */
        /***/ function(module, exports, __webpack_require__) {
            var has = __webpack_require__(59);
            var toIObject = __webpack_require__(74);
            var arrayIndexOf = __webpack_require__(76)(false);
            var IE_PROTO = __webpack_require__(79)('IE_PROTO');

            module.exports = function(object, names) {
                var O = toIObject(object);
                var i = 0;
                var result = [];
                var key;
                for (key in O)
                    if (key != IE_PROTO) has(O, key) && result.push(key);
                // Don't enum bug & hidden keys
                while (names.length > i)
                    if (has(O, (key = names[i++]))) {
                        ~arrayIndexOf(result, key) || result.push(key);
                    }
                return result;
            };

            /***/
        },
        /* 74 */
        /***/ function(module, exports, __webpack_require__) {
            // to indexed object, toObject with fallback for non-array-like ES3 strings
            var IObject = __webpack_require__(75);
            var defined = __webpack_require__(63);
            module.exports = function(it) {
                return IObject(defined(it));
            };

            /***/
        },
        /* 75 */
        /***/ function(module, exports, __webpack_require__) {
            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var cof = __webpack_require__(41);
            // eslint-disable-next-line no-prototype-builtins
            module.exports = Object('z').propertyIsEnumerable(0)
                ? Object
                : function(it) {
                      return cof(it) == 'String' ? it.split('') : Object(it);
                  };

            /***/
        },
        /* 76 */
        /***/ function(module, exports, __webpack_require__) {
            // false -> Array#indexOf
            // true  -> Array#includes
            var toIObject = __webpack_require__(74);
            var toLength = __webpack_require__(77);
            var toAbsoluteIndex = __webpack_require__(78);
            module.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    // Array#includes uses SameValueZero equality algorithm
                    // eslint-disable-next-line no-self-compare
                    if (IS_INCLUDES && el != el)
                        while (length > index) {
                            value = O[index++];
                            // eslint-disable-next-line no-self-compare
                            if (value != value) return true;
                            // Array#indexOf ignores holes, Array#includes - not
                        }
                    else
                        for (; length > index; index++)
                            if (IS_INCLUDES || index in O) {
                                if (O[index] === el)
                                    return IS_INCLUDES || index || 0;
                            }
                    return !IS_INCLUDES && -1;
                };
            };

            /***/
        },
        /* 77 */
        /***/ function(module, exports, __webpack_require__) {
            // 7.1.15 ToLength
            var toInteger = __webpack_require__(62);
            var min = Math.min;
            module.exports = function(it) {
                return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
            };

            /***/
        },
        /* 78 */
        /***/ function(module, exports, __webpack_require__) {
            var toInteger = __webpack_require__(62);
            var max = Math.max;
            var min = Math.min;
            module.exports = function(index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length);
            };

            /***/
        },
        /* 79 */
        /***/ function(module, exports, __webpack_require__) {
            var shared = __webpack_require__(43)('keys');
            var uid = __webpack_require__(47);
            module.exports = function(key) {
                return shared[key] || (shared[key] = uid(key));
            };

            /***/
        },
        /* 80 */
        /***/ function(module, exports) {
            // IE 8- don't enum bug keys
            module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
                ','
            );

            /***/
        },
        /* 81 */
        /***/ function(module, exports, __webpack_require__) {
            var document = __webpack_require__(45).document;
            module.exports = document && document.documentElement;

            /***/
        },
        /* 82 */
        /***/ function(module, exports, __webpack_require__) {
            var def = __webpack_require__(50).f;
            var has = __webpack_require__(59);
            var TAG = __webpack_require__(42)('toStringTag');

            module.exports = function(it, tag, stat) {
                if (it && !has((it = stat ? it : it.prototype), TAG))
                    def(it, TAG, { configurable: true, value: tag });
            };

            /***/
        },
        /* 83 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            var has = __webpack_require__(59);
            var toObject = __webpack_require__(84);
            var IE_PROTO = __webpack_require__(79)('IE_PROTO');
            var ObjectProto = Object.prototype;

            module.exports =
                Object.getPrototypeOf ||
                function(O) {
                    O = toObject(O);
                    if (has(O, IE_PROTO)) return O[IE_PROTO];
                    if (
                        typeof O.constructor == 'function' &&
                        O instanceof O.constructor
                    ) {
                        return O.constructor.prototype;
                    }
                    return O instanceof Object ? ObjectProto : null;
                };

            /***/
        },
        /* 84 */
        /***/ function(module, exports, __webpack_require__) {
            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__(63);
            module.exports = function(it) {
                return Object(defined(it));
            };

            /***/
        },
        /* 85 */
        /***/ function(module, exports, __webpack_require__) {
            var $iterators = __webpack_require__(86);
            var getKeys = __webpack_require__(72);
            var redefine = __webpack_require__(48);
            var global = __webpack_require__(45);
            var hide = __webpack_require__(49);
            var Iterators = __webpack_require__(68);
            var wks = __webpack_require__(42);
            var ITERATOR = wks('iterator');
            var TO_STRING_TAG = wks('toStringTag');
            var ArrayValues = Iterators.Array;

            var DOMIterables = {
                CSSRuleList: true, // TODO: Not spec compliant, should be false.
                CSSStyleDeclaration: false,
                CSSValueList: false,
                ClientRectList: false,
                DOMRectList: false,
                DOMStringList: false,
                DOMTokenList: true,
                DataTransferItemList: false,
                FileList: false,
                HTMLAllCollection: false,
                HTMLCollection: false,
                HTMLFormElement: false,
                HTMLSelectElement: false,
                MediaList: true, // TODO: Not spec compliant, should be false.
                MimeTypeArray: false,
                NamedNodeMap: false,
                NodeList: true,
                PaintRequestList: false,
                Plugin: false,
                PluginArray: false,
                SVGLengthList: false,
                SVGNumberList: false,
                SVGPathSegList: false,
                SVGPointList: false,
                SVGStringList: false,
                SVGTransformList: false,
                SourceBufferList: false,
                StyleSheetList: true, // TODO: Not spec compliant, should be false.
                TextTrackCueList: false,
                TextTrackList: false,
                TouchList: false
            };

            for (
                var collections = getKeys(DOMIterables), i = 0;
                i < collections.length;
                i++
            ) {
                var NAME = collections[i];
                var explicit = DOMIterables[NAME];
                var Collection = global[NAME];
                var proto = Collection && Collection.prototype;
                var key;
                if (proto) {
                    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
                    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                    Iterators[NAME] = ArrayValues;
                    if (explicit)
                        for (key in $iterators)
                            if (!proto[key])
                                redefine(proto, key, $iterators[key], true);
                }
            }

            /***/
        },
        /* 86 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var addToUnscopables = __webpack_require__(87);
            var step = __webpack_require__(88);
            var Iterators = __webpack_require__(68);
            var toIObject = __webpack_require__(74);

            // 22.1.3.4 Array.prototype.entries()
            // 22.1.3.13 Array.prototype.keys()
            // 22.1.3.29 Array.prototype.values()
            // 22.1.3.30 Array.prototype[@@iterator]()
            module.exports = __webpack_require__(64)(
                Array,
                'Array',
                function(iterated, kind) {
                    this._t = toIObject(iterated); // target
                    this._i = 0; // next index
                    this._k = kind; // kind
                    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
                },
                function() {
                    var O = this._t;
                    var kind = this._k;
                    var index = this._i++;
                    if (!O || index >= O.length) {
                        this._t = undefined;
                        return step(1);
                    }
                    if (kind == 'keys') return step(0, index);
                    if (kind == 'values') return step(0, O[index]);
                    return step(0, [index, O[index]]);
                },
                'values'
            );

            // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
            Iterators.Arguments = Iterators.Array;

            addToUnscopables('keys');
            addToUnscopables('values');
            addToUnscopables('entries');

            /***/
        },
        /* 87 */
        /***/ function(module, exports, __webpack_require__) {
            // 22.1.3.31 Array.prototype[@@unscopables]
            var UNSCOPABLES = __webpack_require__(42)('unscopables');
            var ArrayProto = Array.prototype;
            if (ArrayProto[UNSCOPABLES] == undefined)
                __webpack_require__(49)(ArrayProto, UNSCOPABLES, {});
            module.exports = function(key) {
                ArrayProto[UNSCOPABLES][key] = true;
            };

            /***/
        },
        /* 88 */
        /***/ function(module, exports) {
            module.exports = function(done, value) {
                return { value: value, done: !!done };
            };

            /***/
        },
        /* 89 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var strong = __webpack_require__(90);
            var validate = __webpack_require__(99);
            var MAP = 'Map';

            // 23.1 Map Objects
            module.exports = __webpack_require__(100)(
                MAP,
                function(get) {
                    return function Map() {
                        return get(
                            this,
                            arguments.length > 0 ? arguments[0] : undefined
                        );
                    };
                },
                {
                    // 23.1.3.6 Map.prototype.get(key)
                    get: function get(key) {
                        var entry = strong.getEntry(validate(this, MAP), key);
                        return entry && entry.v;
                    },
                    // 23.1.3.9 Map.prototype.set(key, value)
                    set: function set(key, value) {
                        return strong.def(
                            validate(this, MAP),
                            key === 0 ? 0 : key,
                            value
                        );
                    }
                },
                strong,
                true
            );

            /***/
        },
        /* 90 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var dP = __webpack_require__(50).f;
            var create = __webpack_require__(70);
            var redefineAll = __webpack_require__(91);
            var ctx = __webpack_require__(66);
            var anInstance = __webpack_require__(92);
            var forOf = __webpack_require__(93);
            var $iterDefine = __webpack_require__(64);
            var step = __webpack_require__(88);
            var setSpecies = __webpack_require__(97);
            var DESCRIPTORS = __webpack_require__(54);
            var fastKey = __webpack_require__(98).fastKey;
            var validate = __webpack_require__(99);
            var SIZE = DESCRIPTORS ? '_s' : 'size';

            var getEntry = function(that, key) {
                // fast case
                var index = fastKey(key);
                var entry;
                if (index !== 'F') return that._i[index];
                // frozen object case
                for (entry = that._f; entry; entry = entry.n) {
                    if (entry.k == key) return entry;
                }
            };

            module.exports = {
                getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                    var C = wrapper(function(that, iterable) {
                        anInstance(that, C, NAME, '_i');
                        that._t = NAME; // collection type
                        that._i = create(null); // index
                        that._f = undefined; // first entry
                        that._l = undefined; // last entry
                        that[SIZE] = 0; // size
                        if (iterable != undefined)
                            forOf(iterable, IS_MAP, that[ADDER], that);
                    });
                    redefineAll(C.prototype, {
                        // 23.1.3.1 Map.prototype.clear()
                        // 23.2.3.2 Set.prototype.clear()
                        clear: function clear() {
                            for (
                                var that = validate(this, NAME),
                                    data = that._i,
                                    entry = that._f;
                                entry;
                                entry = entry.n
                            ) {
                                entry.r = true;
                                if (entry.p) entry.p = entry.p.n = undefined;
                                delete data[entry.i];
                            }
                            that._f = that._l = undefined;
                            that[SIZE] = 0;
                        },
                        // 23.1.3.3 Map.prototype.delete(key)
                        // 23.2.3.4 Set.prototype.delete(value)
                        delete: function(key) {
                            var that = validate(this, NAME);
                            var entry = getEntry(that, key);
                            if (entry) {
                                var next = entry.n;
                                var prev = entry.p;
                                delete that._i[entry.i];
                                entry.r = true;
                                if (prev) prev.n = next;
                                if (next) next.p = prev;
                                if (that._f == entry) that._f = next;
                                if (that._l == entry) that._l = prev;
                                that[SIZE]--;
                            }
                            return !!entry;
                        },
                        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                        forEach: function forEach(
                            callbackfn /* , that = undefined */
                        ) {
                            validate(this, NAME);
                            var f = ctx(
                                callbackfn,
                                arguments.length > 1 ? arguments[1] : undefined,
                                3
                            );
                            var entry;
                            while ((entry = entry ? entry.n : this._f)) {
                                f(entry.v, entry.k, this);
                                // revert to the last existing entry
                                while (entry && entry.r) entry = entry.p;
                            }
                        },
                        // 23.1.3.7 Map.prototype.has(key)
                        // 23.2.3.7 Set.prototype.has(value)
                        has: function has(key) {
                            return !!getEntry(validate(this, NAME), key);
                        }
                    });
                    if (DESCRIPTORS)
                        dP(C.prototype, 'size', {
                            get: function() {
                                return validate(this, NAME)[SIZE];
                            }
                        });
                    return C;
                },
                def: function(that, key, value) {
                    var entry = getEntry(that, key);
                    var prev, index;
                    // change existing entry
                    if (entry) {
                        entry.v = value;
                        // create new entry
                    } else {
                        that._l = entry = {
                            i: (index = fastKey(key, true)), // <- index
                            k: key, // <- key
                            v: value, // <- value
                            p: (prev = that._l), // <- previous entry
                            n: undefined, // <- next entry
                            r: false // <- removed
                        };
                        if (!that._f) that._f = entry;
                        if (prev) prev.n = entry;
                        that[SIZE]++;
                        // add to index
                        if (index !== 'F') that._i[index] = entry;
                    }
                    return that;
                },
                getEntry: getEntry,
                setStrong: function(C, NAME, IS_MAP) {
                    // add .keys, .values, .entries, [@@iterator]
                    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
                    $iterDefine(
                        C,
                        NAME,
                        function(iterated, kind) {
                            this._t = validate(iterated, NAME); // target
                            this._k = kind; // kind
                            this._l = undefined; // previous
                        },
                        function() {
                            var that = this;
                            var kind = that._k;
                            var entry = that._l;
                            // revert to the last existing entry
                            while (entry && entry.r) entry = entry.p;
                            // get next entry
                            if (
                                !that._t ||
                                !(that._l = entry = entry
                                    ? entry.n
                                    : that._t._f)
                            ) {
                                // or finish the iteration
                                that._t = undefined;
                                return step(1);
                            }
                            // return step by kind
                            if (kind == 'keys') return step(0, entry.k);
                            if (kind == 'values') return step(0, entry.v);
                            return step(0, [entry.k, entry.v]);
                        },
                        IS_MAP ? 'entries' : 'values',
                        !IS_MAP,
                        true
                    );

                    // add [@@species], 23.1.2.2, 23.2.2.2
                    setSpecies(NAME);
                }
            };

            /***/
        },
        /* 91 */
        /***/ function(module, exports, __webpack_require__) {
            var redefine = __webpack_require__(48);
            module.exports = function(target, src, safe) {
                for (var key in src) redefine(target, key, src[key], safe);
                return target;
            };

            /***/
        },
        /* 92 */
        /***/ function(module, exports) {
            module.exports = function(it, Constructor, name, forbiddenField) {
                if (
                    !(it instanceof Constructor) ||
                    (forbiddenField !== undefined && forbiddenField in it)
                ) {
                    throw TypeError(name + ': incorrect invocation!');
                }
                return it;
            };

            /***/
        },
        /* 93 */
        /***/ function(module, exports, __webpack_require__) {
            var ctx = __webpack_require__(66);
            var call = __webpack_require__(94);
            var isArrayIter = __webpack_require__(95);
            var anObject = __webpack_require__(51);
            var toLength = __webpack_require__(77);
            var getIterFn = __webpack_require__(96);
            var BREAK = {};
            var RETURN = {};
            var exports = (module.exports = function(
                iterable,
                entries,
                fn,
                that,
                ITERATOR
            ) {
                var iterFn = ITERATOR
                    ? function() {
                          return iterable;
                      }
                    : getIterFn(iterable);
                var f = ctx(fn, that, entries ? 2 : 1);
                var index = 0;
                var length, step, iterator, result;
                if (typeof iterFn != 'function')
                    throw TypeError(iterable + ' is not iterable!');
                // fast case for arrays with default iterator
                if (isArrayIter(iterFn))
                    for (
                        length = toLength(iterable.length);
                        length > index;
                        index++
                    ) {
                        result = entries
                            ? f(anObject((step = iterable[index]))[0], step[1])
                            : f(iterable[index]);
                        if (result === BREAK || result === RETURN)
                            return result;
                    }
                else
                    for (
                        iterator = iterFn.call(iterable);
                        !(step = iterator.next()).done;

                    ) {
                        result = call(iterator, f, step.value, entries);
                        if (result === BREAK || result === RETURN)
                            return result;
                    }
            });
            exports.BREAK = BREAK;
            exports.RETURN = RETURN;

            /***/
        },
        /* 94 */
        /***/ function(module, exports, __webpack_require__) {
            // call something on iterator step with safe closing on error
            var anObject = __webpack_require__(51);
            module.exports = function(iterator, fn, value, entries) {
                try {
                    return entries
                        ? fn(anObject(value)[0], value[1])
                        : fn(value);
                    // 7.4.6 IteratorClose(iterator, completion)
                } catch (e) {
                    var ret = iterator['return'];
                    if (ret !== undefined) anObject(ret.call(iterator));
                    throw e;
                }
            };

            /***/
        },
        /* 95 */
        /***/ function(module, exports, __webpack_require__) {
            // check on default Array iterator
            var Iterators = __webpack_require__(68);
            var ITERATOR = __webpack_require__(42)('iterator');
            var ArrayProto = Array.prototype;

            module.exports = function(it) {
                return (
                    it !== undefined &&
                    (Iterators.Array === it || ArrayProto[ITERATOR] === it)
                );
            };

            /***/
        },
        /* 96 */
        /***/ function(module, exports, __webpack_require__) {
            var classof = __webpack_require__(40);
            var ITERATOR = __webpack_require__(42)('iterator');
            var Iterators = __webpack_require__(68);
            module.exports = __webpack_require__(
                44
            ).getIteratorMethod = function(it) {
                if (it != undefined)
                    return (
                        it[ITERATOR] ||
                        it['@@iterator'] ||
                        Iterators[classof(it)]
                    );
            };

            /***/
        },
        /* 97 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var global = __webpack_require__(45);
            var dP = __webpack_require__(50);
            var DESCRIPTORS = __webpack_require__(54);
            var SPECIES = __webpack_require__(42)('species');

            module.exports = function(KEY) {
                var C = global[KEY];
                if (DESCRIPTORS && C && !C[SPECIES])
                    dP.f(C, SPECIES, {
                        configurable: true,
                        get: function() {
                            return this;
                        }
                    });
            };

            /***/
        },
        /* 98 */
        /***/ function(module, exports, __webpack_require__) {
            var META = __webpack_require__(47)('meta');
            var isObject = __webpack_require__(52);
            var has = __webpack_require__(59);
            var setDesc = __webpack_require__(50).f;
            var id = 0;
            var isExtensible =
                Object.isExtensible ||
                function() {
                    return true;
                };
            var FREEZE = !__webpack_require__(55)(function() {
                return isExtensible(Object.preventExtensions({}));
            });
            var setMeta = function(it) {
                setDesc(it, META, {
                    value: {
                        i: 'O' + ++id, // object ID
                        w: {} // weak collections IDs
                    }
                });
            };
            var fastKey = function(it, create) {
                // return primitive with prefix
                if (!isObject(it))
                    return typeof it == 'symbol'
                        ? it
                        : (typeof it == 'string' ? 'S' : 'P') + it;
                if (!has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return 'F';
                    // not necessary to add metadata
                    if (!create) return 'E';
                    // add missing metadata
                    setMeta(it);
                    // return object ID
                }
                return it[META].i;
            };
            var getWeak = function(it, create) {
                if (!has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return true;
                    // not necessary to add metadata
                    if (!create) return false;
                    // add missing metadata
                    setMeta(it);
                    // return hash weak collections IDs
                }
                return it[META].w;
            };
            // add metadata on freeze-family methods calling
            var onFreeze = function(it) {
                if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
                    setMeta(it);
                return it;
            };
            var meta = (module.exports = {
                KEY: META,
                NEED: false,
                fastKey: fastKey,
                getWeak: getWeak,
                onFreeze: onFreeze
            });

            /***/
        },
        /* 99 */
        /***/ function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(52);
            module.exports = function(it, TYPE) {
                if (!isObject(it) || it._t !== TYPE)
                    throw TypeError(
                        'Incompatible receiver, ' + TYPE + ' required!'
                    );
                return it;
            };

            /***/
        },
        /* 100 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var global = __webpack_require__(45);
            var $export = __webpack_require__(65);
            var redefine = __webpack_require__(48);
            var redefineAll = __webpack_require__(91);
            var meta = __webpack_require__(98);
            var forOf = __webpack_require__(93);
            var anInstance = __webpack_require__(92);
            var isObject = __webpack_require__(52);
            var fails = __webpack_require__(55);
            var $iterDetect = __webpack_require__(101);
            var setToStringTag = __webpack_require__(82);
            var inheritIfRequired = __webpack_require__(102);

            module.exports = function(
                NAME,
                wrapper,
                methods,
                common,
                IS_MAP,
                IS_WEAK
            ) {
                var Base = global[NAME];
                var C = Base;
                var ADDER = IS_MAP ? 'set' : 'add';
                var proto = C && C.prototype;
                var O = {};
                var fixMethod = function(KEY) {
                    var fn = proto[KEY];
                    redefine(
                        proto,
                        KEY,
                        KEY == 'delete'
                            ? function(a) {
                                  return IS_WEAK && !isObject(a)
                                      ? false
                                      : fn.call(this, a === 0 ? 0 : a);
                              }
                            : KEY == 'has'
                            ? function has(a) {
                                  return IS_WEAK && !isObject(a)
                                      ? false
                                      : fn.call(this, a === 0 ? 0 : a);
                              }
                            : KEY == 'get'
                            ? function get(a) {
                                  return IS_WEAK && !isObject(a)
                                      ? undefined
                                      : fn.call(this, a === 0 ? 0 : a);
                              }
                            : KEY == 'add'
                            ? function add(a) {
                                  fn.call(this, a === 0 ? 0 : a);
                                  return this;
                              }
                            : function set(a, b) {
                                  fn.call(this, a === 0 ? 0 : a, b);
                                  return this;
                              }
                    );
                };
                if (
                    typeof C != 'function' ||
                    !(
                        IS_WEAK ||
                        (proto.forEach &&
                            !fails(function() {
                                new C().entries().next();
                            }))
                    )
                ) {
                    // create collection constructor
                    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
                    redefineAll(C.prototype, methods);
                    meta.NEED = true;
                } else {
                    var instance = new C();
                    // early implementations not supports chaining
                    var HASNT_CHAINING =
                        instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
                    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
                    var THROWS_ON_PRIMITIVES = fails(function() {
                        instance.has(1);
                    });
                    // most early implementations doesn't supports iterables, most modern - not close it correctly
                    var ACCEPT_ITERABLES = $iterDetect(function(iter) {
                        new C(iter);
                    }); // eslint-disable-line no-new
                    // for early implementations -0 and +0 not the same
                    var BUGGY_ZERO =
                        !IS_WEAK &&
                        fails(function() {
                            // V8 ~ Chromium 42- fails only with 5+ elements
                            var $instance = new C();
                            var index = 5;
                            while (index--) $instance[ADDER](index, index);
                            return !$instance.has(-0);
                        });
                    if (!ACCEPT_ITERABLES) {
                        C = wrapper(function(target, iterable) {
                            anInstance(target, C, NAME);
                            var that = inheritIfRequired(new Base(), target, C);
                            if (iterable != undefined)
                                forOf(iterable, IS_MAP, that[ADDER], that);
                            return that;
                        });
                        C.prototype = proto;
                        proto.constructor = C;
                    }
                    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
                        fixMethod('delete');
                        fixMethod('has');
                        IS_MAP && fixMethod('get');
                    }
                    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
                    // weak collections should not contains .clear method
                    if (IS_WEAK && proto.clear) delete proto.clear;
                }

                setToStringTag(C, NAME);

                O[NAME] = C;
                $export($export.G + $export.W + $export.F * (C != Base), O);

                if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

                return C;
            };

            /***/
        },
        /* 101 */
        /***/ function(module, exports, __webpack_require__) {
            var ITERATOR = __webpack_require__(42)('iterator');
            var SAFE_CLOSING = false;

            try {
                var riter = [7][ITERATOR]();
                riter['return'] = function() {
                    SAFE_CLOSING = true;
                };
                // eslint-disable-next-line no-throw-literal
                Array.from(riter, function() {
                    throw 2;
                });
            } catch (e) {
                /* empty */
            }

            module.exports = function(exec, skipClosing) {
                if (!skipClosing && !SAFE_CLOSING) return false;
                var safe = false;
                try {
                    var arr = [7];
                    var iter = arr[ITERATOR]();
                    iter.next = function() {
                        return { done: (safe = true) };
                    };
                    arr[ITERATOR] = function() {
                        return iter;
                    };
                    exec(arr);
                } catch (e) {
                    /* empty */
                }
                return safe;
            };

            /***/
        },
        /* 102 */
        /***/ function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(52);
            var setPrototypeOf = __webpack_require__(103).set;
            module.exports = function(that, target, C) {
                var S = target.constructor;
                var P;
                if (
                    S !== C &&
                    typeof S == 'function' &&
                    (P = S.prototype) !== C.prototype &&
                    isObject(P) &&
                    setPrototypeOf
                ) {
                    setPrototypeOf(that, P);
                }
                return that;
            };

            /***/
        },
        /* 103 */
        /***/ function(module, exports, __webpack_require__) {
            // Works with __proto__ only. Old v8 can't work with null proto objects.
            /* eslint-disable no-proto */
            var isObject = __webpack_require__(52);
            var anObject = __webpack_require__(51);
            var check = function(O, proto) {
                anObject(O);
                if (!isObject(proto) && proto !== null)
                    throw TypeError(proto + ": can't set as prototype!");
            };
            module.exports = {
                set:
                    Object.setPrototypeOf ||
                    ('__proto__' in {} // eslint-disable-line
                        ? (function(test, buggy, set) {
                              try {
                                  set = __webpack_require__(66)(
                                      Function.call,
                                      __webpack_require__(104).f(
                                          Object.prototype,
                                          '__proto__'
                                      ).set,
                                      2
                                  );
                                  set(test, []);
                                  buggy = !(test instanceof Array);
                              } catch (e) {
                                  buggy = true;
                              }
                              return function setPrototypeOf(O, proto) {
                                  check(O, proto);
                                  if (buggy) O.__proto__ = proto;
                                  else set(O, proto);
                                  return O;
                              };
                          })({}, false)
                        : undefined),
                check: check
            };

            /***/
        },
        /* 104 */
        /***/ function(module, exports, __webpack_require__) {
            var pIE = __webpack_require__(105);
            var createDesc = __webpack_require__(58);
            var toIObject = __webpack_require__(74);
            var toPrimitive = __webpack_require__(57);
            var has = __webpack_require__(59);
            var IE8_DOM_DEFINE = __webpack_require__(53);
            var gOPD = Object.getOwnPropertyDescriptor;

            exports.f = __webpack_require__(54)
                ? gOPD
                : function getOwnPropertyDescriptor(O, P) {
                      O = toIObject(O);
                      P = toPrimitive(P, true);
                      if (IE8_DOM_DEFINE)
                          try {
                              return gOPD(O, P);
                          } catch (e) {
                              /* empty */
                          }
                      if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
                  };

            /***/
        },
        /* 105 */
        /***/ function(module, exports) {
            exports.f = {}.propertyIsEnumerable;

            /***/
        },
        /* 106 */
        /***/ function(module, exports, __webpack_require__) {
            // https://github.com/DavidBruant/Map-Set.prototype.toJSON
            var $export = __webpack_require__(65);

            $export($export.P + $export.R, 'Map', {
                toJSON: __webpack_require__(107)('Map')
            });

            /***/
        },
        /* 107 */
        /***/ function(module, exports, __webpack_require__) {
            // https://github.com/DavidBruant/Map-Set.prototype.toJSON
            var classof = __webpack_require__(40);
            var from = __webpack_require__(108);
            module.exports = function(NAME) {
                return function toJSON() {
                    if (classof(this) != NAME)
                        throw TypeError(NAME + "#toJSON isn't generic");
                    return from(this);
                };
            };

            /***/
        },
        /* 108 */
        /***/ function(module, exports, __webpack_require__) {
            var forOf = __webpack_require__(93);

            module.exports = function(iter, ITERATOR) {
                var result = [];
                forOf(iter, false, result.push, result, ITERATOR);
                return result;
            };

            /***/
        },
        /* 109 */
        /***/ function(module, exports, __webpack_require__) {
            // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
            __webpack_require__(110)('Map');

            /***/
        },
        /* 110 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            // https://tc39.github.io/proposal-setmap-offrom/
            var $export = __webpack_require__(65);

            module.exports = function(COLLECTION) {
                $export($export.S, COLLECTION, {
                    of: function of() {
                        var length = arguments.length;
                        var A = new Array(length);
                        while (length--) A[length] = arguments[length];
                        return new this(A);
                    }
                });
            };

            /***/
        },
        /* 111 */
        /***/ function(module, exports, __webpack_require__) {
            // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
            __webpack_require__(112)('Map');

            /***/
        },
        /* 112 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            // https://tc39.github.io/proposal-setmap-offrom/
            var $export = __webpack_require__(65);
            var aFunction = __webpack_require__(67);
            var ctx = __webpack_require__(66);
            var forOf = __webpack_require__(93);

            module.exports = function(COLLECTION) {
                $export($export.S, COLLECTION, {
                    from: function from(source /* , mapFn, thisArg */) {
                        var mapFn = arguments[1];
                        var mapping, A, n, cb;
                        aFunction(this);
                        mapping = mapFn !== undefined;
                        if (mapping) aFunction(mapFn);
                        if (source == undefined) return new this();
                        A = [];
                        if (mapping) {
                            n = 0;
                            cb = ctx(mapFn, arguments[2], 2);
                            forOf(source, false, function(nextItem) {
                                A.push(cb(nextItem, n++));
                            });
                        } else {
                            forOf(source, false, A.push, A);
                        }
                        return new this(A);
                    }
                });
            };

            /***/
        },
        /* 113 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(39);
            __webpack_require__(60);
            __webpack_require__(85);
            __webpack_require__(114);
            __webpack_require__(115);
            __webpack_require__(116);
            __webpack_require__(117);
            module.exports = __webpack_require__(44).Set;

            /***/
        },
        /* 114 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var strong = __webpack_require__(90);
            var validate = __webpack_require__(99);
            var SET = 'Set';

            // 23.2 Set Objects
            module.exports = __webpack_require__(100)(
                SET,
                function(get) {
                    return function Set() {
                        return get(
                            this,
                            arguments.length > 0 ? arguments[0] : undefined
                        );
                    };
                },
                {
                    // 23.2.3.1 Set.prototype.add(value)
                    add: function add(value) {
                        return strong.def(
                            validate(this, SET),
                            (value = value === 0 ? 0 : value),
                            value
                        );
                    }
                },
                strong
            );

            /***/
        },
        /* 115 */
        /***/ function(module, exports, __webpack_require__) {
            // https://github.com/DavidBruant/Map-Set.prototype.toJSON
            var $export = __webpack_require__(65);

            $export($export.P + $export.R, 'Set', {
                toJSON: __webpack_require__(107)('Set')
            });

            /***/
        },
        /* 116 */
        /***/ function(module, exports, __webpack_require__) {
            // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
            __webpack_require__(110)('Set');

            /***/
        },
        /* 117 */
        /***/ function(module, exports, __webpack_require__) {
            // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
            __webpack_require__(112)('Set');

            /***/
        },
        /* 118 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(39);
            __webpack_require__(85);
            __webpack_require__(119);
            __webpack_require__(127);
            __webpack_require__(128);
            module.exports = __webpack_require__(44).WeakMap;

            /***/
        },
        /* 119 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var each = __webpack_require__(120)(0);
            var redefine = __webpack_require__(48);
            var meta = __webpack_require__(98);
            var assign = __webpack_require__(124);
            var weak = __webpack_require__(126);
            var isObject = __webpack_require__(52);
            var fails = __webpack_require__(55);
            var validate = __webpack_require__(99);
            var WEAK_MAP = 'WeakMap';
            var getWeak = meta.getWeak;
            var isExtensible = Object.isExtensible;
            var uncaughtFrozenStore = weak.ufstore;
            var tmp = {};
            var InternalMap;

            var wrapper = function(get) {
                return function WeakMap() {
                    return get(
                        this,
                        arguments.length > 0 ? arguments[0] : undefined
                    );
                };
            };

            var methods = {
                // 23.3.3.3 WeakMap.prototype.get(key)
                get: function get(key) {
                    if (isObject(key)) {
                        var data = getWeak(key);
                        if (data === true)
                            return uncaughtFrozenStore(
                                validate(this, WEAK_MAP)
                            ).get(key);
                        return data ? data[this._i] : undefined;
                    }
                },
                // 23.3.3.5 WeakMap.prototype.set(key, value)
                set: function set(key, value) {
                    return weak.def(validate(this, WEAK_MAP), key, value);
                }
            };

            // 23.3 WeakMap Objects
            var $WeakMap = (module.exports = __webpack_require__(100)(
                WEAK_MAP,
                wrapper,
                methods,
                weak,
                true,
                true
            ));

            // IE11 WeakMap frozen keys fix
            if (
                fails(function() {
                    return (
                        new $WeakMap()
                            .set((Object.freeze || Object)(tmp), 7)
                            .get(tmp) != 7
                    );
                })
            ) {
                InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
                assign(InternalMap.prototype, methods);
                meta.NEED = true;
                each(['delete', 'has', 'get', 'set'], function(key) {
                    var proto = $WeakMap.prototype;
                    var method = proto[key];
                    redefine(proto, key, function(a, b) {
                        // store frozen objects on internal weakmap shim
                        if (isObject(a) && !isExtensible(a)) {
                            if (!this._f) this._f = new InternalMap();
                            var result = this._f[key](a, b);
                            return key == 'set' ? this : result;
                            // store all the rest on native weakmap
                        }
                        return method.call(this, a, b);
                    });
                });
            }

            /***/
        },
        /* 120 */
        /***/ function(module, exports, __webpack_require__) {
            // 0 -> Array#forEach
            // 1 -> Array#map
            // 2 -> Array#filter
            // 3 -> Array#some
            // 4 -> Array#every
            // 5 -> Array#find
            // 6 -> Array#findIndex
            var ctx = __webpack_require__(66);
            var IObject = __webpack_require__(75);
            var toObject = __webpack_require__(84);
            var toLength = __webpack_require__(77);
            var asc = __webpack_require__(121);
            module.exports = function(TYPE, $create) {
                var IS_MAP = TYPE == 1;
                var IS_FILTER = TYPE == 2;
                var IS_SOME = TYPE == 3;
                var IS_EVERY = TYPE == 4;
                var IS_FIND_INDEX = TYPE == 6;
                var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
                var create = $create || asc;
                return function($this, callbackfn, that) {
                    var O = toObject($this);
                    var self = IObject(O);
                    var f = ctx(callbackfn, that, 3);
                    var length = toLength(self.length);
                    var index = 0;
                    var result = IS_MAP
                        ? create($this, length)
                        : IS_FILTER
                        ? create($this, 0)
                        : undefined;
                    var val, res;
                    for (; length > index; index++)
                        if (NO_HOLES || index in self) {
                            val = self[index];
                            res = f(val, index, O);
                            if (TYPE) {
                                if (IS_MAP) result[index] = res;
                                // map
                                else if (res)
                                    switch (TYPE) {
                                        case 3:
                                            return true; // some
                                        case 5:
                                            return val; // find
                                        case 6:
                                            return index; // findIndex
                                        case 2:
                                            result.push(val); // filter
                                    }
                                else if (IS_EVERY) return false; // every
                            }
                        }
                    return IS_FIND_INDEX
                        ? -1
                        : IS_SOME || IS_EVERY
                        ? IS_EVERY
                        : result;
                };
            };

            /***/
        },
        /* 121 */
        /***/ function(module, exports, __webpack_require__) {
            // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
            var speciesConstructor = __webpack_require__(122);

            module.exports = function(original, length) {
                return new (speciesConstructor(original))(length);
            };

            /***/
        },
        /* 122 */
        /***/ function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(52);
            var isArray = __webpack_require__(123);
            var SPECIES = __webpack_require__(42)('species');

            module.exports = function(original) {
                var C;
                if (isArray(original)) {
                    C = original.constructor;
                    // cross-realm fallback
                    if (
                        typeof C == 'function' &&
                        (C === Array || isArray(C.prototype))
                    )
                        C = undefined;
                    if (isObject(C)) {
                        C = C[SPECIES];
                        if (C === null) C = undefined;
                    }
                }
                return C === undefined ? Array : C;
            };

            /***/
        },
        /* 123 */
        /***/ function(module, exports, __webpack_require__) {
            // 7.2.2 IsArray(argument)
            var cof = __webpack_require__(41);
            module.exports =
                Array.isArray ||
                function isArray(arg) {
                    return cof(arg) == 'Array';
                };

            /***/
        },
        /* 124 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            // 19.1.2.1 Object.assign(target, source, ...)
            var getKeys = __webpack_require__(72);
            var gOPS = __webpack_require__(125);
            var pIE = __webpack_require__(105);
            var toObject = __webpack_require__(84);
            var IObject = __webpack_require__(75);
            var $assign = Object.assign;

            // should work with symbols and should have deterministic property order (V8 bug)
            module.exports =
                !$assign ||
                __webpack_require__(55)(function() {
                    var A = {};
                    var B = {};
                    // eslint-disable-next-line no-undef
                    var S = Symbol();
                    var K = 'abcdefghijklmnopqrst';
                    A[S] = 7;
                    K.split('').forEach(function(k) {
                        B[k] = k;
                    });
                    return (
                        $assign({}, A)[S] != 7 ||
                        Object.keys($assign({}, B)).join('') != K
                    );
                })
                    ? function assign(target, source) {
                          // eslint-disable-line no-unused-vars
                          var T = toObject(target);
                          var aLen = arguments.length;
                          var index = 1;
                          var getSymbols = gOPS.f;
                          var isEnum = pIE.f;
                          while (aLen > index) {
                              var S = IObject(arguments[index++]);
                              var keys = getSymbols
                                  ? getKeys(S).concat(getSymbols(S))
                                  : getKeys(S);
                              var length = keys.length;
                              var j = 0;
                              var key;
                              while (length > j)
                                  if (isEnum.call(S, (key = keys[j++])))
                                      T[key] = S[key];
                          }
                          return T;
                      }
                    : $assign;

            /***/
        },
        /* 125 */
        /***/ function(module, exports) {
            exports.f = Object.getOwnPropertySymbols;

            /***/
        },
        /* 126 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var redefineAll = __webpack_require__(91);
            var getWeak = __webpack_require__(98).getWeak;
            var anObject = __webpack_require__(51);
            var isObject = __webpack_require__(52);
            var anInstance = __webpack_require__(92);
            var forOf = __webpack_require__(93);
            var createArrayMethod = __webpack_require__(120);
            var $has = __webpack_require__(59);
            var validate = __webpack_require__(99);
            var arrayFind = createArrayMethod(5);
            var arrayFindIndex = createArrayMethod(6);
            var id = 0;

            // fallback for uncaught frozen keys
            var uncaughtFrozenStore = function(that) {
                return that._l || (that._l = new UncaughtFrozenStore());
            };
            var UncaughtFrozenStore = function() {
                this.a = [];
            };
            var findUncaughtFrozen = function(store, key) {
                return arrayFind(store.a, function(it) {
                    return it[0] === key;
                });
            };
            UncaughtFrozenStore.prototype = {
                get: function(key) {
                    var entry = findUncaughtFrozen(this, key);
                    if (entry) return entry[1];
                },
                has: function(key) {
                    return !!findUncaughtFrozen(this, key);
                },
                set: function(key, value) {
                    var entry = findUncaughtFrozen(this, key);
                    if (entry) entry[1] = value;
                    else this.a.push([key, value]);
                },
                delete: function(key) {
                    var index = arrayFindIndex(this.a, function(it) {
                        return it[0] === key;
                    });
                    if (~index) this.a.splice(index, 1);
                    return !!~index;
                }
            };

            module.exports = {
                getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                    var C = wrapper(function(that, iterable) {
                        anInstance(that, C, NAME, '_i');
                        that._t = NAME; // collection type
                        that._i = id++; // collection id
                        that._l = undefined; // leak store for uncaught frozen objects
                        if (iterable != undefined)
                            forOf(iterable, IS_MAP, that[ADDER], that);
                    });
                    redefineAll(C.prototype, {
                        // 23.3.3.2 WeakMap.prototype.delete(key)
                        // 23.4.3.3 WeakSet.prototype.delete(value)
                        delete: function(key) {
                            if (!isObject(key)) return false;
                            var data = getWeak(key);
                            if (data === true)
                                return uncaughtFrozenStore(
                                    validate(this, NAME)
                                )['delete'](key);
                            return (
                                data &&
                                $has(data, this._i) &&
                                delete data[this._i]
                            );
                        },
                        // 23.3.3.4 WeakMap.prototype.has(key)
                        // 23.4.3.4 WeakSet.prototype.has(value)
                        has: function has(key) {
                            if (!isObject(key)) return false;
                            var data = getWeak(key);
                            if (data === true)
                                return uncaughtFrozenStore(
                                    validate(this, NAME)
                                ).has(key);
                            return data && $has(data, this._i);
                        }
                    });
                    return C;
                },
                def: function(that, key, value) {
                    var data = getWeak(anObject(key), true);
                    if (data === true)
                        uncaughtFrozenStore(that).set(key, value);
                    else data[that._i] = value;
                    return that;
                },
                ufstore: uncaughtFrozenStore
            };

            /***/
        },
        /* 127 */
        /***/ function(module, exports, __webpack_require__) {
            // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
            __webpack_require__(110)('WeakMap');

            /***/
        },
        /* 128 */
        /***/ function(module, exports, __webpack_require__) {
            // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
            __webpack_require__(112)('WeakMap');

            /***/
        },
        /* 129 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(60);
            __webpack_require__(130);
            module.exports = __webpack_require__(44).Array.from;

            /***/
        },
        /* 130 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var ctx = __webpack_require__(66);
            var $export = __webpack_require__(65);
            var toObject = __webpack_require__(84);
            var call = __webpack_require__(94);
            var isArrayIter = __webpack_require__(95);
            var toLength = __webpack_require__(77);
            var createProperty = __webpack_require__(131);
            var getIterFn = __webpack_require__(96);

            $export(
                $export.S +
                    $export.F *
                        !__webpack_require__(101)(function(iter) {
                            Array.from(iter);
                        }),
                'Array',
                {
                    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
                    from: function from(
                        arrayLike /* , mapfn = undefined, thisArg = undefined */
                    ) {
                        var O = toObject(arrayLike);
                        var C = typeof this == 'function' ? this : Array;
                        var aLen = arguments.length;
                        var mapfn = aLen > 1 ? arguments[1] : undefined;
                        var mapping = mapfn !== undefined;
                        var index = 0;
                        var iterFn = getIterFn(O);
                        var length, result, step, iterator;
                        if (mapping)
                            mapfn = ctx(
                                mapfn,
                                aLen > 2 ? arguments[2] : undefined,
                                2
                            );
                        // if object isn't iterable or it's array with default iterator - use simple case
                        if (
                            iterFn != undefined &&
                            !(C == Array && isArrayIter(iterFn))
                        ) {
                            for (
                                iterator = iterFn.call(O), result = new C();
                                !(step = iterator.next()).done;
                                index++
                            ) {
                                createProperty(
                                    result,
                                    index,
                                    mapping
                                        ? call(
                                              iterator,
                                              mapfn,
                                              [step.value, index],
                                              true
                                          )
                                        : step.value
                                );
                            }
                        } else {
                            length = toLength(O.length);
                            for (
                                result = new C(length);
                                length > index;
                                index++
                            ) {
                                createProperty(
                                    result,
                                    index,
                                    mapping ? mapfn(O[index], index) : O[index]
                                );
                            }
                        }
                        result.length = index;
                        return result;
                    }
                }
            );

            /***/
        },
        /* 131 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var $defineProperty = __webpack_require__(50);
            var createDesc = __webpack_require__(58);

            module.exports = function(object, index, value) {
                if (index in object)
                    $defineProperty.f(object, index, createDesc(0, value));
                else object[index] = value;
            };

            /***/
        },
        /* 132 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(133);
            module.exports = __webpack_require__(44).Object.assign;

            /***/
        },
        /* 133 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.3.1 Object.assign(target, source)
            var $export = __webpack_require__(65);

            $export($export.S + $export.F, 'Object', {
                assign: __webpack_require__(124)
            });

            /***/
        },
        /* 134 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'scrollbarMap',
                function() {
                    return scrollbarMap;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'Scrollbar',
                function() {
                    return Scrollbar;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                36
            );
            /* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                135
            );
            /* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                147
            );
            /* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                154
            );
            /* harmony import */ var _decorators___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                148
            );
            /* harmony import */ var _track___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                161
            );
            /* harmony import */ var _geometry___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                165
            );
            /* harmony import */ var _scrolling___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                169
            );
            /* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                173
            );
            /* harmony import */ var _events___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                174
            );

            // DO NOT use WeakMap here
            // .getAll() methods requires `scrollbarMap.values()`
            var scrollbarMap = new Map();
            var Scrollbar = /** @class */ (function() {
                function Scrollbar(containerEl, options) {
                    var _this = this;
                    /**
                     * Current scrolling offsets
                     */
                    this.offset = {
                        x: 0,
                        y: 0
                    };
                    /**
                     * Max-allowed scrolling offsets
                     */
                    this.limit = {
                        x: Infinity,
                        y: Infinity
                    };
                    /**
                     * Container bounding rect
                     */
                    this.bounding = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                    this._plugins = [];
                    this._momentum = { x: 0, y: 0 };
                    this._listeners = new Set();
                    this.containerEl = containerEl;
                    var contentEl = (this.contentEl = document.createElement(
                        'div'
                    ));
                    this.options = new _options__WEBPACK_IMPORTED_MODULE_2__[
                        'Options'
                    ](options);
                    // mark as a scroll element
                    containerEl.setAttribute('data-scrollbar', 'true');
                    // make container focusable
                    containerEl.setAttribute('tabindex', '1');
                    Object(_utils___WEBPACK_IMPORTED_MODULE_3__['setStyle'])(
                        containerEl,
                        {
                            overflow: 'hidden',
                            outline: 'none'
                        }
                    );
                    // enable touch event capturing in IE, see:
                    // https://github.com/idiotWu/smooth-scrollbar/issues/39
                    if (window.navigator.msPointerEnabled) {
                        containerEl.style.msTouchAction = 'none';
                    }
                    // mount content
                    contentEl.className = 'scroll-content';
                    Array.from(containerEl.childNodes).forEach(function(node) {
                        contentEl.appendChild(node);
                    });
                    containerEl.appendChild(contentEl);
                    // attach track
                    this.track = new _track___WEBPACK_IMPORTED_MODULE_5__[
                        'TrackController'
                    ](this);
                    // initial measuring
                    this.size = this.getSize();
                    // init plugins
                    this._plugins = Object(
                        _plugin__WEBPACK_IMPORTED_MODULE_8__['initPlugins']
                    )(this, this.options.plugins);
                    // preserve scroll offset
                    var scrollLeft = containerEl.scrollLeft,
                        scrollTop = containerEl.scrollTop;
                    containerEl.scrollLeft = containerEl.scrollTop = 0;
                    this.setPosition(scrollLeft, scrollTop, {
                        withoutCallbacks: true
                    });
                    var global = window;
                    var MutationObserver =
                        global.MutationObserver ||
                        global.WebKitMutationObserver ||
                        global.MozMutationObserver;
                    // observe
                    if (typeof MutationObserver === 'function') {
                        this._observer = new MutationObserver(function() {
                            _this.update();
                        });
                        this._observer.observe(contentEl, {
                            subtree: true,
                            childList: true
                        });
                    }
                    scrollbarMap.set(containerEl, this);
                    // wait for DOM ready
                    requestAnimationFrame(function() {
                        _this._init();
                    });
                }
                Object.defineProperty(Scrollbar.prototype, 'parent', {
                    /**
                     * Parent scrollbar
                     */
                    get: function() {
                        var elem = this.containerEl.parentElement;
                        while (elem) {
                            var parentScrollbar = scrollbarMap.get(elem);
                            if (parentScrollbar) {
                                return parentScrollbar;
                            }
                            elem = elem.parentElement;
                        }
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Scrollbar.prototype, 'scrollTop', {
                    /**
                     * Gets or sets `scrollbar.offset.y`
                     */
                    get: function() {
                        return this.offset.y;
                    },
                    set: function(y) {
                        this.setPosition(this.scrollLeft, y);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Scrollbar.prototype, 'scrollLeft', {
                    /**
                     * Gets or sets `scrollbar.offset.x`
                     */
                    get: function() {
                        return this.offset.x;
                    },
                    set: function(x) {
                        this.setPosition(x, this.scrollTop);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Returns the size of the scrollbar container element
                 * and the content wrapper element
                 */
                Scrollbar.prototype.getSize = function() {
                    return Object(
                        _geometry___WEBPACK_IMPORTED_MODULE_6__['getSize']
                    )(this);
                };
                /**
                 * Forces scrollbar to update geometry infomation.
                 *
                 * By default, scrollbars are automatically updated with `100ms` debounce (or `MutationObserver` fires).
                 * You can call this method to force an update when you modified contents
                 */
                Scrollbar.prototype.update = function() {
                    Object(_geometry___WEBPACK_IMPORTED_MODULE_6__['update'])(
                        this
                    );
                    this._plugins.forEach(function(plugin) {
                        plugin.onUpdate();
                    });
                };
                /**
                 * Checks if an element is visible in the current view area
                 */
                Scrollbar.prototype.isVisible = function(elem) {
                    return Object(
                        _geometry___WEBPACK_IMPORTED_MODULE_6__['isVisible']
                    )(this, elem);
                };
                /**
                 * Sets the scrollbar to the given offset without easing
                 */
                Scrollbar.prototype.setPosition = function(x, y, options) {
                    var _this = this;
                    if (x === void 0) {
                        x = this.offset.x;
                    }
                    if (y === void 0) {
                        y = this.offset.y;
                    }
                    if (options === void 0) {
                        options = {};
                    }
                    var status = Object(
                        _scrolling___WEBPACK_IMPORTED_MODULE_7__['setPosition']
                    )(this, x, y);
                    if (!status || options.withoutCallbacks) {
                        return;
                    }
                    this._listeners.forEach(function(fn) {
                        fn.call(_this, status);
                    });
                };
                /**
                 * Scrolls to given position with easing function
                 */
                Scrollbar.prototype.scrollTo = function(
                    x,
                    y,
                    duration,
                    options
                ) {
                    if (x === void 0) {
                        x = this.offset.x;
                    }
                    if (y === void 0) {
                        y = this.offset.y;
                    }
                    if (duration === void 0) {
                        duration = 0;
                    }
                    if (options === void 0) {
                        options = {};
                    }
                    Object(
                        _scrolling___WEBPACK_IMPORTED_MODULE_7__['scrollTo']
                    )(this, x, y, duration, options);
                };
                /**
                 * Scrolls the target element into visible area of scrollbar,
                 * likes the DOM method `element.scrollIntoView().
                 */
                Scrollbar.prototype.scrollIntoView = function(elem, options) {
                    if (options === void 0) {
                        options = {};
                    }
                    Object(
                        _scrolling___WEBPACK_IMPORTED_MODULE_7__[
                            'scrollIntoView'
                        ]
                    )(this, elem, options);
                };
                /**
                 * Adds scrolling listener
                 */
                Scrollbar.prototype.addListener = function(fn) {
                    if (typeof fn !== 'function') {
                        throw new TypeError(
                            '[smooth-scrollbar] scrolling listener should be a function'
                        );
                    }
                    this._listeners.add(fn);
                };
                /**
                 * Removes listener previously registered with `scrollbar.addListener()`
                 */
                Scrollbar.prototype.removeListener = function(fn) {
                    this._listeners.delete(fn);
                };
                /**
                 * Adds momentum and applys delta transformers.
                 */
                Scrollbar.prototype.addTransformableMomentum = function(
                    x,
                    y,
                    fromEvent,
                    callback
                ) {
                    this._updateDebounced();
                    var finalDelta = this._plugins.reduce(
                        function(delta, plugin) {
                            return (
                                plugin.transformDelta(delta, fromEvent) || delta
                            );
                        },
                        { x: x, y: y }
                    );
                    var willScroll = !this._shouldPropagateMomentum(
                        finalDelta.x,
                        finalDelta.y
                    );
                    if (willScroll) {
                        this.addMomentum(finalDelta.x, finalDelta.y);
                    }
                    if (callback) {
                        callback.call(this, willScroll);
                    }
                };
                /**
                 * Increases scrollbar's momentum
                 */
                Scrollbar.prototype.addMomentum = function(x, y) {
                    this.setMomentum(
                        this._momentum.x + x,
                        this._momentum.y + y
                    );
                };
                /**
                 * Sets scrollbar's momentum to given value
                 */
                Scrollbar.prototype.setMomentum = function(x, y) {
                    if (this.limit.x === 0) {
                        x = 0;
                    }
                    if (this.limit.y === 0) {
                        y = 0;
                    }
                    if (this.options.renderByPixels) {
                        x = Math.round(x);
                        y = Math.round(y);
                    }
                    this._momentum.x = x;
                    this._momentum.y = y;
                };
                /**
                 * Update options for specific plugin
                 *
                 * @param pluginName Name of the plugin
                 * @param [options] An object includes the properties that you want to update
                 */
                Scrollbar.prototype.updatePluginOptions = function(
                    pluginName,
                    options
                ) {
                    this._plugins.forEach(function(plugin) {
                        if (plugin.name === pluginName) {
                            Object.assign(plugin.options, options);
                        }
                    });
                };
                Scrollbar.prototype.destroy = function() {
                    var _a = this,
                        containerEl = _a.containerEl,
                        contentEl = _a.contentEl;
                    Object(
                        _utils___WEBPACK_IMPORTED_MODULE_3__['clearEventsOn']
                    )(this);
                    this._listeners.clear();
                    this.setMomentum(0, 0);
                    cancelAnimationFrame(this._renderID);
                    if (this._observer) {
                        this._observer.disconnect();
                    }
                    scrollbarMap.delete(this.containerEl);
                    // restore contents
                    var childNodes = Array.from(contentEl.childNodes);
                    while (containerEl.firstChild) {
                        containerEl.removeChild(containerEl.firstChild);
                    }
                    childNodes.forEach(function(el) {
                        containerEl.appendChild(el);
                    });
                    // reset scroll position
                    Object(_utils___WEBPACK_IMPORTED_MODULE_3__['setStyle'])(
                        containerEl,
                        {
                            overflow: ''
                        }
                    );
                    containerEl.scrollTop = this.scrollTop;
                    containerEl.scrollLeft = this.scrollLeft;
                    // invoke plugin.onDestory
                    this._plugins.forEach(function(plugin) {
                        plugin.onDestory();
                    });
                    this._plugins.length = 0;
                };
                Scrollbar.prototype._init = function() {
                    var _this = this;
                    this.update();
                    // init evet handlers
                    Object.keys(_events___WEBPACK_IMPORTED_MODULE_9__).forEach(
                        function(prop) {
                            _events___WEBPACK_IMPORTED_MODULE_9__[prop](_this);
                        }
                    );
                    // invoke `plugin.onInit`
                    this._plugins.forEach(function(plugin) {
                        plugin.onInit();
                    });
                    this._render();
                };
                Scrollbar.prototype._updateDebounced = function() {
                    this.update();
                };
                // check whether to propagate monmentum to parent scrollbar
                // the following situations are considered as `true`:
                //         1. continuous scrolling is enabled (automatically disabled when overscroll is enabled)
                //         2. scrollbar reaches one side and is not about to scroll on the other direction
                Scrollbar.prototype._shouldPropagateMomentum = function(
                    deltaX,
                    deltaY
                ) {
                    if (deltaX === void 0) {
                        deltaX = 0;
                    }
                    if (deltaY === void 0) {
                        deltaY = 0;
                    }
                    var _a = this,
                        options = _a.options,
                        offset = _a.offset,
                        limit = _a.limit;
                    if (!options.continuousScrolling) return false;
                    // force an update when scrollbar is "unscrollable", see #106
                    if (limit.x === 0 && limit.y === 0) {
                        this._updateDebounced();
                    }
                    var destX = Object(
                        lodash_es_clamp__WEBPACK_IMPORTED_MODULE_1__['default']
                    )(deltaX + offset.x, 0, limit.x);
                    var destY = Object(
                        lodash_es_clamp__WEBPACK_IMPORTED_MODULE_1__['default']
                    )(deltaY + offset.y, 0, limit.y);
                    var res = true;
                    // offsets are not about to change
                    // `&=` operator is not allowed for boolean types
                    res = res && destX === offset.x;
                    res = res && destY === offset.y;
                    // current offsets are on the edge
                    res =
                        res &&
                        (offset.x === limit.x ||
                            offset.x === 0 ||
                            offset.y === limit.y ||
                            offset.y === 0);
                    return res;
                };
                Scrollbar.prototype._render = function() {
                    var _momentum = this._momentum;
                    if (_momentum.x || _momentum.y) {
                        var nextX = this._nextTick('x');
                        var nextY = this._nextTick('y');
                        _momentum.x = nextX.momentum;
                        _momentum.y = nextY.momentum;
                        this.setPosition(nextX.position, nextY.position);
                    }
                    var remain = tslib__WEBPACK_IMPORTED_MODULE_0__['__assign'](
                        {},
                        this._momentum
                    );
                    this._plugins.forEach(function(plugin) {
                        plugin.onRender(remain);
                    });
                    this._renderID = requestAnimationFrame(
                        this._render.bind(this)
                    );
                };
                Scrollbar.prototype._nextTick = function(direction) {
                    var _a = this,
                        options = _a.options,
                        offset = _a.offset,
                        _momentum = _a._momentum;
                    var current = offset[direction];
                    var remain = _momentum[direction];
                    if (Math.abs(remain) <= 0.1) {
                        return {
                            momentum: 0,
                            position: current + remain
                        };
                    }
                    var nextMomentum = remain * (1 - options.damping);
                    if (options.renderByPixels) {
                        nextMomentum |= 0;
                    }
                    return {
                        momentum: nextMomentum,
                        position: current + remain - nextMomentum
                    };
                };
                tslib__WEBPACK_IMPORTED_MODULE_0__['__decorate'](
                    [
                        Object(
                            _decorators___WEBPACK_IMPORTED_MODULE_4__[
                                'debounce'
                            ]
                        )(100, { leading: true })
                    ],
                    Scrollbar.prototype,
                    '_updateDebounced',
                    null
                );
                return Scrollbar;
            })();

            //# sourceMappingURL=scrollbar.js.map

            /***/
        },
        /* 135 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _baseClamp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                136
            );
            /* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                137
            );

            /**
             * Clamps `number` within the inclusive `lower` and `upper` bounds.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Number
             * @param {number} number The number to clamp.
             * @param {number} [lower] The lower bound.
             * @param {number} upper The upper bound.
             * @returns {number} Returns the clamped number.
             * @example
             *
             * _.clamp(-10, -5, 5);
             * // => -5
             *
             * _.clamp(10, -5, 5);
             * // => 5
             */
            function clamp(number, lower, upper) {
                if (upper === undefined) {
                    upper = lower;
                    lower = undefined;
                }
                if (upper !== undefined) {
                    upper = Object(
                        _toNumber_js__WEBPACK_IMPORTED_MODULE_1__['default']
                    )(upper);
                    upper = upper === upper ? upper : 0;
                }
                if (lower !== undefined) {
                    lower = Object(
                        _toNumber_js__WEBPACK_IMPORTED_MODULE_1__['default']
                    )(lower);
                    lower = lower === lower ? lower : 0;
                }
                return Object(
                    _baseClamp_js__WEBPACK_IMPORTED_MODULE_0__['default']
                )(
                    Object(
                        _toNumber_js__WEBPACK_IMPORTED_MODULE_1__['default']
                    )(number),
                    lower,
                    upper
                );
            }

            /* harmony default export */ __webpack_exports__['default'] = clamp;

            /***/
        },
        /* 136 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /**
             * The base implementation of `_.clamp` which doesn't coerce arguments.
             *
             * @private
             * @param {number} number The number to clamp.
             * @param {number} [lower] The lower bound.
             * @param {number} upper The upper bound.
             * @returns {number} Returns the clamped number.
             */
            function baseClamp(number, lower, upper) {
                if (number === number) {
                    if (upper !== undefined) {
                        number = number <= upper ? number : upper;
                    }
                    if (lower !== undefined) {
                        number = number >= lower ? number : lower;
                    }
                }
                return number;
            }

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = baseClamp;

            /***/
        },
        /* 137 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                138
            );
            /* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                139
            );

            /** Used as references for various `Number` constants. */
            var NAN = 0 / 0;

            /** Used to match leading and trailing whitespace. */
            var reTrim = /^\s+|\s+$/g;

            /** Used to detect bad signed hexadecimal string values. */
            var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

            /** Used to detect binary string values. */
            var reIsBinary = /^0b[01]+$/i;

            /** Used to detect octal string values. */
            var reIsOctal = /^0o[0-7]+$/i;

            /** Built-in method references without a dependency on `root`. */
            var freeParseInt = parseInt;

            /**
             * Converts `value` to a number.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to process.
             * @returns {number} Returns the number.
             * @example
             *
             * _.toNumber(3.2);
             * // => 3.2
             *
             * _.toNumber(Number.MIN_VALUE);
             * // => 5e-324
             *
             * _.toNumber(Infinity);
             * // => Infinity
             *
             * _.toNumber('3.2');
             * // => 3.2
             */
            function toNumber(value) {
                if (typeof value == 'number') {
                    return value;
                }
                if (
                    Object(
                        _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__['default']
                    )(value)
                ) {
                    return NAN;
                }
                if (
                    Object(
                        _isObject_js__WEBPACK_IMPORTED_MODULE_0__['default']
                    )(value)
                ) {
                    var other =
                        typeof value.valueOf == 'function'
                            ? value.valueOf()
                            : value;
                    value = Object(
                        _isObject_js__WEBPACK_IMPORTED_MODULE_0__['default']
                    )(other)
                        ? other + ''
                        : other;
                }
                if (typeof value != 'string') {
                    return value === 0 ? value : +value;
                }
                value = value.replace(reTrim, '');
                var isBinary = reIsBinary.test(value);
                return isBinary || reIsOctal.test(value)
                    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
                    : reIsBadHex.test(value)
                    ? NAN
                    : +value;
            }

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = toNumber;

            /***/
        },
        /* 138 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /**
             * Checks if `value` is the
             * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
             * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an object, else `false`.
             * @example
             *
             * _.isObject({});
             * // => true
             *
             * _.isObject([1, 2, 3]);
             * // => true
             *
             * _.isObject(_.noop);
             * // => true
             *
             * _.isObject(null);
             * // => false
             */
            function isObject(value) {
                var type = typeof value;
                return (
                    value != null && (type == 'object' || type == 'function')
                );
            }

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = isObject;

            /***/
        },
        /* 139 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                140
            );
            /* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                146
            );

            /** `Object#toString` result references. */
            var symbolTag = '[object Symbol]';

            /**
             * Checks if `value` is classified as a `Symbol` primitive or object.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
             * @example
             *
             * _.isSymbol(Symbol.iterator);
             * // => true
             *
             * _.isSymbol('abc');
             * // => false
             */
            function isSymbol(value) {
                return (
                    typeof value == 'symbol' ||
                    (Object(
                        _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__['default']
                    )(value) &&
                        Object(
                            _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__[
                                'default'
                            ]
                        )(value) == symbolTag)
                );
            }

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = isSymbol;

            /***/
        },
        /* 140 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                141
            );
            /* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                144
            );
            /* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                145
            );

            /** `Object#toString` result references. */
            var nullTag = '[object Null]',
                undefinedTag = '[object Undefined]';

            /** Built-in value references. */
            var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__[
                'default'
            ]
                ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__['default'].toStringTag
                : undefined;

            /**
             * The base implementation of `getTag` without fallbacks for buggy environments.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the `toStringTag`.
             */
            function baseGetTag(value) {
                if (value == null) {
                    return value === undefined ? undefinedTag : nullTag;
                }
                return symToStringTag && symToStringTag in Object(value)
                    ? Object(
                          _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__['default']
                      )(value)
                    : Object(
                          _objectToString_js__WEBPACK_IMPORTED_MODULE_2__[
                              'default'
                          ]
                      )(value);
            }

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = baseGetTag;

            /***/
        },
        /* 141 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                142
            );

            /** Built-in value references. */
            var Symbol =
                _root_js__WEBPACK_IMPORTED_MODULE_0__['default'].Symbol;

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = Symbol;

            /***/
        },
        /* 142 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                143
            );

            /** Detect free variable `self`. */
            var freeSelf =
                typeof self == 'object' &&
                self &&
                self.Object === Object &&
                self;

            /** Used as a reference to the global object. */
            var root =
                _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__['default'] ||
                freeSelf ||
                Function('return this')();

            /* harmony default export */ __webpack_exports__['default'] = root;

            /***/
        },
        /* 143 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* WEBPACK VAR INJECTION */ (function(global) {
                /** Detect free variable `global` from Node.js. */
                var freeGlobal =
                    typeof global == 'object' &&
                    global &&
                    global.Object === Object &&
                    global;

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = freeGlobal;

                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(7)));

            /***/
        },
        /* 144 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                141
            );

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /**
             * Used to resolve the
             * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
             * of values.
             */
            var nativeObjectToString = objectProto.toString;

            /** Built-in value references. */
            var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__[
                'default'
            ]
                ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__['default'].toStringTag
                : undefined;

            /**
             * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
             *
             * @private
             * @param {*} value The value to query.
             * @returns {string} Returns the raw `toStringTag`.
             */
            function getRawTag(value) {
                var isOwn = hasOwnProperty.call(value, symToStringTag),
                    tag = value[symToStringTag];

                try {
                    value[symToStringTag] = undefined;
                    var unmasked = true;
                } catch (e) {}

                var result = nativeObjectToString.call(value);
                if (unmasked) {
                    if (isOwn) {
                        value[symToStringTag] = tag;
                    } else {
                        delete value[symToStringTag];
                    }
                }
                return result;
            }

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = getRawTag;

            /***/
        },
        /* 145 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /**
             * Used to resolve the
             * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
             * of values.
             */
            var nativeObjectToString = objectProto.toString;

            /**
             * Converts `value` to a string using `Object.prototype.toString`.
             *
             * @private
             * @param {*} value The value to convert.
             * @returns {string} Returns the converted string.
             */
            function objectToString(value) {
                return nativeObjectToString.call(value);
            }

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = objectToString;

            /***/
        },
        /* 146 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /**
             * Checks if `value` is object-like. A value is object-like if it's not `null`
             * and has a `typeof` result of "object".
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
             * @example
             *
             * _.isObjectLike({});
             * // => true
             *
             * _.isObjectLike([1, 2, 3]);
             * // => true
             *
             * _.isObjectLike(_.noop);
             * // => false
             *
             * _.isObjectLike(null);
             * // => false
             */
            function isObjectLike(value) {
                return value != null && typeof value == 'object';
            }

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = isObjectLike;

            /***/
        },
        /* 147 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'Options',
                function() {
                    return Options;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                36
            );
            /* harmony import */ var _decorators___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                148
            );

            var Options = /** @class */ (function() {
                function Options(config) {
                    if (config === void 0) {
                        config = {};
                    }
                    var _this = this;
                    /**
                     * Momentum reduction damping factor, a float value between `(0, 1)`.
                     * The lower the value is, the more smooth the scrolling will be
                     * (also the more paint frames).
                     */
                    this.damping = 0.1;
                    /**
                     * Minimal size for scrollbar thumbs.
                     */
                    this.thumbMinSize = 20;
                    /**
                     * Render every frame in integer pixel values
                     * set to `true` to improve scrolling performance.
                     */
                    this.renderByPixels = true;
                    /**
                     * Keep scrollbar tracks visible
                     */
                    this.alwaysShowTracks = false;
                    /**
                     * Set to `true` to allow outer scrollbars continue scrolling
                     * when current scrollbar reaches edge.
                     */
                    this.continuousScrolling = true;
                    /**
                     * Delegate wheel events and touch events to the given element.
                     * By default, the container element is used.
                     * This option will be useful for dealing with fixed elements.
                     */
                    this.delegateTo = null;
                    /**
                     * Options for plugins. Syntax:
                     *   plugins[pluginName] = pluginOptions: any
                     */
                    this.plugins = {};
                    Object.keys(config).forEach(function(prop) {
                        _this[prop] = config[prop];
                    });
                }
                Object.defineProperty(Options.prototype, 'wheelEventTarget', {
                    get: function() {
                        return this.delegateTo;
                    },
                    set: function(el) {
                        console.warn(
                            '[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.'
                        );
                        this.delegateTo = el;
                    },
                    enumerable: true,
                    configurable: true
                });
                tslib__WEBPACK_IMPORTED_MODULE_0__['__decorate'](
                    [
                        Object(
                            _decorators___WEBPACK_IMPORTED_MODULE_1__['range']
                        )(0, 1)
                    ],
                    Options.prototype,
                    'damping',
                    void 0
                );
                tslib__WEBPACK_IMPORTED_MODULE_0__['__decorate'](
                    [
                        Object(
                            _decorators___WEBPACK_IMPORTED_MODULE_1__['range']
                        )(0, Infinity)
                    ],
                    Options.prototype,
                    'thumbMinSize',
                    void 0
                );
                tslib__WEBPACK_IMPORTED_MODULE_0__['__decorate'](
                    [_decorators___WEBPACK_IMPORTED_MODULE_1__['boolean']],
                    Options.prototype,
                    'renderByPixels',
                    void 0
                );
                tslib__WEBPACK_IMPORTED_MODULE_0__['__decorate'](
                    [_decorators___WEBPACK_IMPORTED_MODULE_1__['boolean']],
                    Options.prototype,
                    'alwaysShowTracks',
                    void 0
                );
                tslib__WEBPACK_IMPORTED_MODULE_0__['__decorate'](
                    [_decorators___WEBPACK_IMPORTED_MODULE_1__['boolean']],
                    Options.prototype,
                    'continuousScrolling',
                    void 0
                );
                return Options;
            })();

            //# sourceMappingURL=options.js.map

            /***/
        },
        /* 148 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                149
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'range',
                function() {
                    return _range__WEBPACK_IMPORTED_MODULE_0__['range'];
                }
            );

            /* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                150
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'boolean',
                function() {
                    return _boolean__WEBPACK_IMPORTED_MODULE_1__['boolean'];
                }
            );

            /* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                151
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'debounce',
                function() {
                    return _debounce__WEBPACK_IMPORTED_MODULE_2__['debounce'];
                }
            );

            //# sourceMappingURL=index.js.map

            /***/
        },
        /* 149 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'range',
                function() {
                    return range;
                }
            );
            /* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                135
            );

            function range(min, max) {
                if (min === void 0) {
                    min = -Infinity;
                }
                if (max === void 0) {
                    max = Infinity;
                }
                return function(proto, key) {
                    var alias = '_' + key;
                    Object.defineProperty(proto, key, {
                        get: function() {
                            return this[alias];
                        },
                        set: function(val) {
                            Object.defineProperty(this, alias, {
                                value: Object(
                                    lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__[
                                        'default'
                                    ]
                                )(val, min, max),
                                enumerable: false,
                                writable: true,
                                configurable: true
                            });
                        },
                        enumerable: true,
                        configurable: true
                    });
                };
            }
            //# sourceMappingURL=range.js.map

            /***/
        },
        /* 150 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'boolean',
                function() {
                    return boolean;
                }
            );
            function boolean(proto, key) {
                var alias = '_' + key;
                Object.defineProperty(proto, key, {
                    get: function() {
                        return this[alias];
                    },
                    set: function(val) {
                        Object.defineProperty(this, alias, {
                            value: !!val,
                            enumerable: false,
                            writable: true,
                            configurable: true
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
            }
            //# sourceMappingURL=boolean.js.map

            /***/
        },
        /* 151 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'debounce',
                function() {
                    return debounce;
                }
            );
            /* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                152
            );

            function debounce() {
                var options = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    options[_i] = arguments[_i];
                }
                return function(_proto, key, descriptor) {
                    var fn = descriptor.value;
                    return {
                        get: function() {
                            if (!this.hasOwnProperty(key)) {
                                Object.defineProperty(this, key, {
                                    value: lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__[
                                        'default'
                                    ].apply(void 0, [fn].concat(options))
                                });
                            }
                            return this[key];
                        }
                    };
                };
            }
            //# sourceMappingURL=debounce.js.map

            /***/
        },
        /* 152 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                138
            );
            /* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                153
            );
            /* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                137
            );

            /** Error message constants. */
            var FUNC_ERROR_TEXT = 'Expected a function';

            /* Built-in method references for those with the same name as other `lodash` methods. */
            var nativeMax = Math.max,
                nativeMin = Math.min;

            /**
             * Creates a debounced function that delays invoking `func` until after `wait`
             * milliseconds have elapsed since the last time the debounced function was
             * invoked. The debounced function comes with a `cancel` method to cancel
             * delayed `func` invocations and a `flush` method to immediately invoke them.
             * Provide `options` to indicate whether `func` should be invoked on the
             * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
             * with the last arguments provided to the debounced function. Subsequent
             * calls to the debounced function return the result of the last `func`
             * invocation.
             *
             * **Note:** If `leading` and `trailing` options are `true`, `func` is
             * invoked on the trailing edge of the timeout only if the debounced function
             * is invoked more than once during the `wait` timeout.
             *
             * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
             * until to the next tick, similar to `setTimeout` with a timeout of `0`.
             *
             * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
             * for details over the differences between `_.debounce` and `_.throttle`.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Function
             * @param {Function} func The function to debounce.
             * @param {number} [wait=0] The number of milliseconds to delay.
             * @param {Object} [options={}] The options object.
             * @param {boolean} [options.leading=false]
             *  Specify invoking on the leading edge of the timeout.
             * @param {number} [options.maxWait]
             *  The maximum time `func` is allowed to be delayed before it's invoked.
             * @param {boolean} [options.trailing=true]
             *  Specify invoking on the trailing edge of the timeout.
             * @returns {Function} Returns the new debounced function.
             * @example
             *
             * // Avoid costly calculations while the window size is in flux.
             * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
             *
             * // Invoke `sendMail` when clicked, debouncing subsequent calls.
             * jQuery(element).on('click', _.debounce(sendMail, 300, {
             *   'leading': true,
             *   'trailing': false
             * }));
             *
             * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
             * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
             * var source = new EventSource('/stream');
             * jQuery(source).on('message', debounced);
             *
             * // Cancel the trailing debounced invocation.
             * jQuery(window).on('popstate', debounced.cancel);
             */
            function debounce(func, wait, options) {
                var lastArgs,
                    lastThis,
                    maxWait,
                    result,
                    timerId,
                    lastCallTime,
                    lastInvokeTime = 0,
                    leading = false,
                    maxing = false,
                    trailing = true;

                if (typeof func != 'function') {
                    throw new TypeError(FUNC_ERROR_TEXT);
                }
                wait =
                    Object(
                        _toNumber_js__WEBPACK_IMPORTED_MODULE_2__['default']
                    )(wait) || 0;
                if (
                    Object(
                        _isObject_js__WEBPACK_IMPORTED_MODULE_0__['default']
                    )(options)
                ) {
                    leading = !!options.leading;
                    maxing = 'maxWait' in options;
                    maxWait = maxing
                        ? nativeMax(
                              Object(
                                  _toNumber_js__WEBPACK_IMPORTED_MODULE_2__[
                                      'default'
                                  ]
                              )(options.maxWait) || 0,
                              wait
                          )
                        : maxWait;
                    trailing =
                        'trailing' in options ? !!options.trailing : trailing;
                }

                function invokeFunc(time) {
                    var args = lastArgs,
                        thisArg = lastThis;

                    lastArgs = lastThis = undefined;
                    lastInvokeTime = time;
                    result = func.apply(thisArg, args);
                    return result;
                }

                function leadingEdge(time) {
                    // Reset any `maxWait` timer.
                    lastInvokeTime = time;
                    // Start the timer for the trailing edge.
                    timerId = setTimeout(timerExpired, wait);
                    // Invoke the leading edge.
                    return leading ? invokeFunc(time) : result;
                }

                function remainingWait(time) {
                    var timeSinceLastCall = time - lastCallTime,
                        timeSinceLastInvoke = time - lastInvokeTime,
                        timeWaiting = wait - timeSinceLastCall;

                    return maxing
                        ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
                        : timeWaiting;
                }

                function shouldInvoke(time) {
                    var timeSinceLastCall = time - lastCallTime,
                        timeSinceLastInvoke = time - lastInvokeTime;

                    // Either this is the first call, activity has stopped and we're at the
                    // trailing edge, the system time has gone backwards and we're treating
                    // it as the trailing edge, or we've hit the `maxWait` limit.
                    return (
                        lastCallTime === undefined ||
                        timeSinceLastCall >= wait ||
                        timeSinceLastCall < 0 ||
                        (maxing && timeSinceLastInvoke >= maxWait)
                    );
                }

                function timerExpired() {
                    var time = Object(
                        _now_js__WEBPACK_IMPORTED_MODULE_1__['default']
                    )();
                    if (shouldInvoke(time)) {
                        return trailingEdge(time);
                    }
                    // Restart the timer.
                    timerId = setTimeout(timerExpired, remainingWait(time));
                }

                function trailingEdge(time) {
                    timerId = undefined;

                    // Only invoke if we have `lastArgs` which means `func` has been
                    // debounced at least once.
                    if (trailing && lastArgs) {
                        return invokeFunc(time);
                    }
                    lastArgs = lastThis = undefined;
                    return result;
                }

                function cancel() {
                    if (timerId !== undefined) {
                        clearTimeout(timerId);
                    }
                    lastInvokeTime = 0;
                    lastArgs = lastCallTime = lastThis = timerId = undefined;
                }

                function flush() {
                    return timerId === undefined
                        ? result
                        : trailingEdge(
                              Object(
                                  _now_js__WEBPACK_IMPORTED_MODULE_1__[
                                      'default'
                                  ]
                              )()
                          );
                }

                function debounced() {
                    var time = Object(
                            _now_js__WEBPACK_IMPORTED_MODULE_1__['default']
                        )(),
                        isInvoking = shouldInvoke(time);

                    lastArgs = arguments;
                    lastThis = this;
                    lastCallTime = time;

                    if (isInvoking) {
                        if (timerId === undefined) {
                            return leadingEdge(lastCallTime);
                        }
                        if (maxing) {
                            // Handle invocations in a tight loop.
                            timerId = setTimeout(timerExpired, wait);
                            return invokeFunc(lastCallTime);
                        }
                    }
                    if (timerId === undefined) {
                        timerId = setTimeout(timerExpired, wait);
                    }
                    return result;
                }
                debounced.cancel = cancel;
                debounced.flush = flush;
                return debounced;
            }

            /* harmony default export */ __webpack_exports__[
                'default'
            ] = debounce;

            /***/
        },
        /* 153 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                142
            );

            /**
             * Gets the timestamp of the number of milliseconds that have elapsed since
             * the Unix epoch (1 January 1970 00:00:00 UTC).
             *
             * @static
             * @memberOf _
             * @since 2.4.0
             * @category Date
             * @returns {number} Returns the timestamp.
             * @example
             *
             * _.defer(function(stamp) {
             *   console.log(_.now() - stamp);
             * }, _.now());
             * // => Logs the number of milliseconds it took for the deferred invocation.
             */
            var now = function() {
                return _root_js__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                ].Date.now();
            };

            /* harmony default export */ __webpack_exports__['default'] = now;

            /***/
        },
        /* 154 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _event_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                155
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'eventScope',
                function() {
                    return _event_hub__WEBPACK_IMPORTED_MODULE_0__[
                        'eventScope'
                    ];
                }
            );

            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'clearEventsOn',
                function() {
                    return _event_hub__WEBPACK_IMPORTED_MODULE_0__[
                        'clearEventsOn'
                    ];
                }
            );

            /* harmony import */ var _get_pointer_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                156
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'getPointerData',
                function() {
                    return _get_pointer_data__WEBPACK_IMPORTED_MODULE_1__[
                        'getPointerData'
                    ];
                }
            );

            /* harmony import */ var _get_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                157
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'getPosition',
                function() {
                    return _get_position__WEBPACK_IMPORTED_MODULE_2__[
                        'getPosition'
                    ];
                }
            );

            /* harmony import */ var _is_one_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                158
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'isOneOf',
                function() {
                    return _is_one_of__WEBPACK_IMPORTED_MODULE_3__['isOneOf'];
                }
            );

            /* harmony import */ var _set_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                159
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'setStyle',
                function() {
                    return _set_style__WEBPACK_IMPORTED_MODULE_4__['setStyle'];
                }
            );

            /* harmony import */ var _touch_record__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                160
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'Tracker',
                function() {
                    return _touch_record__WEBPACK_IMPORTED_MODULE_5__[
                        'Tracker'
                    ];
                }
            );

            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'TouchRecord',
                function() {
                    return _touch_record__WEBPACK_IMPORTED_MODULE_5__[
                        'TouchRecord'
                    ];
                }
            );

            //# sourceMappingURL=index.js.map

            /***/
        },
        /* 155 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'eventScope',
                function() {
                    return eventScope;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'clearEventsOn',
                function() {
                    return clearEventsOn;
                }
            );
            var eventListenerOptions;
            var eventMap = new WeakMap();
            function getOptions() {
                if (eventListenerOptions !== undefined) {
                    return eventListenerOptions;
                }
                var supportPassiveEvent = false;
                try {
                    var noop = function() {};
                    var options = Object.defineProperty({}, 'passive', {
                        get: function() {
                            supportPassiveEvent = true;
                        }
                    });
                    window.addEventListener('testPassive', noop, options);
                    window.removeEventListener('testPassive', noop, options);
                } catch (e) {}
                eventListenerOptions = supportPassiveEvent
                    ? { passive: false }
                    : false;
                return eventListenerOptions;
            }
            function eventScope(scrollbar) {
                var configs = eventMap.get(scrollbar) || [];
                eventMap.set(scrollbar, configs);
                return function addEvent(elem, events, fn) {
                    function handler(event) {
                        // ignore default prevented events
                        if (event.defaultPrevented) {
                            return;
                        }
                        fn(event);
                    }
                    events.split(/\s+/g).forEach(function(eventName) {
                        configs.push({
                            elem: elem,
                            eventName: eventName,
                            handler: handler
                        });
                        elem.addEventListener(eventName, handler, getOptions());
                    });
                };
            }
            function clearEventsOn(scrollbar) {
                var configs = eventMap.get(scrollbar);
                if (!configs) {
                    return;
                }
                configs.forEach(function(_a) {
                    var elem = _a.elem,
                        eventName = _a.eventName,
                        handler = _a.handler;
                    elem.removeEventListener(eventName, handler, getOptions());
                });
                eventMap.delete(scrollbar);
            }
            //# sourceMappingURL=event-hub.js.map

            /***/
        },
        /* 156 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'getPointerData',
                function() {
                    return getPointerData;
                }
            );
            /**
             * Get pointer/touch data
             */
            function getPointerData(evt) {
                // if is touch event, return last item in touchList
                // else return original event
                return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
            }
            //# sourceMappingURL=get-pointer-data.js.map

            /***/
        },
        /* 157 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'getPosition',
                function() {
                    return getPosition;
                }
            );
            /* harmony import */ var _get_pointer_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                156
            );

            /**
             * Get pointer/finger position
             */
            function getPosition(evt) {
                var data = Object(
                    _get_pointer_data__WEBPACK_IMPORTED_MODULE_0__[
                        'getPointerData'
                    ]
                )(evt);
                return {
                    x: data.clientX,
                    y: data.clientY
                };
            }
            //# sourceMappingURL=get-position.js.map

            /***/
        },
        /* 158 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'isOneOf',
                function() {
                    return isOneOf;
                }
            );
            /**
             * Check if `a` is one of `[...b]`
             */
            function isOneOf(a, b) {
                if (b === void 0) {
                    b = [];
                }
                return b.some(function(v) {
                    return a === v;
                });
            }
            //# sourceMappingURL=is-one-of.js.map

            /***/
        },
        /* 159 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'setStyle',
                function() {
                    return setStyle;
                }
            );
            var VENDOR_PREFIX = ['webkit', 'moz', 'ms', 'o'];
            var RE = new RegExp('^-(?!(?:' + VENDOR_PREFIX.join('|') + ')-)');
            function autoPrefix(styles) {
                var res = {};
                Object.keys(styles).forEach(function(prop) {
                    if (!RE.test(prop)) {
                        res[prop] = styles[prop];
                        return;
                    }
                    var val = styles[prop];
                    prop = prop.replace(/^-/, '');
                    res[prop] = val;
                    VENDOR_PREFIX.forEach(function(prefix) {
                        res['-' + prefix + '-' + prop] = val;
                    });
                });
                return res;
            }
            function setStyle(elem, styles) {
                styles = autoPrefix(styles);
                Object.keys(styles).forEach(function(prop) {
                    var cssProp = prop
                        .replace(/^-/, '')
                        .replace(/-([a-z])/g, function(_, $1) {
                            return $1.toUpperCase();
                        });
                    elem.style[cssProp] = styles[prop];
                });
            }
            //# sourceMappingURL=set-style.js.map

            /***/
        },
        /* 160 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'Tracker',
                function() {
                    return Tracker;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'TouchRecord',
                function() {
                    return TouchRecord;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                36
            );
            /* harmony import */ var _get_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                157
            );

            var Tracker = /** @class */ (function() {
                function Tracker(touch) {
                    this.updateTime = Date.now();
                    this.delta = { x: 0, y: 0 };
                    this.velocity = { x: 0, y: 0 };
                    this.lastPosition = { x: 0, y: 0 };
                    this.lastPosition = Object(
                        _get_position__WEBPACK_IMPORTED_MODULE_1__[
                            'getPosition'
                        ]
                    )(touch);
                }
                Tracker.prototype.update = function(touch) {
                    var _a = this,
                        velocity = _a.velocity,
                        updateTime = _a.updateTime,
                        lastPosition = _a.lastPosition;
                    var now = Date.now();
                    var position = Object(
                        _get_position__WEBPACK_IMPORTED_MODULE_1__[
                            'getPosition'
                        ]
                    )(touch);
                    var delta = {
                        x: -(position.x - lastPosition.x),
                        y: -(position.y - lastPosition.y)
                    };
                    var duration = now - updateTime || 16;
                    var vx = (delta.x / duration) * 16;
                    var vy = (delta.y / duration) * 16;
                    velocity.x = vx * 0.9 + velocity.x * 0.1;
                    velocity.y = vy * 0.9 + velocity.y * 0.1;
                    this.delta = delta;
                    this.updateTime = now;
                    this.lastPosition = position;
                };
                return Tracker;
            })();

            var TouchRecord = /** @class */ (function() {
                function TouchRecord() {
                    this._touchList = {};
                }
                Object.defineProperty(
                    TouchRecord.prototype,
                    '_primitiveValue',
                    {
                        get: function() {
                            return { x: 0, y: 0 };
                        },
                        enumerable: true,
                        configurable: true
                    }
                );
                TouchRecord.prototype.isActive = function() {
                    return this._activeTouchID !== undefined;
                };
                TouchRecord.prototype.getDelta = function() {
                    var tracker = this._getActiveTracker();
                    if (!tracker) {
                        return this._primitiveValue;
                    }
                    return tslib__WEBPACK_IMPORTED_MODULE_0__['__assign'](
                        {},
                        tracker.delta
                    );
                };
                TouchRecord.prototype.getVelocity = function() {
                    var tracker = this._getActiveTracker();
                    if (!tracker) {
                        return this._primitiveValue;
                    }
                    return tslib__WEBPACK_IMPORTED_MODULE_0__['__assign'](
                        {},
                        tracker.velocity
                    );
                };
                TouchRecord.prototype.track = function(evt) {
                    var _this = this;
                    var targetTouches = evt.targetTouches;
                    Array.from(targetTouches).forEach(function(touch) {
                        _this._add(touch);
                    });
                    return this._touchList;
                };
                TouchRecord.prototype.update = function(evt) {
                    var _this = this;
                    var touches = evt.touches,
                        changedTouches = evt.changedTouches;
                    Array.from(touches).forEach(function(touch) {
                        _this._renew(touch);
                    });
                    this._setActiveID(changedTouches);
                    return this._touchList;
                };
                TouchRecord.prototype.release = function(evt) {
                    var _this = this;
                    delete this._activeTouchID;
                    Array.from(evt.changedTouches).forEach(function(touch) {
                        _this._delete(touch);
                    });
                };
                TouchRecord.prototype._add = function(touch) {
                    if (this._has(touch)) {
                        return;
                    }
                    var tracker = new Tracker(touch);
                    this._touchList[touch.identifier] = tracker;
                };
                TouchRecord.prototype._renew = function(touch) {
                    if (!this._has(touch)) {
                        return;
                    }
                    var tracker = this._touchList[touch.identifier];
                    tracker.update(touch);
                };
                TouchRecord.prototype._delete = function(touch) {
                    delete this._touchList[touch.identifier];
                };
                TouchRecord.prototype._has = function(touch) {
                    return this._touchList.hasOwnProperty(touch.identifier);
                };
                TouchRecord.prototype._setActiveID = function(touches) {
                    this._activeTouchID =
                        touches[touches.length - 1].identifier;
                    this._lastTouch = this._touchList[this._activeTouchID];
                };
                TouchRecord.prototype._getActiveTracker = function() {
                    var _a = this,
                        _touchList = _a._touchList,
                        _activeTouchID = _a._activeTouchID;
                    return _touchList[_activeTouchID];
                };
                return TouchRecord;
            })();

            //# sourceMappingURL=touch-record.js.map

            /***/
        },
        /* 161 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'TrackController',
                function() {
                    return TrackController;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                36
            );
            /* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                162
            );
            /* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                164
            );
            /* harmony import */ var _decorators___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                148
            );

            var TrackController = /** @class */ (function() {
                function TrackController(_scrollbar) {
                    this._scrollbar = _scrollbar;
                    var thumbMinSize = _scrollbar.options.thumbMinSize;
                    this.xAxis = new _track__WEBPACK_IMPORTED_MODULE_1__[
                        'ScrollbarTrack'
                    ](
                        _direction__WEBPACK_IMPORTED_MODULE_2__[
                            'TrackDirection'
                        ].X,
                        thumbMinSize
                    );
                    this.yAxis = new _track__WEBPACK_IMPORTED_MODULE_1__[
                        'ScrollbarTrack'
                    ](
                        _direction__WEBPACK_IMPORTED_MODULE_2__[
                            'TrackDirection'
                        ].Y,
                        thumbMinSize
                    );
                    this.xAxis.attachTo(_scrollbar.containerEl);
                    this.yAxis.attachTo(_scrollbar.containerEl);
                    if (_scrollbar.options.alwaysShowTracks) {
                        this.xAxis.show();
                        this.yAxis.show();
                    }
                }
                /**
                 * Updates track appearance
                 */
                TrackController.prototype.update = function() {
                    var _a = this._scrollbar,
                        size = _a.size,
                        offset = _a.offset;
                    this.xAxis.update(
                        offset.x,
                        size.container.width,
                        size.content.width
                    );
                    this.yAxis.update(
                        offset.y,
                        size.container.height,
                        size.content.height
                    );
                };
                /**
                 * Automatically hide tracks when scrollbar is in idle state
                 */
                TrackController.prototype.autoHideOnIdle = function() {
                    if (this._scrollbar.options.alwaysShowTracks) {
                        return;
                    }
                    this.xAxis.hide();
                    this.yAxis.hide();
                };
                tslib__WEBPACK_IMPORTED_MODULE_0__['__decorate'](
                    [
                        Object(
                            _decorators___WEBPACK_IMPORTED_MODULE_3__[
                                'debounce'
                            ]
                        )(300)
                    ],
                    TrackController.prototype,
                    'autoHideOnIdle',
                    null
                );
                return TrackController;
            })();

            //# sourceMappingURL=index.js.map

            /***/
        },
        /* 162 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'ScrollbarTrack',
                function() {
                    return ScrollbarTrack;
                }
            );
            /* harmony import */ var _thumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                163
            );
            /* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                154
            );

            var ScrollbarTrack = /** @class */ (function() {
                function ScrollbarTrack(direction, thumbMinSize) {
                    if (thumbMinSize === void 0) {
                        thumbMinSize = 0;
                    }
                    /**
                     * Track element
                     */
                    this.element = document.createElement('div');
                    this._isShown = false;
                    this.element.className =
                        'scrollbar-track scrollbar-track-' + direction;
                    this.thumb = new _thumb__WEBPACK_IMPORTED_MODULE_0__[
                        'ScrollbarThumb'
                    ](direction, thumbMinSize);
                    this.thumb.attachTo(this.element);
                }
                /**
                 * Attach to scrollbar container element
                 *
                 * @param scrollbarContainer Scrollbar container element
                 */
                ScrollbarTrack.prototype.attachTo = function(
                    scrollbarContainer
                ) {
                    scrollbarContainer.appendChild(this.element);
                };
                /**
                 * Show track immediately
                 */
                ScrollbarTrack.prototype.show = function() {
                    if (this._isShown) {
                        return;
                    }
                    this._isShown = true;
                    this.element.classList.add('show');
                };
                /**
                 * Hide track immediately
                 */
                ScrollbarTrack.prototype.hide = function() {
                    if (!this._isShown) {
                        return;
                    }
                    this._isShown = false;
                    this.element.classList.remove('show');
                };
                ScrollbarTrack.prototype.update = function(
                    scrollOffset,
                    containerSize,
                    pageSize
                ) {
                    Object(_utils___WEBPACK_IMPORTED_MODULE_1__['setStyle'])(
                        this.element,
                        {
                            display:
                                pageSize <= containerSize ? 'none' : 'block'
                        }
                    );
                    this.thumb.update(scrollOffset, containerSize, pageSize);
                };
                return ScrollbarTrack;
            })();

            //# sourceMappingURL=track.js.map

            /***/
        },
        /* 163 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'ScrollbarThumb',
                function() {
                    return ScrollbarThumb;
                }
            );
            /* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                164
            );
            /* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                154
            );

            var ScrollbarThumb = /** @class */ (function() {
                function ScrollbarThumb(_direction, _minSize) {
                    if (_minSize === void 0) {
                        _minSize = 0;
                    }
                    this._direction = _direction;
                    this._minSize = _minSize;
                    /**
                     * Thumb element
                     */
                    this.element = document.createElement('div');
                    /**
                     * Display size of the thumb
                     * will always be greater than `scrollbar.options.thumbMinSize`
                     */
                    this.displaySize = 0;
                    /**
                     * Actual size of the thumb
                     */
                    this.realSize = 0;
                    /**
                     * Thumb offset to the top
                     */
                    this.offset = 0;
                    this.element.className =
                        'scrollbar-thumb scrollbar-thumb-' + _direction;
                }
                /**
                 * Attach to track element
                 *
                 * @param trackEl Track element
                 */
                ScrollbarThumb.prototype.attachTo = function(trackEl) {
                    trackEl.appendChild(this.element);
                };
                ScrollbarThumb.prototype.update = function(
                    scrollOffset,
                    containerSize,
                    pageSize
                ) {
                    // calculate thumb size
                    // pageSize > containerSize -> scrollable
                    this.realSize =
                        Math.min(containerSize / pageSize, 1) * containerSize;
                    this.displaySize = Math.max(this.realSize, this._minSize);
                    // calculate thumb offset
                    this.offset =
                        (scrollOffset / pageSize) *
                        (containerSize + (this.realSize - this.displaySize));
                    Object(_utils___WEBPACK_IMPORTED_MODULE_1__['setStyle'])(
                        this.element,
                        this._getStyle()
                    );
                };
                ScrollbarThumb.prototype._getStyle = function() {
                    switch (this._direction) {
                        case _direction__WEBPACK_IMPORTED_MODULE_0__[
                            'TrackDirection'
                        ].X:
                            return {
                                width: this.displaySize + 'px',
                                '-transform':
                                    'translate3d(' + this.offset + 'px, 0, 0)'
                            };
                        case _direction__WEBPACK_IMPORTED_MODULE_0__[
                            'TrackDirection'
                        ].Y:
                            return {
                                height: this.displaySize + 'px',
                                '-transform':
                                    'translate3d(0, ' + this.offset + 'px, 0)'
                            };
                        default:
                            return null;
                    }
                };
                return ScrollbarThumb;
            })();

            //# sourceMappingURL=thumb.js.map

            /***/
        },
        /* 164 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'TrackDirection',
                function() {
                    return TrackDirection;
                }
            );
            var TrackDirection;
            (function(TrackDirection) {
                TrackDirection['X'] = 'x';
                TrackDirection['Y'] = 'y';
            })(TrackDirection || (TrackDirection = {}));
            //# sourceMappingURL=direction.js.map

            /***/
        },
        /* 165 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _get_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                166
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'getSize',
                function() {
                    return _get_size__WEBPACK_IMPORTED_MODULE_0__['getSize'];
                }
            );

            /* harmony import */ var _is_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                167
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'isVisible',
                function() {
                    return _is_visible__WEBPACK_IMPORTED_MODULE_1__[
                        'isVisible'
                    ];
                }
            );

            /* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                168
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'update',
                function() {
                    return _update__WEBPACK_IMPORTED_MODULE_2__['update'];
                }
            );

            //# sourceMappingURL=index.js.map

            /***/
        },
        /* 166 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'getSize',
                function() {
                    return getSize;
                }
            );
            function getSize(scrollbar) {
                var containerEl = scrollbar.containerEl,
                    contentEl = scrollbar.contentEl;
                return {
                    container: {
                        // requires `overflow: hidden`
                        width: containerEl.clientWidth,
                        height: containerEl.clientHeight
                    },
                    content: {
                        // border width should be included
                        width:
                            contentEl.offsetWidth -
                            contentEl.clientWidth +
                            contentEl.scrollWidth,
                        height:
                            contentEl.offsetHeight -
                            contentEl.clientHeight +
                            contentEl.scrollHeight
                    }
                };
            }
            //# sourceMappingURL=get-size.js.map

            /***/
        },
        /* 167 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'isVisible',
                function() {
                    return isVisible;
                }
            );
            function isVisible(scrollbar, elem) {
                var bounding = scrollbar.bounding;
                var targetBounding = elem.getBoundingClientRect();
                // check overlapping
                var top = Math.max(bounding.top, targetBounding.top);
                var left = Math.max(bounding.left, targetBounding.left);
                var right = Math.min(bounding.right, targetBounding.right);
                var bottom = Math.min(bounding.bottom, targetBounding.bottom);
                return top < bottom && left < right;
            }
            //# sourceMappingURL=is-visible.js.map

            /***/
        },
        /* 168 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'update',
                function() {
                    return update;
                }
            );
            function update(scrollbar) {
                var newSize = scrollbar.getSize();
                var limit = {
                    x: Math.max(
                        newSize.content.width - newSize.container.width,
                        0
                    ),
                    y: Math.max(
                        newSize.content.height - newSize.container.height,
                        0
                    )
                };
                // metrics
                var containerBounding = scrollbar.containerEl.getBoundingClientRect();
                var bounding = {
                    top: Math.max(containerBounding.top, 0),
                    right: Math.min(containerBounding.right, window.innerWidth),
                    bottom: Math.min(
                        containerBounding.bottom,
                        window.innerHeight
                    ),
                    left: Math.max(containerBounding.left, 0)
                };
                // assign props
                scrollbar.size = newSize;
                scrollbar.limit = limit;
                scrollbar.bounding = bounding;
                // update tracks
                scrollbar.track.update();
                // re-positioning
                scrollbar.setPosition();
            }
            //# sourceMappingURL=update.js.map

            /***/
        },
        /* 169 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _set_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                170
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'setPosition',
                function() {
                    return _set_position__WEBPACK_IMPORTED_MODULE_0__[
                        'setPosition'
                    ];
                }
            );

            /* harmony import */ var _scroll_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                171
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'scrollTo',
                function() {
                    return _scroll_to__WEBPACK_IMPORTED_MODULE_1__['scrollTo'];
                }
            );

            /* harmony import */ var _scroll_into_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                172
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'scrollIntoView',
                function() {
                    return _scroll_into_view__WEBPACK_IMPORTED_MODULE_2__[
                        'scrollIntoView'
                    ];
                }
            );

            //# sourceMappingURL=index.js.map

            /***/
        },
        /* 170 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'setPosition',
                function() {
                    return setPosition;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                36
            );
            /* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                135
            );
            /* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                154
            );

            function setPosition(scrollbar, x, y) {
                var options = scrollbar.options,
                    offset = scrollbar.offset,
                    limit = scrollbar.limit,
                    track = scrollbar.track,
                    contentEl = scrollbar.contentEl;
                if (options.renderByPixels) {
                    x = Math.round(x);
                    y = Math.round(y);
                }
                x = Object(
                    lodash_es_clamp__WEBPACK_IMPORTED_MODULE_1__['default']
                )(x, 0, limit.x);
                y = Object(
                    lodash_es_clamp__WEBPACK_IMPORTED_MODULE_1__['default']
                )(y, 0, limit.y);
                // position changed -> show track for 300ms
                if (x !== offset.x) track.xAxis.show();
                if (y !== offset.y) track.yAxis.show();
                if (!options.alwaysShowTracks) {
                    track.autoHideOnIdle();
                }
                if (x === offset.x && y === offset.y) {
                    return null;
                }
                offset.x = x;
                offset.y = y;
                Object(_utils___WEBPACK_IMPORTED_MODULE_2__['setStyle'])(
                    contentEl,
                    {
                        '-transform':
                            'translate3d(' + -x + 'px, ' + -y + 'px, 0)'
                    }
                );
                track.update();
                return {
                    offset: tslib__WEBPACK_IMPORTED_MODULE_0__['__assign'](
                        {},
                        offset
                    ),
                    limit: tslib__WEBPACK_IMPORTED_MODULE_0__['__assign'](
                        {},
                        limit
                    )
                };
            }
            //# sourceMappingURL=set-position.js.map

            /***/
        },
        /* 171 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'scrollTo',
                function() {
                    return scrollTo;
                }
            );
            /* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                135
            );

            var animationIDStorage = new WeakMap();
            function scrollTo(scrollbar, x, y, duration, _a) {
                if (duration === void 0) {
                    duration = 0;
                }
                var _b = _a === void 0 ? {} : _a,
                    _c = _b.easing,
                    easing = _c === void 0 ? defaultEasing : _c,
                    _d = _b.callback,
                    callback = _d === void 0 ? null : _d;
                var options = scrollbar.options,
                    offset = scrollbar.offset,
                    limit = scrollbar.limit;
                if (options.renderByPixels) {
                    // ensure resolved with integer
                    x = Math.round(x);
                    y = Math.round(y);
                }
                var startX = offset.x;
                var startY = offset.y;
                var disX =
                    Object(
                        lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__['default']
                    )(x, 0, limit.x) - startX;
                var disY =
                    Object(
                        lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__['default']
                    )(y, 0, limit.y) - startY;
                var start = Date.now();
                function scroll() {
                    var elapse = Date.now() - start;
                    var progress = duration
                        ? easing(Math.min(elapse / duration, 1))
                        : 1;
                    scrollbar.setPosition(
                        startX + disX * progress,
                        startY + disY * progress
                    );
                    if (elapse >= duration) {
                        if (typeof callback === 'function') {
                            callback.call(scrollbar);
                        }
                    } else {
                        var animationID = requestAnimationFrame(scroll);
                        animationIDStorage.set(scrollbar, animationID);
                    }
                }
                cancelAnimationFrame(animationIDStorage.get(scrollbar));
                scroll();
            }
            /**
             * easeOutCubic
             */
            function defaultEasing(t) {
                return Math.pow(t - 1, 3) + 1;
            }
            //# sourceMappingURL=scroll-to.js.map

            /***/
        },
        /* 172 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'scrollIntoView',
                function() {
                    return scrollIntoView;
                }
            );
            /* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                135
            );

            function scrollIntoView(scrollbar, elem, _a) {
                var _b = _a === void 0 ? {} : _a,
                    _c = _b.alignToTop,
                    alignToTop = _c === void 0 ? true : _c,
                    _d = _b.onlyScrollIfNeeded,
                    onlyScrollIfNeeded = _d === void 0 ? false : _d,
                    _e = _b.offsetTop,
                    offsetTop = _e === void 0 ? 0 : _e,
                    _f = _b.offsetLeft,
                    offsetLeft = _f === void 0 ? 0 : _f,
                    _g = _b.offsetBottom,
                    offsetBottom = _g === void 0 ? 0 : _g;
                var containerEl = scrollbar.containerEl,
                    bounding = scrollbar.bounding,
                    offset = scrollbar.offset,
                    limit = scrollbar.limit;
                if (!elem || !containerEl.contains(elem)) return;
                var targetBounding = elem.getBoundingClientRect();
                if (onlyScrollIfNeeded && scrollbar.isVisible(elem)) return;
                var delta = alignToTop
                    ? targetBounding.top - bounding.top - offsetTop
                    : targetBounding.bottom - bounding.bottom + offsetBottom;
                scrollbar.setMomentum(
                    targetBounding.left - bounding.left - offsetLeft,
                    Object(
                        lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__['default']
                    )(delta, -offset.y, limit.y - offset.y)
                );
            }
            //# sourceMappingURL=scroll-into-view.js.map

            /***/
        },
        /* 173 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'ScrollbarPlugin',
                function() {
                    return ScrollbarPlugin;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'globalPlugins',
                function() {
                    return globalPlugins;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'addPlugins',
                function() {
                    return addPlugins;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'initPlugins',
                function() {
                    return initPlugins;
                }
            );
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                36
            );

            var ScrollbarPlugin = /** @class */ (function() {
                function ScrollbarPlugin(scrollbar, options) {
                    var _newTarget = this.constructor;
                    this.scrollbar = scrollbar;
                    this.name = _newTarget.pluginName;
                    this.options = tslib__WEBPACK_IMPORTED_MODULE_0__[
                        '__assign'
                    ]({}, _newTarget.defaultOptions, options);
                }
                ScrollbarPlugin.prototype.onInit = function() {};
                ScrollbarPlugin.prototype.onDestory = function() {};
                ScrollbarPlugin.prototype.onUpdate = function() {};
                ScrollbarPlugin.prototype.onRender = function(
                    _remainMomentum
                ) {};
                ScrollbarPlugin.prototype.transformDelta = function(
                    delta,
                    _evt
                ) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__['__assign'](
                        {},
                        delta
                    );
                };
                ScrollbarPlugin.pluginName = '';
                ScrollbarPlugin.defaultOptions = {};
                return ScrollbarPlugin;
            })();

            var globalPlugins = {
                order: new Set(),
                constructors: {}
            };
            function addPlugins() {
                var Plugins = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    Plugins[_i] = arguments[_i];
                }
                Plugins.forEach(function(P) {
                    var pluginName = P.pluginName;
                    if (!pluginName) {
                        throw new TypeError('plugin name is required');
                    }
                    globalPlugins.order.add(pluginName);
                    globalPlugins.constructors[pluginName] = P;
                });
            }
            function initPlugins(scrollbar, options) {
                return Array.from(globalPlugins.order)
                    .filter(function(pluginName) {
                        return options[pluginName] !== false;
                    })
                    .map(function(pluginName) {
                        var Plugin = globalPlugins.constructors[pluginName];
                        var instance = new Plugin(
                            scrollbar,
                            options[pluginName]
                        );
                        // bind plugin options to `scrollbar.options`
                        options[pluginName] = instance.options;
                        return instance;
                    });
            }
            //# sourceMappingURL=plugin.js.map

            /***/
        },
        /* 174 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                175
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'keyboardHandler',
                function() {
                    return _keyboard__WEBPACK_IMPORTED_MODULE_0__[
                        'keyboardHandler'
                    ];
                }
            );

            /* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                176
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'mouseHandler',
                function() {
                    return _mouse__WEBPACK_IMPORTED_MODULE_1__['mouseHandler'];
                }
            );

            /* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                177
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'resizeHandler',
                function() {
                    return _resize__WEBPACK_IMPORTED_MODULE_2__[
                        'resizeHandler'
                    ];
                }
            );

            /* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                178
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'selectHandler',
                function() {
                    return _select__WEBPACK_IMPORTED_MODULE_3__[
                        'selectHandler'
                    ];
                }
            );

            /* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                179
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'touchHandler',
                function() {
                    return _touch__WEBPACK_IMPORTED_MODULE_4__['touchHandler'];
                }
            );

            /* harmony import */ var _wheel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                180
            );
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'wheelHandler',
                function() {
                    return _wheel__WEBPACK_IMPORTED_MODULE_5__['wheelHandler'];
                }
            );

            //# sourceMappingURL=index.js.map

            /***/
        },
        /* 175 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'keyboardHandler',
                function() {
                    return keyboardHandler;
                }
            );
            /* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                154
            );

            var KEY_CODE;
            (function(KEY_CODE) {
                KEY_CODE[(KEY_CODE['SPACE'] = 32)] = 'SPACE';
                KEY_CODE[(KEY_CODE['PAGE_UP'] = 33)] = 'PAGE_UP';
                KEY_CODE[(KEY_CODE['PAGE_DOWN'] = 34)] = 'PAGE_DOWN';
                KEY_CODE[(KEY_CODE['END'] = 35)] = 'END';
                KEY_CODE[(KEY_CODE['HOME'] = 36)] = 'HOME';
                KEY_CODE[(KEY_CODE['LEFT'] = 37)] = 'LEFT';
                KEY_CODE[(KEY_CODE['UP'] = 38)] = 'UP';
                KEY_CODE[(KEY_CODE['RIGHT'] = 39)] = 'RIGHT';
                KEY_CODE[(KEY_CODE['DOWN'] = 40)] = 'DOWN';
            })(KEY_CODE || (KEY_CODE = {}));
            function keyboardHandler(scrollbar) {
                var addEvent = Object(
                    _utils___WEBPACK_IMPORTED_MODULE_0__['eventScope']
                )(scrollbar);
                var container = scrollbar.containerEl;
                addEvent(container, 'keydown', function(evt) {
                    if (document.activeElement !== container) {
                        return;
                    }
                    var delta = getKeyDelta(
                        scrollbar,
                        evt.keyCode || evt.which
                    );
                    if (!delta) {
                        return;
                    }
                    var x = delta[0],
                        y = delta[1];
                    scrollbar.addTransformableMomentum(x, y, evt, function(
                        willScroll
                    ) {
                        if (willScroll) {
                            evt.preventDefault();
                        } else {
                            scrollbar.containerEl.blur();
                            if (scrollbar.parent) {
                                scrollbar.parent.containerEl.focus();
                            }
                        }
                    });
                });
            }
            function getKeyDelta(scrollbar, keyCode) {
                var size = scrollbar.size,
                    limit = scrollbar.limit,
                    offset = scrollbar.offset;
                switch (keyCode) {
                    case KEY_CODE.SPACE:
                        return [0, 200];
                    case KEY_CODE.PAGE_UP:
                        return [0, -size.container.height + 40];
                    case KEY_CODE.PAGE_DOWN:
                        return [0, size.container.height - 40];
                    case KEY_CODE.END:
                        return [0, limit.y - offset.y];
                    case KEY_CODE.HOME:
                        return [0, -offset.y];
                    case KEY_CODE.LEFT:
                        return [-40, 0];
                    case KEY_CODE.UP:
                        return [0, -40];
                    case KEY_CODE.RIGHT:
                        return [40, 0];
                    case KEY_CODE.DOWN:
                        return [0, 40];
                    default:
                        return null;
                }
            }
            //# sourceMappingURL=keyboard.js.map

            /***/
        },
        /* 176 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'mouseHandler',
                function() {
                    return mouseHandler;
                }
            );
            /* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                135
            );
            /* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                154
            );

            var Direction;
            (function(Direction) {
                Direction[(Direction['X'] = 0)] = 'X';
                Direction[(Direction['Y'] = 1)] = 'Y';
            })(Direction || (Direction = {}));
            function mouseHandler(scrollbar) {
                var addEvent = Object(
                    _utils___WEBPACK_IMPORTED_MODULE_1__['eventScope']
                )(scrollbar);
                var container = scrollbar.containerEl;
                var _a = scrollbar.track,
                    xAxis = _a.xAxis,
                    yAxis = _a.yAxis;
                function calcOffset(direction, clickPosition) {
                    var size = scrollbar.size;
                    if (direction === Direction.X) {
                        var totalWidth =
                            size.container.width +
                            (xAxis.thumb.realSize - xAxis.thumb.displaySize);
                        return (
                            (clickPosition / totalWidth) * size.content.width
                        );
                    }
                    if (direction === Direction.Y) {
                        var totalHeight =
                            size.container.height +
                            (yAxis.thumb.realSize - yAxis.thumb.displaySize);
                        return (
                            (clickPosition / totalHeight) * size.content.height
                        );
                    }
                    return 0;
                }
                function getTrackDirection(elem) {
                    if (
                        Object(_utils___WEBPACK_IMPORTED_MODULE_1__['isOneOf'])(
                            elem,
                            [xAxis.element, xAxis.thumb.element]
                        )
                    ) {
                        return Direction.X;
                    }
                    if (
                        Object(_utils___WEBPACK_IMPORTED_MODULE_1__['isOneOf'])(
                            elem,
                            [yAxis.element, yAxis.thumb.element]
                        )
                    ) {
                        return Direction.Y;
                    }
                    return void 0;
                }
                var isMouseDown;
                var isMouseMoving;
                var startOffsetToThumb;
                var startTrackDirection;
                var containerRect;
                addEvent(container, 'click', function(evt) {
                    if (
                        isMouseMoving ||
                        !Object(
                            _utils___WEBPACK_IMPORTED_MODULE_1__['isOneOf']
                        )(evt.target, [xAxis.element, yAxis.element])
                    ) {
                        return;
                    }
                    var track = evt.target;
                    var direction = getTrackDirection(track);
                    var rect = track.getBoundingClientRect();
                    var clickPos = Object(
                        _utils___WEBPACK_IMPORTED_MODULE_1__['getPosition']
                    )(evt);
                    var offset = scrollbar.offset,
                        limit = scrollbar.limit;
                    if (direction === Direction.X) {
                        var offsetOnTrack =
                            clickPos.x -
                            rect.left -
                            xAxis.thumb.displaySize / 2;
                        scrollbar.setMomentum(
                            Object(
                                lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__[
                                    'default'
                                ]
                            )(
                                calcOffset(direction, offsetOnTrack) - offset.x,
                                -offset.x,
                                limit.x - offset.x
                            ),
                            0
                        );
                    }
                    if (direction === Direction.Y) {
                        var offsetOnTrack =
                            clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
                        scrollbar.setMomentum(
                            0,
                            Object(
                                lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__[
                                    'default'
                                ]
                            )(
                                calcOffset(direction, offsetOnTrack) - offset.y,
                                -offset.y,
                                limit.y - offset.y
                            )
                        );
                    }
                });
                addEvent(container, 'mousedown', function(evt) {
                    if (
                        !Object(
                            _utils___WEBPACK_IMPORTED_MODULE_1__['isOneOf']
                        )(evt.target, [
                            xAxis.thumb.element,
                            yAxis.thumb.element
                        ])
                    ) {
                        return;
                    }
                    isMouseDown = true;
                    var thumb = evt.target;
                    var cursorPos = Object(
                        _utils___WEBPACK_IMPORTED_MODULE_1__['getPosition']
                    )(evt);
                    var thumbRect = thumb.getBoundingClientRect();
                    startTrackDirection = getTrackDirection(thumb);
                    // pointer offset to thumb
                    startOffsetToThumb = {
                        x: cursorPos.x - thumbRect.left,
                        y: cursorPos.y - thumbRect.top
                    };
                    // container bounding rectangle
                    containerRect = container.getBoundingClientRect();
                    // prevent selection, see:
                    // https://github.com/idiotWu/smooth-scrollbar/issues/48
                    Object(
                        _utils___WEBPACK_IMPORTED_MODULE_1__['setStyle']
                    )(scrollbar.containerEl, {
                        '-user-select': 'none'
                    });
                });
                addEvent(window, 'mousemove', function(evt) {
                    if (!isMouseDown) return;
                    isMouseMoving = true;
                    var offset = scrollbar.offset;
                    var cursorPos = Object(
                        _utils___WEBPACK_IMPORTED_MODULE_1__['getPosition']
                    )(evt);
                    if (startTrackDirection === Direction.X) {
                        // get percentage of pointer position in track
                        // then tranform to px
                        // don't need easing
                        var offsetOnTrack =
                            cursorPos.x -
                            startOffsetToThumb.x -
                            containerRect.left;
                        scrollbar.setPosition(
                            calcOffset(startTrackDirection, offsetOnTrack),
                            offset.y
                        );
                    }
                    if (startTrackDirection === Direction.Y) {
                        var offsetOnTrack =
                            cursorPos.y -
                            startOffsetToThumb.y -
                            containerRect.top;
                        scrollbar.setPosition(
                            offset.x,
                            calcOffset(startTrackDirection, offsetOnTrack)
                        );
                    }
                });
                addEvent(window, 'mouseup blur', function() {
                    isMouseDown = isMouseMoving = false;
                    Object(
                        _utils___WEBPACK_IMPORTED_MODULE_1__['setStyle']
                    )(scrollbar.containerEl, {
                        '-user-select': ''
                    });
                });
            }
            //# sourceMappingURL=mouse.js.map

            /***/
        },
        /* 177 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'resizeHandler',
                function() {
                    return resizeHandler;
                }
            );
            /* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                152
            );
            /* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                154
            );

            function resizeHandler(scrollbar) {
                var addEvent = Object(
                    _utils___WEBPACK_IMPORTED_MODULE_1__['eventScope']
                )(scrollbar);
                addEvent(
                    window,
                    'resize',
                    Object(
                        lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__[
                            'default'
                        ]
                    )(scrollbar.update.bind(scrollbar), 300)
                );
            }
            //# sourceMappingURL=resize.js.map

            /***/
        },
        /* 178 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'selectHandler',
                function() {
                    return selectHandler;
                }
            );
            /* harmony import */ var lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                135
            );
            /* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                154
            );

            function selectHandler(scrollbar) {
                var addEvent = Object(
                    _utils___WEBPACK_IMPORTED_MODULE_1__['eventScope']
                )(scrollbar);
                var containerEl = scrollbar.containerEl,
                    contentEl = scrollbar.contentEl,
                    offset = scrollbar.offset,
                    limit = scrollbar.limit;
                var isSelected = false;
                var animationID;
                function scroll(_a) {
                    var x = _a.x,
                        y = _a.y;
                    if (!x && !y) return;
                    // DISALLOW delta transformation
                    scrollbar.setMomentum(
                        Object(
                            lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__[
                                'default'
                            ]
                        )(offset.x + x, 0, limit.x) - offset.x,
                        Object(
                            lodash_es_clamp__WEBPACK_IMPORTED_MODULE_0__[
                                'default'
                            ]
                        )(offset.y + y, 0, limit.y) - offset.y
                    );
                    animationID = requestAnimationFrame(function() {
                        scroll({ x: x, y: y });
                    });
                }
                addEvent(window, 'mousemove', function(evt) {
                    if (!isSelected) return;
                    cancelAnimationFrame(animationID);
                    var dir = calcMomentum(scrollbar, evt);
                    scroll(dir);
                });
                addEvent(contentEl, 'selectstart', function(evt) {
                    evt.stopPropagation();
                    cancelAnimationFrame(animationID);
                    isSelected = true;
                });
                addEvent(window, 'mouseup blur', function() {
                    cancelAnimationFrame(animationID);
                    isSelected = false;
                });
                // patch for touch devices
                addEvent(containerEl, 'scroll', function(evt) {
                    evt.preventDefault();
                    containerEl.scrollTop = containerEl.scrollLeft = 0;
                });
            }
            function calcMomentum(scrollbar, evt) {
                var _a = scrollbar.bounding,
                    top = _a.top,
                    right = _a.right,
                    bottom = _a.bottom,
                    left = _a.left;
                var _b = Object(
                        _utils___WEBPACK_IMPORTED_MODULE_1__['getPosition']
                    )(evt),
                    x = _b.x,
                    y = _b.y;
                var res = {
                    x: 0,
                    y: 0
                };
                var padding = 20;
                if (x === 0 && y === 0) return res;
                if (x > right - padding) {
                    res.x = x - right + padding;
                } else if (x < left + padding) {
                    res.x = x - left - padding;
                }
                if (y > bottom - padding) {
                    res.y = y - bottom + padding;
                } else if (y < top + padding) {
                    res.y = y - top - padding;
                }
                res.x *= 2;
                res.y *= 2;
                return res;
            }
            //# sourceMappingURL=select.js.map

            /***/
        },
        /* 179 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'touchHandler',
                function() {
                    return touchHandler;
                }
            );
            /* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                154
            );

            var activeScrollbar;
            function touchHandler(scrollbar) {
                var MIN_EAING_MOMENTUM = 50;
                var EASING_MULTIPLIER = /Android/.test(navigator.userAgent)
                    ? 3
                    : 2;
                var target =
                    scrollbar.options.delegateTo || scrollbar.containerEl;
                var touchRecord = new _utils___WEBPACK_IMPORTED_MODULE_0__[
                    'TouchRecord'
                ]();
                var addEvent = Object(
                    _utils___WEBPACK_IMPORTED_MODULE_0__['eventScope']
                )(scrollbar);
                var damping;
                var pointerCount = 0;
                addEvent(target, 'touchstart', function(evt) {
                    // start records
                    touchRecord.track(evt);
                    // stop scrolling
                    scrollbar.setMomentum(0, 0);
                    // save damping
                    if (pointerCount === 0) {
                        damping = scrollbar.options.damping;
                        scrollbar.options.damping = Math.max(damping, 0.5); // less frames on touchmove
                    }
                    pointerCount++;
                });
                addEvent(target, 'touchmove', function(evt) {
                    if (activeScrollbar && activeScrollbar !== scrollbar)
                        return;
                    touchRecord.update(evt);
                    var _a = touchRecord.getDelta(),
                        x = _a.x,
                        y = _a.y;
                    scrollbar.addTransformableMomentum(x, y, evt, function(
                        willScroll
                    ) {
                        if (willScroll) {
                            evt.preventDefault();
                            activeScrollbar = scrollbar;
                        }
                    });
                });
                addEvent(target, 'touchcancel touchend', function(evt) {
                    var velocity = touchRecord.getVelocity();
                    var momentum = { x: 0, y: 0 };
                    Object.keys(velocity).forEach(function(dir) {
                        var s = velocity[dir] / damping;
                        // throw small values
                        momentum[dir] =
                            Math.abs(s) < MIN_EAING_MOMENTUM
                                ? 0
                                : s * EASING_MULTIPLIER;
                    });
                    scrollbar.addTransformableMomentum(
                        momentum.x,
                        momentum.y,
                        evt
                    );
                    pointerCount--;
                    // restore damping
                    if (pointerCount === 0) {
                        scrollbar.options.damping = damping;
                    }
                    touchRecord.release(evt);
                    activeScrollbar = null;
                });
            }
            //# sourceMappingURL=touch.js.map

            /***/
        },
        /* 180 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'wheelHandler',
                function() {
                    return wheelHandler;
                }
            );
            /* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                154
            );

            function wheelHandler(scrollbar) {
                var addEvent = Object(
                    _utils___WEBPACK_IMPORTED_MODULE_0__['eventScope']
                )(scrollbar);
                var target =
                    scrollbar.options.delegateTo || scrollbar.containerEl;
                var eventName =
                    'onwheel' in window ||
                    document.implementation.hasFeature('Events.wheel', '3.0')
                        ? 'wheel'
                        : 'mousewheel';
                addEvent(target, eventName, function(evt) {
                    var _a = normalizeDelta(evt),
                        x = _a.x,
                        y = _a.y;
                    scrollbar.addTransformableMomentum(x, y, evt, function(
                        willScroll
                    ) {
                        if (willScroll) {
                            evt.preventDefault();
                        }
                    });
                });
            }
            // Normalizing wheel delta
            var DELTA_SCALE = {
                STANDARD: 1,
                OTHERS: -3
            };
            var DELTA_MODE = [1.0, 28.0, 500.0];
            var getDeltaMode = function(mode) {
                return DELTA_MODE[mode] || DELTA_MODE[0];
            };
            function normalizeDelta(evt) {
                if ('deltaX' in evt) {
                    var mode = getDeltaMode(evt.deltaMode);
                    return {
                        x: (evt.deltaX / DELTA_SCALE.STANDARD) * mode,
                        y: (evt.deltaY / DELTA_SCALE.STANDARD) * mode
                    };
                }
                if ('wheelDeltaX' in evt) {
                    return {
                        x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
                        y: evt.wheelDeltaY / DELTA_SCALE.OTHERS
                    };
                }
                // ie with touchpad
                return {
                    x: 0,
                    y: evt.wheelDelta / DELTA_SCALE.OTHERS
                };
            }
            //# sourceMappingURL=wheel.js.map

            /***/
        },
        /* 181 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'attachStyle',
                function() {
                    return attachStyle;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'detachStyle',
                function() {
                    return detachStyle;
                }
            );
            var TRACK_BG = 'rgba(222, 222, 222, .75)';
            var THUMB_BG = 'rgba(0, 0, 0, .5)';
            var SCROLLBAR_STYLE =
                '\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: ' +
                TRACK_BG +
                ';\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: ' +
                THUMB_BG +
                ';\n  border-radius: 4px;\n}\n';
            var STYLE_ID = 'smooth-scrollbar-style';
            var isStyleAttached = false;
            function attachStyle() {
                if (isStyleAttached || typeof window === 'undefined') {
                    return;
                }
                var styleEl = document.createElement('style');
                styleEl.id = STYLE_ID;
                styleEl.textContent = SCROLLBAR_STYLE;
                document.head.appendChild(styleEl);
                isStyleAttached = true;
            }
            function detachStyle() {
                if (!isStyleAttached || typeof window === 'undefined') {
                    return;
                }
                var styleEl = document.getElementById(STYLE_ID);
                if (!styleEl || !styleEl.parentNode) {
                    return;
                }
                styleEl.parentNode.removeChild(styleEl);
                isStyleAttached = false;
            }
            //# sourceMappingURL=style.js.map

            /***/
        },
        /* 182 */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'throttle',
                function() {
                    return throttle;
                }
            );
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'debounce',
                function() {
                    return debounce;
                }
            );
            /* eslint-disable no-undefined,no-param-reassign,no-shadow */

            /**
             * Throttle execution of a function. Especially useful for rate limiting
             * execution of handlers on events like resize and scroll.
             *
             * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
             * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
             *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
             *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
             *                                    the internal counter is reset)
             * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
             *                                    to `callback` when the throttled-function is executed.
             * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
             *                                    schedule `callback` to execute after `delay` ms.
             *
             * @return {Function}  A new, throttled, function.
             */
            function throttle(delay, noTrailing, callback, debounceMode) {
                /*
                 * After wrapper has stopped being called, this timeout ensures that
                 * `callback` is executed at the proper times in `throttle` and `end`
                 * debounce modes.
                 */
                var timeoutID;
                var cancelled = false; // Keep track of the last time `callback` was executed.

                var lastExec = 0; // Function to clear existing timeout

                function clearExistingTimeout() {
                    if (timeoutID) {
                        clearTimeout(timeoutID);
                    }
                } // Function to cancel next exec

                function cancel() {
                    clearExistingTimeout();
                    cancelled = true;
                } // `noTrailing` defaults to falsy.

                if (typeof noTrailing !== 'boolean') {
                    debounceMode = callback;
                    callback = noTrailing;
                    noTrailing = undefined;
                }
                /*
                 * The `wrapper` function encapsulates all of the throttling / debouncing
                 * functionality and when executed will limit the rate at which `callback`
                 * is executed.
                 */

                function wrapper() {
                    var self = this;
                    var elapsed = Date.now() - lastExec;
                    var args = arguments;

                    if (cancelled) {
                        return;
                    } // Execute `callback` and update the `lastExec` timestamp.

                    function exec() {
                        lastExec = Date.now();
                        callback.apply(self, args);
                    }
                    /*
                     * If `debounceMode` is true (at begin) this is used to clear the flag
                     * to allow future `callback` executions.
                     */

                    function clear() {
                        timeoutID = undefined;
                    }

                    if (debounceMode && !timeoutID) {
                        /*
                         * Since `wrapper` is being called for the first time and
                         * `debounceMode` is true (at begin), execute `callback`.
                         */
                        exec();
                    }

                    clearExistingTimeout();

                    if (debounceMode === undefined && elapsed > delay) {
                        /*
                         * In throttle mode, if `delay` time has been exceeded, execute
                         * `callback`.
                         */
                        exec();
                    } else if (noTrailing !== true) {
                        /*
                         * In trailing throttle mode, since `delay` time has not been
                         * exceeded, schedule `callback` to execute `delay` ms after most
                         * recent execution.
                         *
                         * If `debounceMode` is true (at begin), schedule `clear` to execute
                         * after `delay` ms.
                         *
                         * If `debounceMode` is false (at end), schedule `callback` to
                         * execute after `delay` ms.
                         */
                        timeoutID = setTimeout(
                            debounceMode ? clear : exec,
                            debounceMode === undefined ? delay - elapsed : delay
                        );
                    }
                }

                wrapper.cancel = cancel; // Return the wrapper function.

                return wrapper;
            }

            /* eslint-disable no-undefined */
            /**
             * Debounce execution of a function. Debouncing, unlike throttling,
             * guarantees that a function is only executed a single time, either at the
             * very beginning of a series of calls, or at the very end.
             *
             * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
             * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
             *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
             *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
             * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
             *                                  to `callback` when the debounced-function is executed.
             *
             * @return {Function} A new, debounced function.
             */

            function debounce(delay, atBegin, callback) {
                return callback === undefined
                    ? throttle(delay, atBegin, false)
                    : throttle(delay, callback, atBegin !== false);
            }

            /***/
        },
        /* 183 */
        /***/ function(module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(184)(false);
            // Module
            exports.push([
                module.i,
                'body{margin:0;background-color:#fff;max-height:100vh;min-width:360px;overflow:hidden;color:rgba(0,0,0,.87);font-family:Noto Sans SC,Microsoft YaHei UI,Microsoft YaHei UI Light,微软雅黑,Segoe UI Semibold,Roboto,sans-serif}body ul{margin:0;padding:0}body main{overflow-y:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:-webkit-calc(100vh - 64px);max-height:-moz-calc(100vh - 64px);max-height:calc(100vh - 64px);min-width:360px}body p{margin:0;word-break:break-all}body .scrollbar-track{-webkit-transition:225ms ease-in-out;-o-transition:225ms ease-in-out;-moz-transition:225ms ease-in-out;transition:225ms ease-in-out}body .flex-space{-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}body .card{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:#fff}body .card .title{font-size:1em;text-decoration:none;padding-top:4px;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#header,body .card .title{color:rgba(0,0,0,.87);-webkit-transition:125ms ease-in-out;-o-transition:125ms ease-in-out;-moz-transition:125ms ease-in-out;transition:125ms ease-in-out}#header{height:64px;padding-left:14px;padding-right:14px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;z-index:10;position:relative}#header .icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#header .icon .material-icons{color:rgba(0,0,0,.54)}#header #avatar{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:48px;width:48px;overflow:hidden;margin-right:4px;cursor:pointer;-webkit-transition:125ms;-o-transition:125ms;-moz-transition:125ms;transition:125ms}#header #avatar,#header #avatar .icon{-moz-border-radius:50%;border-radius:50%}#header #avatar .icon{height:36px;width:36px;background-position:50%;-webkit-background-size:cover;-moz-background-size:cover;background-size:cover;background-repeat:no-repeat}#header #avatar:hover{background-color:rgba(0,0,0,.06)}#header .space{-webkit-box-flex:1;-webkit-flex:1 0;-moz-box-flex:1;-ms-flex:1 0;flex:1 0}#header>.title{font-size:1.25rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;margin-left:16px;color:rgba(0,0,0,.54);font-weight:100}@media (max-width:786px){#header>.title{display:none}}#header>.title :focus,#header>.title :visited{color:rgba(0,0,0,.54)}@media (max-width:768px){#header>.title{padding-left:4px}}#header>nav{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-right:16px}#header>nav,#header>nav ul{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}#header>nav ul{list-style:none;margin:0}#header>nav ul li a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:24px;line-height:24px;-moz-border-radius:50%;border-radius:50%}#header>nav ul li a:hover{background-color:rgba(0,0,0,.06)}@media (max-width:768px){#header>nav{margin-right:0}}#header.on{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4);-moz-box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}@media (max-width:768px){#header{padding-left:16px;padding-right:16px}}#header-search{line-height:48px;height:48px;-moz-border-radius:8px;border-radius:8px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#eee;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1 1 50vw;-moz-box-flex:1;-ms-flex:1 1 50vw;flex:1 1 50vw;max-width:720px;cursor:text;-webkit-transition:225ms;-o-transition:225ms;-moz-transition:225ms;transition:225ms}#header-search,#header-search .icon{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}#header-search .icon{padding:12px 16px}#header-search .icon svg{height:24px;width:24px;fill:rgba(0,0,0,.54)}#header-search label{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:48px;width:100%}#header-search input{font-family:Noto Sans SC,Microsoft YaHei UI,Microsoft YaHei UI Light,微软雅黑,Segoe UI Semibold,Roboto,sans-serif;background-color:transparent;color:rgba(0,0,0,.87);outline:none;border:none;width:100%;font-size:16px;line-height:inherit}#header-search:hover{background-color:#f5f5f5}#header-search #header-search-clear{opacity:0;pointer-events:none;-webkit-transition:125ms;-o-transition:125ms;-moz-transition:125ms;transition:125ms}#header-search #header-search-clear i{cursor:pointer}#header-search.focus,#header-search.focusing{-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);-moz-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);background-color:#fff}#header-search.focus #header-search-clear,#header-search.focusing #header-search-clear{opacity:1;pointer-events:all}',
                ''
            ]);

            /***/
        },
        /* 184 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
            // css base code, injected by the css-loader
            module.exports = function(useSourceMap) {
                var list = []; // return the list of modules as css string

                list.toString = function toString() {
                    return this.map(function(item) {
                        var content = cssWithMappingToString(
                            item,
                            useSourceMap
                        );

                        if (item[2]) {
                            return '@media ' + item[2] + '{' + content + '}';
                        } else {
                            return content;
                        }
                    }).join('');
                }; // import a list of modules into the list

                list.i = function(modules, mediaQuery) {
                    if (typeof modules === 'string') {
                        modules = [[null, modules, '']];
                    }

                    var alreadyImportedModules = {};

                    for (var i = 0; i < this.length; i++) {
                        var id = this[i][0];

                        if (id != null) {
                            alreadyImportedModules[id] = true;
                        }
                    }

                    for (i = 0; i < modules.length; i++) {
                        var item = modules[i]; // skip already imported module
                        // this implementation is not 100% perfect for weird media query combinations
                        // when a module is imported multiple times with different media queries.
                        // I hope this will never occur (Hey this way we have smaller bundles)

                        if (
                            item[0] == null ||
                            !alreadyImportedModules[item[0]]
                        ) {
                            if (mediaQuery && !item[2]) {
                                item[2] = mediaQuery;
                            } else if (mediaQuery) {
                                item[2] =
                                    '(' +
                                    item[2] +
                                    ') and (' +
                                    mediaQuery +
                                    ')';
                            }

                            list.push(item);
                        }
                    }
                };

                return list;
            };

            function cssWithMappingToString(item, useSourceMap) {
                var content = item[1] || '';
                var cssMapping = item[3];

                if (!cssMapping) {
                    return content;
                }

                if (useSourceMap && typeof btoa === 'function') {
                    var sourceMapping = toComment(cssMapping);
                    var sourceURLs = cssMapping.sources.map(function(source) {
                        return (
                            '/*# sourceURL=' +
                            cssMapping.sourceRoot +
                            source +
                            ' */'
                        );
                    });
                    return [content]
                        .concat(sourceURLs)
                        .concat([sourceMapping])
                        .join('\n');
                }

                return [content].join('\n');
            } // Adapted from convert-source-map (MIT)

            function toComment(sourceMap) {
                // eslint-disable-next-line no-undef
                var base64 = btoa(
                    unescape(encodeURIComponent(JSON.stringify(sourceMap)))
                );
                var data =
                    'sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                    base64;
                return '/*# ' + data + ' */';
            }

            /***/
        },
        /* 185 */
        /***/ function(module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(184)(false);
            // Module
            exports.push([
                module.i,
                '#content-wrapper{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:-webkit-calc(100vh - 80px);grid-template-rows:-moz-calc(100vh - 80px);grid-template-rows:calc(100vh - 80px);height:-webkit-calc(100vh - 64px);height:-moz-calc(100vh - 64px);height:calc(100vh - 64px);padding-top:16px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#content-wrapper .column{overflow:hidden}#content-wrapper .column a{text-decoration:none;color:inherit}#content-wrapper .column>header{padding:12px 24px 24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;position:relative;-webkit-transition:225ms ease-in-out;-o-transition:225ms ease-in-out;-moz-transition:225ms ease-in-out;transition:225ms ease-in-out;z-index:2}#content-wrapper .column>header.on{-webkit-box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4);-moz-box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}#content-wrapper .column>header .title{font-size:1.25em;font-weight:500;margin:0 0 0 8px;-webkit-transition:225ms;-o-transition:225ms;-moz-transition:225ms;transition:225ms;position:relative;white-space:nowrap}#content-wrapper .column>header .title:before{content:"";position:absolute;left:-6px;height:100%;width:-webkit-calc(100% + 12px);width:-moz-calc(100% + 12px);width:calc(100% + 12px);-webkit-transform:scaleY(0);-moz-transform:scaleY(0);-ms-transform:scaleY(0);-o-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:bottom;-moz-transform-origin:bottom;-ms-transform-origin:bottom;-o-transform-origin:bottom;transform-origin:bottom;pointer-events:none;-webkit-transition:225ms;-o-transition:225ms;-moz-transition:225ms;transition:225ms;z-index:-1}#content-wrapper .column>header .title:hover{color:#fff}#content-wrapper .column>header .title:hover:before{-webkit-transform:scaleY(1);-moz-transform:scaleY(1);-ms-transform:scaleY(1);-o-transform:scaleY(1);transform:scaleY(1)}@media (max-width:786px){#content-wrapper .column>header .title{font-size:1em}}#content-wrapper .column>header .top{position:relative;color:rgba(0,0,0,.54);font-size:.875em;line-height:1.25em;-webkit-transition:125ms;-o-transition:125ms;-moz-transition:125ms;transition:125ms;white-space:nowrap}#content-wrapper .column>header .top:hover{color:rgba(0,0,0,.87)}#content-wrapper .column>header .top:before{content:"↑";position:absolute;right:-10px;bottom:0;font-size:.675em;font-weight:700}#content-wrapper .column>header:before{content:"";height:6px;width:6px;position:absolute;left:16px;top:44%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}#content-wrapper .column>header:after{content:"";height:18px;width:-webkit-calc(100% - 24px);width:-moz-calc(100% - 24px);width:calc(100% - 24px);position:absolute;left:19.5px;top:44%;pointer-events:none}#content-wrapper .column .card-list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:16px 32px 0;overflow-y:auto;height:-webkit-calc(100vh - 150px);height:-moz-calc(100vh - 150px);height:calc(100vh - 150px)}#content-wrapper .column .card-list .card{margin-bottom:16px;-moz-border-radius:8px;border-radius:8px;background-color:#fff;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.12);-moz-box-shadow:0 0 0 1px rgba(0,0,0,.12);box-shadow:0 0 0 1px rgba(0,0,0,.12);-webkit-transition:225ms ease-in-out;-o-transition:225ms ease-in-out;-moz-transition:225ms ease-in-out;transition:225ms ease-in-out}#content-wrapper .column .card-list .card:hover{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4);-moz-box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}#content-wrapper .column .card-list .card .cover{display:grid;-moz-border-radius-topleft:8px;border-top-left-radius:8px;-moz-border-radius-topright:8px;border-top-right-radius:8px;overflow:hidden}#content-wrapper .column .card-list .card .cover img{width:100%}#content-wrapper .column .card-list .card .content{padding:8px 12px}@media (max-width:786px){#content-wrapper .column .card-list .card .content{padding:4px 8px}}#content-wrapper .column .card-list .card .content .title{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-right:8px;padding:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}#content-wrapper .column .card-list .card .content .title h4{margin:0}@media (max-width:786px){#content-wrapper .column .card-list .card .content .title{font-size:.875em}}#content-wrapper .column .card-list .card .content .desc{color:rgba(0,0,0,.54)}#content-wrapper .column .card-list .card:last-child{margin-bottom:64px}@media (max-width:1024px){#content-wrapper .column .card-list{padding:16px 24px 0}}@media (max-width:786px){#content-wrapper .column .card-list{padding:16px 16px 0;margin-right:0}}#content-wrapper .column:last-child{border-right:none}@media (max-width:786px){#content-wrapper{width:300%;padding-top:0;grid-template-rows:-webkit-calc(100vh - 74px);grid-template-rows:-moz-calc(100vh - 74px);grid-template-rows:calc(100vh - 74px)}}#feed header .title{color:#ec407a}#feed header .title:hover:before{background-color:#ec407a}#feed header #feed-count{color:#ec407a;margin-left:10px;font-weight:600;line-height:22px}#feed header:before{background-color:#ec407a}#feed header:after{-webkit-box-shadow:-1px 1px #ec407a;-moz-box-shadow:-1px 1px #ec407a;box-shadow:-1px 1px #ec407a}#video header .title{color:#42a5f5}#video header .title:hover:before,#video header:before{background-color:#42a5f5}#video header:after{-webkit-box-shadow:-1px 1px #42a5f5;-moz-box-shadow:-1px 1px #42a5f5;box-shadow:-1px 1px #42a5f5}#dynamic header .title{color:#ffa726}#dynamic header .title:hover:before,#dynamic header:before{background-color:#ffa726}#dynamic header:after{-webkit-box-shadow:-1px 1px #ffa726;-moz-box-shadow:-1px 1px #ffa726;box-shadow:-1px 1px #ffa726}',
                ''
            ]);

            /***/
        }
        /******/
    ]
);
