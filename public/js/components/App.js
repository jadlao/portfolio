webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    _classCallCheck(this, Contact);

    var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this));

    _this.state = {
      name: '',
      email: '',
      message: '',
      isSubmitted: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Contact, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(_extends({ 'form-name': 'contact' }, this.state))
      }).then(function () {
        _this2.setState({
          isSubmitted: true,
          name: '',
          email: '',
          message: ''
        }, console.log(_this2.state));
      }).catch(function (error) {
        return alert(error);
      });

      e.preventDefault();
      // clear form
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          name = _state.name,
          email = _state.email,
          message = _state.message;

      return _react2.default.createElement(
        'div',
        { className: 'contact-section' },
        _react2.default.createElement(
          'div',
          { className: 'contact' },
          _react2.default.createElement(
            'h5',
            null,
            'Contact me'
          ),
          _react2.default.createElement(
            'div',
            { className: 'contact-form' },
            _react2.default.createElement(
              'form',
              { onSubmit: this.handleSubmit },
              _react2.default.createElement('input', { type: 'hidden', name: 'form-name', value: 'contact' }),
              _react2.default.createElement('input', {
                type: 'text',
                name: 'name',
                value: name,
                placeholder: 'Your Name',
                onChange: this.handleChange
              }),
              _react2.default.createElement('input', {
                type: 'email',
                name: 'email',
                value: email,
                placeholder: 'Your Email',
                onChange: this.handleChange,
                required: true
              }),
              _react2.default.createElement('textarea', {
                name: 'message',
                value: message,
                placeholder: 'Your Message',
                rows: '5',
                onChange: this.handleChange
              }),
              _react2.default.createElement(
                'button',
                {
                  type: 'submit',
                  className: this.state.isSubmitted ? 'sent' : ''
                },
                'Send Message'
              )
            )
          )
        )
      );
    }
  }]);

  return Contact;
}(_react.Component);

exports.default = Contact;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(67);

var _data = __webpack_require__(66);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'profile-section' },
        _react2.default.createElement(
          'div',
          { className: 'profile' },
          _react2.default.createElement(
            'h1',
            null,
            'Josef Adlao'
          ),
          _react2.default.createElement(
            'h5',
            null,
            _data2.default[1].job_title
          ),
          _react2.default.createElement(
            'p',
            null,
            _data2.default[1].home_text
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'primary-btn', to: '/portfolio' },
            _react2.default.createElement(
              'span',
              null,
              'Portfolio'
            )
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'ghost-btn', to: '/contact' },
            _react2.default.createElement(
              'span',
              null,
              'Contact'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(69);

var _portfolioData = __webpack_require__(69);

var _portfolioData2 = _interopRequireDefault(_portfolioData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_Component) {
  _inherits(Portfolio, _Component);

  function Portfolio() {
    _classCallCheck(this, Portfolio);

    var _this = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this));

    _this.state = {};
    _this.loopProject = _this.loopProject.bind(_this);
    return _this;
  }

  _createClass(Portfolio, [{
    key: 'loopProject',
    value: function loopProject() {
      return _portfolioData2.default.map(function (project, index) {
        return _react2.default.createElement(
          'div',
          {
            className: 'project-box',
            key: index,
            style: {
              background: 'url("' + project.image + '") no-repeat center center'
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'grey-bg' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { href: project.live_link, target: '_blank' },
                'Live site'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { href: project.code_link, target: '_blank' },
                'View code'
              )
            ),
            _react2.default.createElement(
              'h4',
              null,
              project.title
            ),
            _react2.default.createElement('i', { className: 'fa fa-angle-right' })
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'portfolio-section' },
        _react2.default.createElement(
          'div',
          { className: 'portfolio' },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            _react2.default.createElement(
              'h5',
              null,
              'Latest works'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'work-section' },
            _react2.default.createElement(
              'div',
              { className: 'project-section' },
              this.loopProject()
            )
          )
        )
      );
    }
  }]);

  return Portfolio;
}(_react.Component);

exports.default = Portfolio;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(5);

function Close (props) {
    return React.createElement("svg",props,[React.createElement("style",{"type":"text/css","key":0},"\n\t.st0{fill:none;stroke:#577D91;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n"),React.createElement("g",{"key":1},[React.createElement("polyline",{"className":"st0","points":"2.2,33.1 17.2,18.1 2.2,3.1 \t","key":0}),React.createElement("polyline",{"className":"st0","points":"32.2,3.1 17.2,18.1 32.2,33.1 \t","key":1})])]);
}

Close.displayName = "Close";

