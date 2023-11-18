const express = require('express')
const router = express.Router()
const { version } = require('./controllers/app-version.controller')

router.route('/').get(version)

module.exports = router
