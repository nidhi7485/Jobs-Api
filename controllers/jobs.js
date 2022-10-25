const getAllJobs = async (req, res) => {
  res.send('get all jobs')
}

const getSingleJobs = async (req, res) => {
  res.send('get jobs')
}
const createJobs = async (req, res) => {
  res.json(req.body)
}
const updateJobs = async (req, res) => {
  res.send('update jobs')
}
const deleteJobs = async (req, res) => {
  res.send('Delete jobs')
}
module.exports = {
  getAllJobs,
  getSingleJobs,
  createJobs,
  updateJobs,
  deleteJobs,
}
