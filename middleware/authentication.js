const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = async (req, res, next) => {
  const authHeaders = req.headers.authorization
  if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Aunthentication error')
  }
  const token = authHeaders.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { userID: payload.userID, name: payload.name }
    next()
  } catch (error) {
    // console.log(error)
    throw new UnauthenticatedError('Aunthentication error')
  }
}

module.exports = auth
