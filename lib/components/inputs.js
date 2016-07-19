'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputErrors = exports.Input = exports.InputField = exports.UserEditableField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _rxReact = require('rx-react');

var _rxReact2 = _interopRequireDefault(_rxReact);

var _helpers = require('../helpers');

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserEditableField = exports.UserEditableField = function (_BaseComponent) {
  _inherits(UserEditableField, _BaseComponent);

  function UserEditableField(props) {
    _classCallCheck(this, UserEditableField);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserEditableField).call(this, props));

    _this.labelObs = _this.props.observeOn.map(function (state) {
      return state && state.labelProps;
    }).filter(_helpers.isDefined);

    _this.inputObs = _this.props.observeOn.map(function (state) {
      return state && state.inputProps;
    }).filter(_helpers.isDefined);

    _this.errorsObs = _this.props.observeOn.map(function (state) {
      return state.errors;
    }).filter(_helpers.isDefined).map(function (errors) {
      return { errors: errors };
    });
    return _this;
  }

  _createClass(UserEditableField, [{
    key: 'hasError',
    value: function hasError() {
      return this.state.errors && this.state.errors.length;
    }
  }, {
    key: 'renderField',
    value: function renderField() {
      return _react2.default.createElement('div', null);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'form-group ' + (this.hasError() && "has-error") },
        _react2.default.createElement(_label2.default, _extends({ observeOn: this.labelObs }, this.state.labelProps)),
        this.renderField(),
        _react2.default.createElement(InputErrors, { observeOn: this.errorsObs, errors: this.state.errors })
      );
    }
  }]);

  return UserEditableField;
}(_base2.default);

var InputField = exports.InputField = function (_UserEditableField) {
  _inherits(InputField, _UserEditableField);

  function InputField() {
    _classCallCheck(this, InputField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputField).apply(this, arguments));
  }

  _createClass(InputField, [{
    key: 'renderField',
    value: function renderField() {
      return _react2.default.createElement(Input, _extends({ observeOn: this.inputObs }, this.state.inputProps));
    }
  }]);

  return InputField;
}(UserEditableField);

var Input = exports.Input = function (_BaseComponent2) {
  _inherits(Input, _BaseComponent2);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', _extends({
        className: this.state.className || "form-control"
      }, (0, _helpers.propagable)(this.props, this.state)));
    }
  }]);

  return Input;
}(_base2.default);

var InputErrors = exports.InputErrors = function (_BaseComponent3) {
  _inherits(InputErrors, _BaseComponent3);

  function InputErrors() {
    _classCallCheck(this, InputErrors);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputErrors).apply(this, arguments));
  }

  _createClass(InputErrors, [{
    key: 'renderErrorMessage',
    value: function renderErrorMessage(str, i) {
      return _react2.default.createElement(
        'li',
        { key: 'error-message-' + i },
        str
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var errors = (0, _helpers.isDefined)(this.state.errors) && this.state.errors.map(this.renderErrorMessage);

      return _react2.default.createElement(
        'span',
        { className: 'help-block' },
        _react2.default.createElement(
          'ul',
          null,
          errors
        )
      );
    }
  }]);

  return InputErrors;
}(_base2.default);