'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = exports.ModalBody = exports.ModalHeader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateStreamMixin = require('rx-react').StateStreamMixin;

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Modal)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.componentWillMount = StateStreamMixin.componentWillMount, _this.componentWillUnMount = StateStreamMixin.componentWillUnMount, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'getStateStream',
    value: function getStateStream() {
      return this.props.observeOn;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.observeOn.subscribe(function (_) {
        return $(_reactDom2.default.findDOMNode(_this2.refs.ModalName)).modal();
      });
    }
  }, {
    key: 'header',
    value: function header() {
      if (this.state && this.state.header) return _react2.default.createElement(ModalHeader, { text: this.state.header() });
    }
  }, {
    key: 'body',
    value: function body() {
      if (this.state && this.state.body) return _react2.default.createElement(
        ModalBody,
        null,
        this.state.body()
      );
    }
  }, {
    key: 'footer',
    value: function footer() {
      if (this.state && this.state.footer) return _react2.default.createElement(ModalFooter, null);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'modal fade', tabindex: '-1', role: 'dialog', ref: 'ModalName' },
        _react2.default.createElement(
          'div',
          { className: 'modal-dialog' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            this.header(),
            this.body(),
            this.footer()
          )
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = {
  header: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
  body: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
  footer: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string])
};
exports.default = Modal;

var ModalHeader = exports.ModalHeader = function (_React$Component2) {
  _inherits(ModalHeader, _React$Component2);

  function ModalHeader() {
    _classCallCheck(this, ModalHeader);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalHeader).apply(this, arguments));
  }

  _createClass(ModalHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ModalHeader modal-header' },
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
          _react2.default.createElement(
            'span',
            { 'aria-hidden': 'true' },
            '×'
          )
        ),
        _react2.default.createElement(
          'h4',
          { className: 'modal-title' },
          this.props.text
        )
      );
    }
  }]);

  return ModalHeader;
}(_react2.default.Component);

var ModalBody = exports.ModalBody = function (_React$Component3) {
  _inherits(ModalBody, _React$Component3);

  function ModalBody() {
    _classCallCheck(this, ModalBody);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalBody).apply(this, arguments));
  }

  _createClass(ModalBody, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ModalBody modal-body' },
        this.props.children
      );
    }
  }]);

  return ModalBody;
}(_react2.default.Component);

var ModalFooter = exports.ModalFooter = function (_React$Component4) {
  _inherits(ModalFooter, _React$Component4);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFooter).apply(this, arguments));
  }

  _createClass(ModalFooter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ModalFooter modal-footer' },
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
          'Close'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'btn btn-primary' },
          'Save changes'
        )
      );
    }
  }]);

  return ModalFooter;
}(_react2.default.Component);