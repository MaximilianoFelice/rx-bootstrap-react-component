'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _rxReact = require('rx-react');

var _rxReact2 = _interopRequireDefault(_rxReact);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = exports.Tab = function (_BaseComponent) {
  _inherits(Tab, _BaseComponent);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: 'className',
    value: function className() {
      return 'tab-pane ' + (this.props.active && "active") + ' ' + this.props.paneClassName;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className() },
        this.props.children
      );
    }
  }]);

  return Tab;
}(_base2.default);

var Tabs = exports.Tabs = function (_BaseComponent2) {
  _inherits(Tabs, _BaseComponent2);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));

    _this2.state.tabs = _this2.props.children;

    _this2.state.activeTab = _this2.state.tabs.find(function (c) {
      return c.props.active;
    }) || _this2.state.tabs[0];

    _this2.props.observeTransitionsOn.filter(function (e) {
      return e.name === "previousTab";
    }).subscribe(function (_) {
      return _this2.moveTabBackwards();
    });

    _this2.props.observeTransitionsOn.filter(function (e) {
      return e.name === "nextTab";
    }).subscribe(function (_) {
      return _this2.moveTabForwards();
    });
    return _this2;
  }

  _createClass(Tabs, [{
    key: 'moveTabForwards',
    value: function moveTabForwards() {
      this.moveTab(1);
    }
  }, {
    key: 'moveTabBackwards',
    value: function moveTabBackwards() {
      this.moveTab(-1);
    }
  }, {
    key: '_moveTab',
    value: function _moveTab(units) {
      var _this3 = this;

      var activeIndex = this.state.tabs.findIndex(function (tab) {
        return tab === _this3.state.activeTab;
      });
      this.setState({ activeTab: this.state.tabs[activeIndex + units] });
    }
  }, {
    key: '_renderNav',
    value: function _renderNav() {
      var _this4 = this;

      if (!this.state.tabs) return;

      return _react2.default.createElement(
        'ul',
        { className: 'nav nav-tabs ' + this.props.className },
        this.state.tabs.map(function (t, i) {
          return _this4._renderNavLink(t, i);
        })
      );
    }
  }, {
    key: '_renderNavLink',
    value: function _renderNavLink(tab, i) {
      var _this5 = this;

      return _react2.default.createElement(
        'li',
        {
          key: 'tabs-nav-link-' + i + '-' + tab.props.name,
          className: (this.state.activeTab === tab && "active") + ' ' + tab.props.className },
        _react2.default.createElement(
          'a',
          {
            onClick: function onClick(_) {
              return _this5.setState({ activeTab: tab });
            },
            style: { cursor: "pointer" } },
          tab.props.name
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return _react2.default.createElement(
        'div',
        null,
        this._renderNav(),
        _react2.default.createElement(
          'div',
          { className: 'tab-content ' + this.props.paneClassName },
          this.state.tabs.map(function (tab) {
            return _react2.default.cloneElement(tab, { active: tab == _this6.state.activeTab, key: tab.props.name });
          })
        )
      );
    }
  }]);

  return Tabs;
}(_base2.default);