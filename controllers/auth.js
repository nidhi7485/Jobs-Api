const logIn = async (req, res) => {
  res.send('login page')
}

const register = async (req, res) => {
  res.send('register')
}
module.exports = {
  logIn,
  register,
}
// const getUpdateJobs = async (req, res) => {
//   res.send('update jobs')
// }
// const getDeleteJobs = async (req, res) => {
//   res.send('Delete jobs')
// }
// module.exports = {}
