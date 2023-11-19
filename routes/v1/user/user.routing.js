const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { createUser } = require('./controllers/user.controller');

router.route('/').post(createUser);

module.exports = router;
