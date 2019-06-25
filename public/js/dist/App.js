(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        App: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/components/App.js", "vendors~App" ]);
    return checkDeferredModules();
})({
    "./assets/js/components/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Portfolio */ "./assets/js/components/Portfolio.js");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/data */ "./assets/js/components/data/data.js");\n/* harmony import */ var react_scroll_to_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll-to-component */ "./node_modules/react-scroll-to-component/index.js");\n/* harmony import */ var react_scroll_to_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to_component__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  componentDidMount() {\n    // Init\n    var container = document.getElementById(\'container\'),\n        inner = document.getElementById(\'inner\'); // Mouse\n\n    var mouse = {\n      _x: 0,\n      _y: 0,\n      x: 0,\n      y: 0,\n      updatePosition: function updatePosition(event) {\n        var e = event || window.event;\n        this.x = e.clientX - this._x;\n        this.y = (e.clientY - this._y) * -1;\n      },\n      setOrigin: function setOrigin(e) {\n        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);\n        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);\n      },\n      show: function show() {\n        return \'(\' + this.x + \', \' + this.y + \')\';\n      }\n    }; // Track the mouse position relative to the center of the container.\n\n    mouse.setOrigin(container); //----------------------------------------------------\n\n    var counter = 0;\n    var refreshRate = 10;\n\n    var isTimeToUpdate = function isTimeToUpdate() {\n      return counter++ % refreshRate === 0;\n    }; //----------------------------------------------------\n\n\n    var onMouseEnterHandler = function onMouseEnterHandler(event) {\n      update(event);\n    };\n\n    var onMouseLeaveHandler = function onMouseLeaveHandler() {\n      inner.style = \'\';\n    };\n\n    var onMouseMoveHandler = function onMouseMoveHandler(event) {\n      if (isTimeToUpdate()) {\n        update(event);\n      }\n    }; //----------------------------------------------------\n\n\n    var update = function update(event) {\n      mouse.updatePosition(event);\n      updateTransformStyle((mouse.y / inner.offsetHeight / 2).toFixed(2), (mouse.x / inner.offsetWidth / 2).toFixed(2));\n    };\n\n    var updateTransformStyle = function updateTransformStyle(x, y) {\n      var style = \'rotateX(\' + x + \'deg) rotateY(\' + y + \'deg)\';\n      inner.style.transform = style;\n      inner.style.webkitTransform = style;\n      inner.style.mozTranform = style;\n      inner.style.msTransform = style;\n      inner.style.oTransform = style;\n    }; //--------------------------------------------------------\n\n\n    container.onmousemove = onMouseMoveHandler;\n    container.onmouseleave = onMouseLeaveHandler;\n    container.onmouseenter = onMouseEnterHandler;\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "home"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#",\n      onClick: () => react_scroll_to_component__WEBPACK_IMPORTED_MODULE_4___default()(this.About, {\n        offset: 0,\n        align: \'top\',\n        duration: 1500\n      })\n    }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#",\n      onClick: () => react_scroll_to_component__WEBPACK_IMPORTED_MODULE_4___default()(this.Portfolio, {\n        offset: 0,\n        align: \'top\',\n        duration: 1500\n      })\n    }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#",\n      onClick: () => react_scroll_to_component__WEBPACK_IMPORTED_MODULE_4___default()(this.Contact, {\n        offset: 0,\n        align: \'top\',\n        duration: 1500\n      })\n    }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "home-text",\n      id: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "JOSEF ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "ADLAO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Web developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n      id: "inner",\n      src: "https://i.ibb.co/kXZ01Gp/birds.png"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "slanted-triangle-bottom"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "about",\n      ref: section => {\n        this.About = section;\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "about-heading"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "01"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About Me")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "skills"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "devicon-javascript-plain colored"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "devicon-jquery-plain-wordmark colored"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "devicon-react-original-wordmark colored"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "devicon-sass-original colored"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "devicon-php-plain colored"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "devicon-mysql-plain-wordmark colored"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "devicon-wordpress-plain-wordmark colored"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "about-text"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, _data_data__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"][1].about_h4text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _data_data__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"][1].about_text))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "portfolio",\n      ref: section => {\n        this.Portfolio = section;\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Portfolio__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "contact",\n      ref: section => {\n        this.Contact = section;\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "contact-heading"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "03"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "mailto:josef@josefadlao.com"\n    }, "josef@josefadlao.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "social"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "https://twitter.com/josefadlao"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fab fa-twitter-square"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "https://github.com/jadlao"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fab fa-github"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "https://www.linkedin.com/in/josefadlao/"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fab fa-linkedin"\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, "\\xA9 2019 Copyright. Josef Adlao"));\n  }\n\n}\n\nconst app = document.getElementById(\'app\');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), app);\n\n//# sourceURL=webpack:///./assets/js/components/App.js?');
    },
    "./assets/js/components/Portfolio.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Portfolio; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_portfolioData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/portfolioData */ "./assets/js/components/data/portfolioData.js");\n\n\nclass Portfolio extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {\n      name: \'Joe\'\n    };\n    this.loopProject = this.loopProject.bind(this);\n  }\n\n  loopProject() {\n    return _data_portfolioData__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].map((project, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "project-box",\n        key: index,\n        style: {\n          background: "url(\\"".concat(project.image, "\\") no-repeat center center")\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "grey-bg"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n        href: project.live_link,\n        target: "_blank"\n      }, "Live site")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n        href: project.code_link,\n        target: "_blank"\n      }, "View code")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Technologies: ", project.technologies), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n        className: "fa fa-angle-right"\n      })));\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "slanted-triangle-top"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "portfolio-heading"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "02"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Work")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "work"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "project-section"\n    }, this.loopProject())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "slanted-triangle-bottom"\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Portfolio.js?');
    },
    "./assets/js/components/data/data.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("var data = [{\n  info: {\n    email: 'josef@josefadlao.com',\n    twitter: 'https://twitter.com/josefadlao',\n    github: 'https://github.com/jadlao',\n    linkedin: 'https://www.linkedin.com/in/josefadlao/'\n  }\n}, {\n  job_title: 'Web Developer',\n  about_h4text: \"Hello, I'm Josef, a Web Developer based in Sydney\",\n  about_text: 'Coming from a background in science, I naturally enjoy solving problems and the technical side of things. I love using React for the frontend, and am always eager to learn more technologies. Currently, I am learning Ruby on Rails. When I am not coding, you can find me reading books on human nature, or chilling to the sounds of lo-fi music.'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (data);\n\n//# sourceURL=webpack:///./assets/js/components/data/data.js?");
    },
    "./assets/js/components/data/portfolioData.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("var portfolioData = [{\n  title: 'LuxRentals Real Estate Site',\n  live_link: 'https://jadlao-realestate.surge.sh/',\n  code_link: 'https://github.com/jadlao/react-realestate',\n  technologies: 'React, SASS',\n  image: 'https://image.ibb.co/mRRA8y/thumb_luxrentals.png'\n}, {\n  title: 'Vivienne Online Store',\n  live_link: 'https://wp-ecommerce.josefadlao.com/',\n  code_link: 'https://wp-ecommerce.josefadlao.com/',\n  technologies: 'WordPress, Woocommerce',\n  image: 'https://i.ibb.co/Trs3bBz/thumb-vivienne.png'\n}, {\n  title: 'SushiEATS Restaurant Site',\n  live_link: 'https://wp-sushi.josefadlao.com/',\n  code_link: 'https://github.com/jadlao/wp-sushisite',\n  technologies: 'WordPress, PHP',\n  image: 'https://i.ibb.co/wz2fYF7/thumb-sushi.png'\n}, {\n  title: 'Spotify Landing Page',\n  live_link: 'https://jadlao-spotify.surge.sh/',\n  code_link: 'https://github.com/jadlao/spotify-clone',\n  technologies: 'React, SASS',\n  image: 'https://image.ibb.co/fSR5qS/thumb_spotify.png'\n}, // {\n// \ttitle: 'MySatoshiConverter',\n// \tlive_link: 'https://mysatoshiconverter.com/',\n// \tcode_link: 'https://mysatoshiconverter.com/',\n// \ttechnologies: 'React, SASS, REST APIs',\n// \timage: 'https://image.ibb.co/eUnZjn/thumb-mysatoshi.png'\n// },\n{\n  title: 'Australian Open Promotional Email',\n  live_link: 'https://jadlao-aoemail.surge.sh/',\n  code_link: 'https://github.com/jadlao/ausopen-email',\n  technologies: 'HTML, CSS',\n  image: 'https://image.ibb.co/nO3n9y/thumb_aoemail.png'\n}, {\n  title: 'Bondi Birch Promotional Email',\n  live_link: 'https://jadlao-bbemail.surge.sh/',\n  code_link: 'https://github.com/jadlao/furniture-email',\n  technologies: 'HTML, CSS',\n  image: 'https://image.ibb.co/jAKpUT/thumb_bondibirchemail.png'\n}, {\n  title: 'HotelDeals Promotional Email',\n  live_link: 'https://jadlao-hotelemail.surge.sh/',\n  code_link: 'https://github.com/jadlao/hotel-email',\n  technologies: 'HTML, CSS',\n  image: 'https://image.ibb.co/dNKCio/thumb-hoteldealsemail.png'\n}, {\n  title: 'National Geographic Newsletter Email',\n  live_link: 'https://jadlao-newsemail.surge.sh/',\n  code_link: 'https://github.com/jadlao/newsletter-email',\n  technologies: 'HTML, CSS',\n  image: 'https://image.ibb.co/jwQUUT/thumb-natgeoemail.png'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (portfolioData);\n\n//# sourceURL=webpack:///./assets/js/components/data/portfolioData.js?");
    }
});