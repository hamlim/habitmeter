'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glam = require('glam');

var _glam2 = _interopRequireDefault(_glam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tabs = (0, _glam2.default)('css-hqm0qm', []);

var tab = (0, _glam2.default)('css-1kljcur', []);
var activeTab = (0, _glam2.default)('css-12uogqc', []);

var tabBtn = (0, _glam2.default)('css-2ibi1i', []);

var Tab = function Tab(_ref) {
	var isActive = _ref.isActive,
	    children = _ref.children,
	    onClick = _ref.onClick;
	return _react2.default.createElement(
		'li',
		{ className: isActive ? activeTab : tab },
		_react2.default.createElement(
			'button',
			{ className: tabBtn, onClick: onClick },
			children
		)
	);
};

var TabBar = function TabBar(_ref2) {
	var page = _ref2.page,
	    formClick = _ref2.formClick,
	    statsClick = _ref2.statsClick;
	return _react2.default.createElement(
		'ul',
		{ className: tabs },
		_react2.default.createElement(
			Tab,
			{ isActive: page === 'form', onClick: formClick },
			'Form'
		),
		_react2.default.createElement(
			Tab,
			{ isActive: page === 'stats', onClick: statsClick },
			'Stats'
		)
	);
};

exports.default = TabBar;