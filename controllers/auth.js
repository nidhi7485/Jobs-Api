const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const logIn = async (req, res) => {
  res.send('login page')
}

const register = async (req, res) => {
  // console.log(req.body)
  const user = await User.create(req.body)
  console.log(user)
  res.status(StatusCodes.CREATED).json({ user })
}
module.exports = {
  logIn,
  register,
}