Close.defaultProps = {"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 35 35","style":{"enableBackground":"new 0 0 35 35"},"xmlSpace":"preserve"};

module.exports = Close;

Close.default = Close;


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(5);

function Hamburger (props) {
    return React.createElement("svg",props,[React.createElement("style",{"type":"text/css","key":0},"\n\t.st0{fill:none;stroke:#577D91;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n"),React.createElement("g",{"key":1},[React.createElement("g",{"key":0},[React.createElement("line",{"className":"st0","x1":"2.7","y1":"7","x2":"32.7","y2":"7","key":0}),React.createElement("line",{"className":"st0","x1":"2.7","y1":"18","x2":"32.7","y2":"18","key":1}),React.createElement("line",{"className":"st0","x1":"2.7","y1":"29","x2":"32.7","y2":"29","key":2})]),React.createElement("line",{"className":"st0","x1":"2.7","y1":"18","x2":"32.7","y2":"18","key":1})])]);
}

Hamburger.displayName = "Hamburger";

Hamburger.defaultProps = {"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 35 35","style":{"enableBackground":"new 0 0 35 35"},"xmlSpace":"preserve"};

module.exports = Hamburger;

Hamburger.default = Hamburger;


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(5);

function Icon (props) {
    return React.createElement("svg",props,[React.createElement("style",{"type":"text/css","key":0},"\n\t.st0{fill:#577D91;}\n\t.st1{fill:none;stroke:#ED6C56;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}\n\t.st2{fill:none;stroke:#FCF1D1;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}\n\t.st3{fill:none;stroke:#FCF1D1;stroke-width:2;}\n\t.st4{fill:none;stroke:#FCF1D1;stroke-width:2;stroke-linejoin:round;}\n"),React.createElement("circle",{"className":"st0","cx":"62","cy":"62","r":"60","key":1}),React.createElement("g",{"key":2},[React.createElement("path",{"className":"st1","d":"M80.1,52.2c1.1,0,2.1,0,3.2,0","key":0}),React.createElement("path",{"className":"st1","d":"M63.1,52.2c3.9,0,7.8,0,11.8,0","key":1}),React.createElement("rect",{"x":"36","y":"43.7","className":"st2","width":"53.1","height":"31.7","key":2}),React.createElement("path",{"className":"st3","d":"M93.4,80.6V41.1c0-1.4-0.9-2.5-2.1-2.5H33.6c-1.1,0-2.1,1.1-2.1,2.5v39.5H93.4z","key":3}),React.createElement("path",{"className":"st3","d":"M29.5,80.7v3.5c0,1.4,0.9,2.5,2.1,2.5h61.9c1.1,0,2.1-1.1,2.1-2.5v-3.5H29.5z","key":4}),React.createElement("polygon",{"className":"st4","points":"56.6,83.7 68.4,83.7 69.8,80.6 55.2,80.6 \t","key":5})])]);
}

Icon.displayName = "Icon";

Icon.defaultProps = {"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 124 124","style":{"enableBackground":"new 0 0 124 124"},"xmlSpace":"preserve"};

module.exports = Icon;

Icon.default = Icon;


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(67);

var _data = __webpack_require__(66);

var _data2 = _interopRequireDefault(_data);

var _Home = __webpack_require__(120);

var _Home2 = _interopRequireDefault(_Home);

var _Portfolio = __webpack_require__(121);

var _Portfolio2 = _interopRequireDefault(_Portfolio);

var _Contact = __webpack_require__(119);

var _Contact2 = _interopRequireDefault(_Contact);

var _laptopIcon = __webpack_require__(125);

var _laptopIcon2 = _interopRequireDefault(_laptopIcon);

var _hamburger = __webpack_require__(124);

var _hamburger2 = _interopRequireDefault(_hamburger);

