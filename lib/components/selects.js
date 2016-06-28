'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.SelectField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _rxReact = require('rx-react');

var _rxReact2 = _interopRequireDefault(_rxReact);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _helpers = require('../helpers');

var _inputs = require('./inputs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectField = exports.SelectField = function (_UserEditableField) {
  _inherits(SelectField, _UserEditableField);

  function SelectField() {
    _classCallCheck(this, SelectField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectField).apply(this, arguments));
  }

  _createClass(SelectField, [{
    key: 'renderField',
    value: function renderField() {
      return _react2.default.createElement(
        Select,
        _extends({ observeOn: this.inputObs }, this.state.inputProps),
        this.props.children
      );
    }
  }]);

  return SelectField;
}(_inputs.UserEditableField);

var Select = exports.Select = function (_BaseComponent) {
  _inherits(Select, _BaseComponent);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Select).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'select',
        (0, _helpers.propagable)(this.props, this.state),
        this.props.children
      );
    }
  }]);

  return Select;
}(_base2.default);