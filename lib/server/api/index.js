const express = require('express')

const api = express.Router()

api.use('/', (req, res) => {
	res.send('welcome to APIv1')
})

module.exports = api
