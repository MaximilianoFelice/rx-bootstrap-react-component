'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.TabNavLink = exports.Tab = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

var TabNavLink = exports.TabNavLink = function (_BaseComponent2) {
  _inherits(TabNavLink, _BaseComponent2);

  function TabNavLink(props) {
    _classCallCheck(this, TabNavLink);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(TabNavLink).call(this, props));

    _this2.state.errors = false;
    return _this2;
  }

  _createClass(TabNavLink, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this3 = this;

      _get(Object.getPrototypeOf(TabNavLink.prototype), 'componentWillMount', this).call(this);

      this.props.observeErrorsOn && this.props.observeErrorsOn.subscribe(function (x) {
        return _this3.setState({ errors: !(x === undefined || x === null) });
      });
    }
  }, {
    key: 'errorClassName',
    value: function errorClassName() {
      return this.state.errors ? "error-tab" : "";
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        {
          className: (this.props.active && "active") + ' ' + this.props.className + ' ' + this.errorClassName()
        },
        this.props.children
      );
    }
  }]);

  return TabNavLink;
}(_base2.default);

var Tabs = exports.Tabs = function (_BaseComponent3) {
  _inherits(Tabs, _BaseComponent3);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));

    _this4.state.tabs = _this4.props.children;

    _this4.state.activeTab = _this4.state.tabs.find(function (c) {
      return c.props.active;
    }) || _this4.state.tabs[0];

    if (_this4.props.observeTransitionsOn) {
      _this4.props.observeTransitionsOn.filter(function (e) {
        return e.name === "previousTab";
      }).subscribe(function (_) {
        return _this4.moveTabBackwards();
      });

      _this4.props.observeTransitionsOn.filter(function (e) {
        return e.name === "nextTab";
      }).subscribe(function (_) {
        return _this4.moveTabForwards();
      });
    }
    return _this4;
  }

  _createClass(Tabs, [{
    key: 'moveTabForwards',
    value: function moveTabForwards() {
      this._moveTab(1);
    }
  }, {
    key: 'moveTabBackwards',
    value: function moveTabBackwards() {
      this._moveTab(-1);
    }
  }, {
    key: '_moveTab',
    value: function _moveTab(units) {
      var _this5 = this;

      var activeIndex = this.state.tabs.findIndex(function (tab) {
        return tab === _this5.state.activeTab;
      });
      this.setState({ activeTab: this.state.tabs[activeIndex + units] });
    }
  }, {
    key: '_renderNav',
    value: function _renderNav() {
      var _this6 = this;

      if (!this.state.tabs) return;

      return _react2.default.createElement(
        'ul',
        { className: 'nav nav-tabs ' + this.props.className },
        this.state.tabs.map(function (t, i) {
          return _this6._renderNavLink(t, i);
        })
      );
    }
  }, {
    key: '_renderNavLink',
    value: function _renderNavLink(tab, i) {
      var _this7 = this;

      return _react2.default.createElement(
        TabNavLink,
        {
          key: 'tabs-nav-link-' + i + '-' + tab.props.name,
          className: tab.props.className,
          active: this.state.activeTab === tab,
          observeErrorsOn: tab.props.observerErrorsOn
        },
        _react2.default.createElement(
          'a',
          {
            onClick: function onClick(_) {
              return _this7.setState({ activeTab: tab });
            },
            style: { cursor: "pointer" } },
          tab.props.name
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      return _react2.default.createElement(
        'div',
        null,
        this._renderNav(),
        _react2.default.createElement(
          'div',
          { className: 'tab-content ' + this.props.paneClassName },
          this.state.tabs.map(function (tab) {
            return _react2.default.cloneElement(tab, { active: tab == _this8.state.activeTab, key: tab.props.name });
          })
        )
      );
    }
  }]);

  return Tabs;
}(_base2.default);