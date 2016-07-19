'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLoader = exports.Button = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _reactProgressButton = require('react-progress-button');

var _reactProgressButton2 = _interopRequireDefault(_reactProgressButton);

var _helpers = require('../helpers');

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FuncSubject = require('rx-react').FuncSubject;

var Button = exports.Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

    _this.buttonClicked = FuncSubject.create();
    _this.buttonClicked.subscribe(_this.props.onClick);
    return _this;
  }

  _createClass(Button, [{
    key: 'content',
    value: function content() {
      return this.props.text || this.props.children;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        _extends({}, (0, _helpers.propagable)(this.props, this.state, ["as", "text"]), {
          className: 'btn ' + this.props.className + ' btn-' + this.props.as,
          onClick: this.buttonClicked,
          type: this.props.type
        }),
        this.content()
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.defaultProps = {
  onClick: function onClick(event) {
    return console.log('I was clicked, but I had no default behaviour. I\'m: ' + event.target);
  },
  className: "",
  as: "default"
};
;

var ButtonLoader = exports.ButtonLoader = function (_BaseComponent) {
  _inherits(ButtonLoader, _BaseComponent);

  function ButtonLoader(props) {
    _classCallCheck(this, ButtonLoader);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonLoader).call(this, props));

    _this2.state.buttonRefName = _this2._buttonRandomRef();
    return _this2;
  }

  _createClass(ButtonLoader, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this3 = this;

      _get(Object.getPrototypeOf(ButtonLoader.prototype), 'componentWillMount', this).call(this);

      this.props.observeOn && this.props.observeOn.filter(function (x) {
        return x.action === "change";
      }).subscribe(function (x) {
        return _this3.fireAnimation(x.content);
      });
    }
  }, {
    key: '_buttonRandomRef',
    value: function _buttonRandomRef() {
      return 'buttonLoader-' + Math.floor(Math.random() * 10000);
    }
  }, {
    key: 'fireAnimation',
    value: function fireAnimation(animation) {
      this.refs[this.state.buttonRefName][animation]();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactProgressButton2.default,
        _extends({}, (0, _helpers.propagable)(this.props, {}), {
          ref: this.state.buttonRefName
        }),
        this.props.children
      );
    }
  }]);

  return ButtonLoader;
}(_base2.default);