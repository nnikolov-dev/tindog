require('./env')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path')
const api = require('./api')

const app = express()
const port = parseInt(process.env.PORT || '8080', 10)
const pub = path.join(process.cwd(), 'public')
const bld = path.join(process.cwd(), 'build')

// configure middleware
const logger = morgan('dev')
const sec = helmet()
const csp = helmet.contentSecurityPolicy({
	directives: {
		defaultSrc: ["'self'"],
		styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'],
		fontSrc: ['fonts.gstatic.com'],
		imgSrc: ["'self'", 'data:'],
	},
})

// add middleware
app.use(logger)
app.use(sec)
app.use(csp)
app.use('/api', api)
app.use(express.static(pub))
app.use(express.static(bld))

app.get((_, res) => {
	const index = path.join(bld, 'index.html')
	res.sendFile(index)
})

app.listen(port, () => {
	// add logger here
})
