'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _glam = require('glam');

var _glam2 = _interopRequireDefault(_glam);

var _tabbar = require('./components/tabbar');

var _tabbar2 = _interopRequireDefault(_tabbar);

var _formpage = require('./components/formpage');

var _formpage2 = _interopRequireDefault(_formpage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			page: 'form'
		}, _this.formClick = function () {
			_this.setState(function (pstate) {
				return {
					page: 'form'
				};
			});
		}, _this.statsClick = function () {
			_this.setState(function (pstate) {
				return {
					page: 'stats'
				};
			});
		}, _this.render = function () {
			return _react2.default.createElement(
				'main',
				{ className: 'center mw7-ns' },
				_react2.default.createElement(
					'h1',
					null,
					'Habitmeter'
				),
				_react2.default.createElement(_tabbar2.default, { page: _this.state.page, formClick: _this.formClick, statsClick: _this.statsClick }),
				_this.state.page === 'form' && _react2.default.createElement(_formpage2.default, null),
				_this.state.page === 'stats' && _react2.default.createElement(
					'section',
					{ className: 'stats' },
					'Stats'
				)
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return App;
}(_react.Component);

exports.default = App;


try {
	if (window) {
		(0, _reactDom.render)(_react2.default.createElement(App, null), document.querySelector('#app'));
	}
} catch (e) {
	// do nothing
}