var _close = __webpack_require__(123);

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      menu: false
    };
    _this.toggleMenu = _this.toggleMenu.bind(_this);
    _this.cancelMenu = _this.cancelMenu.bind(_this);
    _this.switchIcons = _this.switchIcons.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'toggleMenu',
    value: function toggleMenu() {
      var _this2 = this;

      var currentState = this.state.menu;
      this.setState({
        menu: !currentState
      }, function () {
        console.log(_this2.state);
      });
    }
  }, {
    key: 'cancelMenu',
    value: function cancelMenu() {
      this.setState({
        menu: false
      });
    }
  }, {
    key: 'switchIcons',
    value: function switchIcons() {
      switch (this.state.menu) {
        case true:
          return _react2.default.createElement(_close2.default, { className: 'close' });
        case false:
          return _react2.default.createElement(_hamburger2.default, { className: 'hamburger' });
        default:
          return _react2.default.createElement(_hamburger2.default, { className: 'hamburger' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home ' + (this.state.menu ? 'menu-active' : '') },
        _react2.default.createElement(
          'div',
          { className: 'top-nav-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'menu-icon', onClick: this.toggleMenu },
            this.switchIcons()
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'menu' },
          _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'menu-link', onClick: this.cancelMenu, to: '/' },
              _react2.default.createElement(
                'h5',
                null,
                'Home'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              {
                className: 'menu-link',
                onClick: this.cancelMenu,
                to: '/portfolio'
              },
              _react2.default.createElement(
                'h5',
                null,
                'Portfolio'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'menu-link', onClick: this.cancelMenu, to: '/contact' },
              _react2.default.createElement(
                'h5',
                null,
                'Contact'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'info-section' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'logo-link', to: '/' },
            _react2.default.createElement(
              'div',
              { className: 'logo' },
              _react2.default.createElement(_laptopIcon2.default, { className: 'icon' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'info-box' },
            _react2.default.createElement(
              'h5',
              null,
              'Technologies'
            ),
            _react2.default.createElement(
              'p',
              null,
              'HTML5'
            ),
            _react2.default.createElement(
              'p',
              null,
              'CSS3'
            ),
            _react2.default.createElement(
              'p',
              null,
              'SASS'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Javascript (ES5, ES6)'
            ),
            _react2.default.createElement(
              'p',
              null,
              'jQuery'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Bootstrap'
            ),
            _react2.default.createElement(
              'p',
              null,
              'React'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Gulp'
            ),
            _react2.default.createElement(
              'p',
              null,
              'PHP'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Laravel'
            ),
            _react2.default.createElement(
              'p',
              null,
              'MySQL'
            ),
            _react2.default.createElement(
              'h5',
              { className: 'contact' },
              'Email'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { href: 'mailto:josef@josefadlao.com', target: '_blank' },
                _data2.default[0].info.email
              )
            ),
            _react2.default.createElement(
              'h5',
              null,
              'Find Me On'
            ),
            _react2.default.createElement(
              'div',
              { className: 'icon-section' },
              _react2.default.createElement(
                'a',
                { href: _data2.default[0].info.twitter, target: '_blank' },
                _react2.default.createElement('i', { className: 'fa fa-twitter', 'aria-hidden': 'true' })
              ),
              _react2.default.createElement(
                'a',
                { href: _data2.default[0].info.github, target: '_blank' },
                _react2.default.createElement('i', { className: 'fa fa-github', 'aria-hidden': 'true' })
              ),
              _react2.default.createElement(
                'a',
                { href: _data2.default[0].info.linkedin, target: '_blank' },
                _react2.default.createElement('i', { className: 'fa fa-linkedin', 'aria-hidden': 'true' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'content-area' },
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/portfolio', component: _Portfolio2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _Contact2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.HashRouter,
  null,
  _react2.default.createElement(App, null)
), app);

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = [{
  info: {
    email: 'josef@josefadlao.com',
    twitter: 'https://twitter.com/josefadlao',
    github: 'https://github.com/jadlao',
    linkedin: 'https://www.linkedin.com/in/josefadlao/'
  }
}, {
  job_title: 'Web Developer',
  home_text: "Hi, my name is Josef. This is my page and I'm a self-taught web developer from Sydney, Australia. Coming from a background in science, I naturally enjoy solving problems and the tech side of things. I love using React for the frontend, and am currently learning more about the backend using PHP and Laravel."
}];

exports.default = data;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var portfolioData = [{
  title: 'MySatoshiConverter',
  live_link: 'https://mysatoshiconverter.com/',
  code_link: 'https://mysatoshiconverter.com/',
  image: 'https://image.ibb.co/eUnZjn/thumb_mysatoshi.png'
}, {
  title: 'Olooq Landing Page',
  live_link: 'https://josefadlao.com/olooqLandingPage/',
  code_link: 'https://github.com/jadlao/olooqLandingPage',
  image: 'https://image.ibb.co/nq93c7/thumb_olooq.png'
}, {
  title: 'Spotify Clone',
  live_link: 'https://jadlao-spotify.surge.sh/',
  code_link: 'https://github.com/jadlao/spotify-clone',
  image: 'https://image.ibb.co/fSR5qS/thumb_spotify.png'
}, {
  title: 'LikeHome Website',
  live_link: 'https://josefadlao.com/likehome/',
  code_link: 'https://github.com/jadlao/likehome',
  image: 'https://image.ibb.co/nBAWrc/thumb_likehome.png'
}];

exports.default = portfolioData;

/***/ })

},[126]);