const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcryptjs')

const { BadRequestError, UnauthenticatedError } = require('../errors')

const logIn = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Invalid email or password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid credentials')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invelid credentials')
  }
  console.log(user)
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
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
