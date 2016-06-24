'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = exports.TextareaField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _rxReact = require('rx-react');

var _rxReact2 = _interopRequireDefault(_rxReact);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _inputs = require('./inputs');

var _inputs2 = _interopRequireDefault(_inputs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextareaField = exports.TextareaField = function (_UserEditableField) {
  _inherits(TextareaField, _UserEditableField);

  function TextareaField() {
    _classCallCheck(this, TextareaField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextareaField).apply(this, arguments));
  }

  _createClass(TextareaField, [{
    key: 'renderField',
    value: function renderField() {
      return _react2.default.createElement(Textarea, _extends({ observeOn: this.inputObs }, this.state.inputProps));
    }
  }]);

  return TextareaField;
}(_inputs2.default);

var Textarea = exports.Textarea = function (_BaseComponent) {
  _inherits(Textarea, _BaseComponent);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Textarea).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'textarea',
        _extends({ className: this.state.className || "form-control" }, this.state),
        this.state.content || this.props.children
      );
    }
  }]);

  return Textarea;
}(_base2.default);