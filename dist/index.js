'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _secrets = require('./secrets.js');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _app = require('./client/app.js');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Airtable = require('airtable');


var app = (0, _express2.default)();
Airtable.configure({
	apiKey: _secrets.AIRTABLE_API_KEY
});
var base = Airtable.base('appORpAmHJ6mE2tql');

app.use('/static', _express2.default.static('dist/public'));
app.use(_bodyParser2.default.json());

app.get('/', function (req, res) {
	res.send('\n\t<html lang="en">\n\t\t<head>\n\t\t\t<title>Habitmeter</title>\n\t\t\t<link rel="stylesheet" href="/static/app.css" />\n\t\t\t<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.7.4/tachyons.css" />\n\t\t</head>\n\t\t<body>\n\t\t\t<div id="app">' + (0, _server.renderToString)(_react2.default.createElement(_app2.default, null)) + '</div>\n\t\t\t<script src="/static/bundle.js" defer></script>\n\t\t</body>\n\t</html>\n');
}

/**
 * Post endpoint
 */
);app.post('/update', function (req, res) {
	if (req.body.hasSubmitted) {
		base('Table 1').replace(req.body.recId, {
			'15 minutes of yoga': req.body.yoga,
			'30 Sit Ups': req.body.situps,
			'Drink 64oz of water': req.body.water,
			'Walk 8000 steps': req.body.steps,
			Floss: req.body.floss,
			'Date Done': new Date().toDateString()
		}, function (err, record) {
			if (err) {
				res.send({ success: false, err: err });
				console.error(err);
				return;
			}
			res.send(JSON.stringify({ success: true, recId: record.getId() }));
		});
	} else {
		base('Table 1').create({
			'15 minutes of yoga': req.body.yoga,
			'30 Sit Ups': req.body.situps,
			'Drink 64oz of water': req.body.water,
			'Walk 8000 steps': req.body.steps,
			Floss: req.body.floss,
			'Date Done': new Date().toDateString()
		}, function (err, record) {
			if (err) {
				res.send({ success: false, err: err });
				console.error(err);
				return;
			}
			res.send(JSON.stringify({ success: true, recId: record.getId() }));
		});
	}
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});