'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _rxReact = require('rx-react');

var _rxReact2 = _interopRequireDefault(_rxReact);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputField = function (_RxReact$Component) {
  _inherits(InputField, _RxReact$Component);

  function InputField() {
    _classCallCheck(this, InputField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputField).apply(this, arguments));
  }

  _createClass(InputField, [{
    key: 'getStateStream',
    value: function getStateStream() {
      return this.props.observeOn.map(function (x) {
        return x.data;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', (0, _helpers.propagable)(this.props, this.state));
    }
  }]);

  return InputField;
}(_rxReact2.default.Component);

InputField.defaultProps = { observeOn: new _rx2.default.Subject(), publishOn: new _rx2.default.Subject() };
exports.default = InputField;