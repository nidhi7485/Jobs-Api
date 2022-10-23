const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcryptjs')

const { BadRequestError } = require('../errors')
const logIn = async (req, res) => {
  res.send('login page')
}

const register = async (req, res) => {
  // console.log(req.body)

  const user = await User.create(req.body)
  // console.log(user)
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}
module.exports = {
  logIn,
  register,
}
