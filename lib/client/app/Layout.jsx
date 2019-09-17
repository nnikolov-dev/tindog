import React from 'react'
import PropTypes from 'prop-types'
import {Navbar, Icon} from 'react-materialize'
import './styles/layout.scss'

const Layout = ({children}) => (
	<>
		<Navbar brand={<a id="logo-container" href="#!" className="brand-logo">TinDog <Icon>pets</Icon></a>} centerLogo />
		<main className="container">
			{children}
		</main>
	</>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
