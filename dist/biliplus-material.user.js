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
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
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
    } // expose the modules object (__webpack_modules__)
    /******/
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
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
})(
    /************************************************************************/
    /******/ [
        /* 0 */
        /***/ function(module, exports, __webpack_require__) {
            const Router = __webpack_require__(1),
                logger = __webpack_require__(2),
                Route = __webpack_require__(4),
                router = new Router(),
                utils = __webpack_require__(5),
                url = __webpack_require__(6),
                vars = __webpack_require__(14);

            const hrefObj = url.parse(location.href);
            const href = `${hrefObj.host}${hrefObj.pathname}`;

            document.documentElement.lang = 'zh-cmn-Hans';
            $(() => {
                logger.debug(vars);

                const $main = $('main');
                $main.on('scroll', () => {
                    utils.throttle(() => {
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
                    .css('background-image', `url(${vars.user.face})`);
            });

            router.push(new Route('$', __webpack_require__(15)));
            //Whitelist
            router.push(new Route('[api|me]'));
            router.push(new Route('.*', __webpack_require__(32)));

            router.load(href);

            logger.debug(href);

            /***/
        },
        /* 1 */
        /***/ function(module, exports, __webpack_require__) {
            const logger = __webpack_require__(2);
            module.exports = class Router {
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
                    logger.debug(this.routes);
                    this.routes.some(route => {
                        if (route.test(href)) {
                            route.call(route.match(href));
                            return true;
                        }
                    });
                }
            };

            /***/
        },
        /* 2 */
        /***/ function(module, exports, __webpack_require__) {
            const monkey = __webpack_require__(3);
            module.exports = {
                info: message => {
                    console.info(`[${monkey.header.name}]`, message);
                },
                debug: message => {
                    console.debug(`[${monkey.header.name}]`, message);
                },
                warn: message => {
                    console.warn(`[${monkey.header.name}]`, message);
                }
            };

            /***/
        },
        /* 3 */
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
        /* 4 */
        /***/ function(module, exports) {
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

                call(args) {
                    this.route(args);
                }
            }

            module.exports = class BiliPlusRoute extends Route {
                constructor(url, route) {
                    super('www\\.biliplus\\.com/' + url, route);
                }
            };

            /***/
        },
        /* 5 */
        /***/ function(module, exports) {
            module.exports.throttle = function throttle(fn, gapTime) {
                let _lastTime = null;

                return () => {
                    let _nowTime = new Date();
                    if (_nowTime - _lastTime > gapTime || !_lastTime) {
                        fn();
                        _lastTime = _nowTime;
                    }
                };
            };

            /***/
        },
        /* 6 */
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

            var punycode = __webpack_require__(7);
            var util = __webpack_require__(10);

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
                querystring = __webpack_require__(11);

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
        /* 7 */
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
                __webpack_require__(8)(module),
                __webpack_require__(9)
            ));

            /***/
        },
        /* 8 */
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
        /* 9 */
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
        /* 10 */
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
        /* 11 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            exports.decode = exports.parse = __webpack_require__(12);
            exports.encode = exports.stringify = __webpack_require__(13);

            /***/
        },
        /* 12 */
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
        /* 13 */
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
        /* 14 */
        /***/ function(module, exports, __webpack_require__) {
            const logger = __webpack_require__(2);

            let loginInfo;
            if (loginInfo) GM_setValue('user', loginInfo);
            const user = GM_getValue('user');

            module.exports = {
                user,
                config: {
                    title: 'BiliPlus'
                },
                api: {
                    dynamic: {
                        video: '/me/dynamic/page/1/',
                        bangumi: '/me/dynamic/page/102/',
                        comment: '/me/dynamic/page/101/'
                    }
                }
            };

            /***/
        },
        /* 15 */
        /***/ function(module, exports, __webpack_require__) {
            const logger = __webpack_require__(2);
            const vars = __webpack_require__(14);
            const config = vars.config;
            module.exports = async () => {
                const tpl = __webpack_require__(16);
                config.pageTitle = `${vars.user.uname} - ${config.title}`;
                document.documentElement.innerHTML = tpl.render(config);
                GM_addStyle(__webpack_require__(30).toString());
                // TODO 加焦点效果
            };

            /***/
        },
        /* 16 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(17);
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
                21
            );

            var shim = __webpack_require__(25);

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
                            output += ' ';
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
        /* 17 */
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
                __webpack_require__(18).setImmediate,
                __webpack_require__(20)
            ));

            /***/
        },
        /* 18 */
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
                __webpack_require__(19);
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
            }.call(this, __webpack_require__(9)));

            /***/
        },
        /* 19 */
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
            }.call(this, __webpack_require__(9), __webpack_require__(20)));

            /***/
        },
        /* 20 */
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
        /* 21 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(17);
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
            dependencies['../layout.tpl'] = __webpack_require__(22);
            dependencies['../header/header.tpl'] = __webpack_require__(27);
            dependencies['./script.tpl'] = __webpack_require__(29);

            var shim = __webpack_require__(25);

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
        /* 22 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(17);
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
            dependencies['./head/head.tpl'] = __webpack_require__(23);

            var shim = __webpack_require__(25);

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
        /* 23 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(17);
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
            dependencies['./meta.tpl'] = __webpack_require__(24);
            dependencies['./style.tpl'] = __webpack_require__(26);

            var shim = __webpack_require__(25);

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
        /* 24 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(17);
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

            var shim = __webpack_require__(25);

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
                                '<meta charset="UTF-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="theme-color" content="#ffffff"> ';
                            output +=
                                '<meta name="viewport" content="initial-scale=1, width=device-width"><meta name="referrer" content="no-referrer"><meta name="Description" content="Made By SettingDust with ♥"><link rel="manifest" href="/manifest.json">';
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
        /* 25 */
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
        /* 26 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(17);
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

            var shim = __webpack_require__(25);

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
        /* 27 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(17);
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
            dependencies['./search.tpl'] = __webpack_require__(28);

            var shim = __webpack_require__(25);

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
        /* 28 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(17);
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

            var shim = __webpack_require__(25);

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
                                '<div id="header-search"> <span class="icon"><i class="material-icons">search</i></span> <label><input type="text" placeholder="搜索你想要的" maxlength="64"></label></div>';
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
        /* 29 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(17);
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

            var shim = __webpack_require__(25);

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
        /* 30 */
        /***/ function(module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(31)(false);
            // Module
            exports.push([
                module.i,
                'body{margin:0;background-color:#fff;max-height:100vh;min-width:360px;overflow:hidden;color:rgba(0,0,0,.87);font-family:Noto Sans SC,Microsoft YaHei UI,Microsoft YaHei UI Light,微软雅黑,Segoe UI Semibold,Roboto,sans-serif}body ul{margin:0;padding:0}body main{overflow-y:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:-webkit-calc(100vh - 64px);max-height:-moz-calc(100vh - 64px);max-height:calc(100vh - 64px);min-width:360px}body p{margin:0;word-break:break-all}body #header{height:64px;padding-left:14px;padding-right:14px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:rgba(0,0,0,.87);background-color:#fff;-webkit-transition:125ms ease-in-out;-o-transition:125ms ease-in-out;-moz-transition:125ms ease-in-out;transition:125ms ease-in-out;z-index:10;position:relative}body #header .icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body #header .icon .material-icons{color:rgba(0,0,0,.54)}body #header #avatar{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-moz-border-radius:50%;border-radius:50%;height:48px;width:48px;overflow:hidden;margin-right:4px;cursor:pointer;-webkit-transition:125ms;-o-transition:125ms;-moz-transition:125ms;transition:125ms}body #header #avatar .icon{height:36px;width:36px;-moz-border-radius:50%;border-radius:50%;background-position:50%;-webkit-background-size:cover;-moz-background-size:cover;background-size:cover;background-repeat:no-repeat}body #header #avatar:hover{background-color:rgba(0,0,0,.06)}body #header .space{-webkit-box-flex:1;-webkit-flex:1 0;-moz-box-flex:1;-ms-flex:1 0;flex:1 0}body #header>.title{font-size:1.25rem;font-weight:500;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;margin-left:16px}body #header>.title,body #header>.title :focus,body #header>.title :visited{color:rgba(0,0,0,.54)}@media (max-width:768px){body #header>.title{padding-left:4px}}body #header>nav{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-right:16px}body #header>nav,body #header>nav ul{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}body #header>nav ul{list-style:none;margin:0}body #header>nav ul li a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:24px;line-height:24px;-moz-border-radius:50%;border-radius:50%}body #header>nav ul li a:hover{background-color:rgba(0,0,0,.06)}@media (max-width:768px){body #header>nav{margin-right:0}}body #header.on{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4);-moz-box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}@media (max-width:768px){body #header{padding-left:16px;padding-right:16px}}body #header #header-search{line-height:48px;height:48px;-moz-border-radius:8px;border-radius:8px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;-webkit-transition:125ms;-o-transition:125ms;-moz-transition:125ms;transition:125ms;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1 1 50vw;-moz-box-flex:1;-ms-flex:1 1 50vw;flex:1 1 50vw;max-width:720px}body #header #header-search,body #header #header-search .icon{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}body #header #header-search .icon{padding:12px 16px}body #header #header-search .icon svg{height:24px;width:24px;fill:rgba(0,0,0,.54)}body #header #header-search label{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:48px;width:100%}body #header #header-search input{font-family:Noto Sans SC,Microsoft YaHei UI,Microsoft YaHei UI Light,微软雅黑,Segoe UI Semibold,Roboto,sans-serif;background-color:transparent;color:rgba(0,0,0,.87);outline:none;border:none;width:100%;font-size:16px}body .card{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:#fff}body .card .title{font-size:1em;text-decoration:none;color:rgba(0,0,0,.87);padding-top:4px;-webkit-transition:125ms ease-in-out;-o-transition:125ms ease-in-out;-moz-transition:125ms ease-in-out;transition:125ms ease-in-out;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}',
                ''
            ]);

            /***/
        },
        /* 31 */
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
        /* 32 */
        /***/ function(module, exports, __webpack_require__) {
            const logger = __webpack_require__(2);
            const vars = __webpack_require__(14);
            const config = vars.config;
            module.exports = async () => {
                const tpl = __webpack_require__(33);
                config.error = {
                    code: '404',
                    message: 'Not found'
                };
                config.pageTitle = `${config.error.code} ${
                    config.error.message
                } - ${config.title}`;
                document.documentElement.innerHTML = tpl.render(config);
                GM_addStyle(__webpack_require__(30).toString());
                GM_addStyle(__webpack_require__(34).toString());
                // TODO 加焦点效果
            };

            /***/
        },
        /* 33 */
        /***/ function(module, exports, __webpack_require__) {
            var nunjucks = __webpack_require__(17);
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
            dependencies['./include/content/content.tpl'] = __webpack_require__(
                21
            );

            var shim = __webpack_require__(25);

            (function() {
                (nunjucks.nunjucksPrecompiled =
                    nunjucks.nunjucksPrecompiled || {})[
                    'src/view/error.tpl'
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
                                'src/view/error.tpl',
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
                            output += '<div><h2>';
                            output += runtime.suppressValue(
                                runtime.memberLookup(
                                    runtime.contextOrFrameLookup(
                                        context,
                                        frame,
                                        'error'
                                    ),
                                    'code'
                                ),
                                env.opts.autoescape
                            );
                            output += ' - ';
                            output += runtime.suppressValue(
                                runtime.memberLookup(
                                    runtime.contextOrFrameLookup(
                                        context,
                                        frame,
                                        'error'
                                    ),
                                    'message'
                                ),
                                env.opts.autoescape
                            );
                            output += '</h2></div> ';
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
                nunjucks.nunjucksPrecompiled['src/view/error.tpl'],
                dependencies
            );

            /***/
        },
        /* 34 */
        /***/ function(module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(31)(false);
            // Module
            exports.push([module.i, '#main{padding:48px 64px 64px}', '']);

            /***/
        }
        /******/
    ]
);
