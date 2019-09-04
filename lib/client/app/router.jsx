import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './pages/Home'
import Layout from './Layout'

const App = () => (
	<Layout>
		<Router>
			<Route exact path="/" component={Home} />
		</Router>
	</Layout>
)

window.addEventListener('DOMContentLoaded', () => {
	const entry = document.getElementById('root')
	render(<App />, entry)
})
