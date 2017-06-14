import React, { Component } from 'react'
import { render } from 'react-dom'
import css from 'glam'

import TabBar from './components/tabbar'
import FormPage from './components/formpage'

class App extends Component {
	state = {
		page: 'form',
	}

	formClick = () => {
		this.setState(pstate => ({
			page: 'form',
		}))
	}
	statsClick = () => {
		this.setState(pstate => ({
			page: 'stats',
		}))
	}
	render = () =>
		<main className="center mw7-ns">
			<h1>Habitmeter</h1>
			<TabBar page={this.state.page} formClick={this.formClick} statsClick={this.statsClick} />
			{this.state.page === 'form' && <FormPage />}
			{this.state.page === 'stats' && <section className="stats">Stats</section>}
		</main>
}

export default App

try {
	if (window) {
		render(<App />, document.querySelector('#app'))
	}
} catch (e) {
	// do nothing
}
