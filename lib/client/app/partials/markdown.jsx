import React from 'react'
import marked, {Renderer} from 'marked'
import insane from 'insane'
import PropTypes from 'prop-types'

const renderer = new Renderer()

// usage: <Markdown md="# Header\n Some text" />
function Markdown({md}) {
	const sanit = insane(md)
	const dom = marked(sanit, {renderer})
	return <div dangerouslySetInnerHTML={{__html: dom}} />
}

Markdown.defaultProps = {
	md: 'This should not appear',
}

Markdown.propTypes = {
	md: PropTypes.string,
}

export default Markdown
