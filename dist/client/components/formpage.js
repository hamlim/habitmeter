'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glam = require('glam');

var _glam2 = _interopRequireDefault(_glam);

require('whatwg-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formWrapper = (0, _glam2.default)('css-1pre7q0', []);

var title = (0, _glam2.default)('css-mrm4rd', []);

var label = (0, _glam2.default)('css-1woauic', []);

var checkBox = (0, _glam2.default)('css-6f471p', []);
var btn = (0, _glam2.default)('css-145791o', []);

var FormPage = function (_Component) {
	_inherits(FormPage, _Component);

	function FormPage() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, FormPage);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormPage.__proto__ || Object.getPrototypeOf(FormPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			situps: false,
			yoga: false,
			water: false,
			steps: false,
			floss: false
		}, _this.handleUpdateField = function (key) {
			return function (e) {
				_this.setState(function (pState) {
					return _defineProperty({}, key, !pState[key]);
				});
			};
		}, _this.resetState = function (r) {
			if (r.success) {
				_this.setState({ hasSubmitted: true, recId: r.recId });
			} else {
				console.error(r);
			}
		}, _this.postToServer = function (e) {
			e.preventDefault();
			var headers = new Headers({
				'Content-Type': 'application/json'
			});
			fetch('/update', {
				method: 'POST',
				body: JSON.stringify(_this.state),
				headers: headers
			}).then(function (r) {
				return r.json();
			}).then(_this.resetState).catch(console.error);
		}, _this.handleSubmit = function () {}, _this.render = function () {
			return _react2.default.createElement(
				'section',
				{ className: formWrapper },
				_react2.default.createElement(
					'form',
					{
						ref: function ref(node) {
							_this.form = node;
						},
						action: '/update',
						onSubmit: function onSubmit(e) {
							e.preventDefault();
							_this.handleSubmit();
						}
					},
					_react2.default.createElement(
						'h3',
						{ className: title },
						'What did you accomplish today?'
					),
					_react2.default.createElement(
						'label',
						{ className: label, htmlFor: 'situps' },
						_react2.default.createElement('input', {
							className: checkBox,
							type: 'checkbox',
							id: 'situps',
							name: 'situps',
							checked: _this.state.situps,
							onChange: _this.handleUpdateField('situps')
						}),
						_react2.default.createElement(
							'span',
							{ className: 'labelText' },
							'30 Situps:'
						)
					),
					_react2.default.createElement(
						'label',
						{ className: label, htmlFor: 'yoga' },
						_react2.default.createElement('input', {
							className: checkBox,
							type: 'checkbox',
							id: 'yoga',
							name: 'yoga',
							checked: _this.state.yoga,
							onChange: _this.handleUpdateField('yoga')
						}),
						_react2.default.createElement(
							'span',
							{ className: 'labelText' },
							'15 Minutes of Yoga:'
						)
					),
					_react2.default.createElement(
						'label',
						{ className: label, htmlFor: 'water' },
						_react2.default.createElement('input', {
							className: checkBox,
							type: 'checkbox',
							id: 'water',
							name: 'water',
							checked: _this.state.water,
							onChange: _this.handleUpdateField('water')
						}),
						_react2.default.createElement(
							'span',
							{ className: 'labelText' },
							'64oz of Water:'
						)
					),
					_react2.default.createElement(
						'label',
						{ className: label, htmlFor: 'steps' },
						_react2.default.createElement('input', {
							className: checkBox,
							type: 'checkbox',
							id: 'steps',
							name: 'steps',
							checked: _this.state.steps,
							onChange: _this.handleUpdateField('steps')
						}),
						_react2.default.createElement(
							'span',
							{ className: 'labelText' },
							'8000 Steps:'
						)
					),
					_react2.default.createElement(
						'label',
						{ className: label, htmlFor: 'floss' },
						_react2.default.createElement('input', {
							className: checkBox,
							type: 'checkbox',
							id: 'floss',
							name: 'floss',
							checked: _this.state.floss,
							onChange: _this.handleUpdateField('floss')
						}),
						_react2.default.createElement(
							'span',
							{ className: 'labelText' },
							'Floss:'
						)
					),
					_react2.default.createElement(
						'button',
						{ className: btn, onClick: _this.postToServer },
						'Submit'
					)
				)
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return FormPage;
}(_react.Component);

exports.default = FormPage;