const express = require('express')
const router = express.Router()

const { logIn, register } = require('../controllers/auth')

router.post('/login', logIn)
router.post('/register', register)
module.exports = router
