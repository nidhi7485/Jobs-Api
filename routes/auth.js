const express = require('express')
const router = express.Router()

const { logIn, register } = require('../controllers/auth')

router.post('/', logIn)
router.post('/', register)
module.exports = router
