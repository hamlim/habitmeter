import React from 'react'
import css from 'glam'

const tabs = css`
	display: flex;
	width: 100%;
	height: 5rem;
	align-items: center;
	justify-content: space-around;
`

const tab = css`
	display: inline-flex;
	border-bottom: solid 2px transparent;
`
const activeTab = css`
	display: inline-flex;
	border-bottom: solid 2px var(--green);
`

const tabBtn = css`
	appearance: none;
	border: 0;
	background-color: var(--white);
	color: var(--black);
	display: inline-flex;
	padding: .5rem 3rem;
	font-size: 1.5rem;
	font-weight: bold;
`

const Tab = ({ isActive, children, onClick }) =>
	<li className={isActive ? activeTab : tab}>
		<button className={tabBtn} onClick={onClick}>{children}</button>
	</li>

const TabBar = ({ page, formClick, statsClick }) =>
	<ul className={tabs}>
		<Tab isActive={page === 'form'} onClick={formClick}>Form</Tab>
		<Tab isActive={page === 'stats'} onClick={statsClick}>Stats</Tab>
	</ul>

export default TabBar
