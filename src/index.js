import express from 'express'
const Airtable = require('airtable')
import { AIRTABLE_API_KEY } from './secrets.js'
import React from 'react'
import { renderToString } from 'react-dom/server'

import bodyParser from 'body-parser'

import App from './client/app.js'

const app = express()
Airtable.configure({
	apiKey: AIRTABLE_API_KEY,
})
const base = Airtable.base('appORpAmHJ6mE2tql')

app.use('/static', express.static('dist/public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send(`
	<html lang="en">
		<head>
			<title>Habitmeter</title>
			<link rel="stylesheet" href="/static/app.css" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.7.4/tachyons.css" />
		</head>
		<body>
			<div id="app">${renderToString(<App />)}</div>
			<script src="/static/bundle.js" defer></script>
		</body>
	</html>
`)
})

app.post('/update', (req, res) => {
	if (req.body.hasSubmitted) {
		base('Table 1').replace(
			req.body.recId,
			{
				'15 minutes of yoga': req.body.yoga,
				'30 Sit Ups': req.body.situps,
				'Drink 64oz of water': req.body.water,
				'Walk 8000 steps': req.body.steps,
				Floss: req.body.floss,
				'Date Done': new Date().toDateString(),
			},
			(err, record) => {
				if (err) {
					res.send({ success: false, err })
					console.error(err)
					return
				}
				res.send(JSON.stringify({ success: true, recId: record.getId() }))
			},
		)
	} else {
		base('Table 1').create(
			{
				'15 minutes of yoga': req.body.yoga,
				'30 Sit Ups': req.body.situps,
				'Drink 64oz of water': req.body.water,
				'Walk 8000 steps': req.body.steps,
				Floss: req.body.floss,
				'Date Done': new Date().toDateString(),
			},
			(err, record) => {
				if (err) {
					res.send({ success: false, err })
					console.error(err)
					return
				}
				res.send(JSON.stringify({ success: true, recId: record.getId() }))
			},
		)
	}
})

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})
