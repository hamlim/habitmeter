import React, { Component } from 'react'
import css from 'glam'
import 'whatwg-fetch'

const formWrapper = css`
  border-radius: var(--radius);
  box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2);
`

const title = css`
  font-size: 1.6rem;
  padding: .5em;
`

const label = css`
  font-size: 1.2rem;
  display: block;
  padding: .5rem 2rem;
  position: relative;
`

const checkBox = css`
  appearance: none;
  border: solid 2px var(--darkGray);
  height: 1.2rem;
  width: 1.2rem;
  background-color: var(--white);
  border-radius: var(--radius);
  vertical-align: middle;
  margin-right: 1rem;
  outline: 0;
  &:checked {
    border-color: var(--green);
  }
  &:checked + .labelText:after {
    content: '';
    border-right: solid 5px var(--red);
    border-top: solid 5px var(--red);
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    width: 1.3rem;
    transform: rotate(-230deg) translateX(-50%);
    height: .8rem;
    position: absolute;
    left: 1.6rem;
    top: 46%;
  }
`
const btn = css`
  padding: .5rem 2rem;
  border: solid 2px var(--green);
  background-color: transparent;
  border-radius: var(--radius);
  color: var(--green);
  transition: background-color .5s ease, color .5s ease;
  margin: 1rem 1rem 2rem 2rem;
  &:hover,
  &:focus {
    background-color: var(--green);
    color: var(--white);
  }
`

class FormPage extends Component {
	state = {
		situps: false,
		yoga: false,
		water: false,
		steps: false,
		floss: false,
	}
	handleUpdateField = key => e => {
		this.setState(pState => ({
			[key]: !pState[key],
		}))
	}
	resetState = r => {
		if (r.success) {
			this.setState({ hasSubmitted: true, recId: r.recId })
		} else {
			console.error(r)
		}
	}
	postToServer = e => {
		e.preventDefault()
		const headers = new Headers({
			'Content-Type': 'application/json',
		})
		fetch('/update', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers,
		})
			.then(r => r.json())
			.then(this.resetState)
			.catch(console.error)
	}
	handleSubmit = () => {}
	render = () =>
		<section className={formWrapper}>
			<form
				ref={node => {
					this.form = node
				}}
				action="/update"
				onSubmit={e => {
					e.preventDefault()
					this.handleSubmit()
				}}
			>
				<h3 className={title}>What did you accomplish today?</h3>
				<label className={label} htmlFor="situps">
					<input
						className={checkBox}
						type="checkbox"
						id="situps"
						name="situps"
						checked={this.state.situps}
						onChange={this.handleUpdateField('situps')}
					/>
					<span className="labelText">30 Situps:</span>
				</label>
				<label className={label} htmlFor="yoga">
					<input
						className={checkBox}
						type="checkbox"
						id="yoga"
						name="yoga"
						checked={this.state.yoga}
						onChange={this.handleUpdateField('yoga')}
					/>
					<span className="labelText">15 Minutes of Yoga:</span>
				</label>
				<label className={label} htmlFor="water">
					<input
						className={checkBox}
						type="checkbox"
						id="water"
						name="water"
						checked={this.state.water}
						onChange={this.handleUpdateField('water')}
					/>
					<span className="labelText">64oz of Water:</span>
				</label>
				<label className={label} htmlFor="steps">
					<input
						className={checkBox}
						type="checkbox"
						id="steps"
						name="steps"
						checked={this.state.steps}
						onChange={this.handleUpdateField('steps')}
					/>
					<span className="labelText">8000 Steps:</span>
				</label>
				<label className={label} htmlFor="floss">
					<input
						className={checkBox}
						type="checkbox"
						id="floss"
						name="floss"
						checked={this.state.floss}
						onChange={this.handleUpdateField('floss')}
					/>
					<span className="labelText">Floss:</span>
				</label>
				<button className={btn} onClick={this.postToServer}>Submit</button>
			</form>
		</section>
}

export default FormPage
