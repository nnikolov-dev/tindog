import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({children}) => (
	<main className="container">
		{children}
	</main>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
