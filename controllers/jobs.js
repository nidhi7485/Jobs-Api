const Job = require('../models/Job')

const { StatusCodes } = require('http-status-codes')
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require('../errors')

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userID }).sort('cratedAt')
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}

const getSingleJobs = async (req, res) => {
  const {
    user: { userID },
    params: { id: jobId },
  } = req
  const job = await Job.findOne({ _id: jobId, createdBy: userID })
  if (!job) {
    throw new NotFoundError(`no job with id :${jobId}`)
  }
  res.status(StatusCodes.OK).json({ job })
}
const createJobs = async (req, res) => {
  req.body.createdBy = req.user.userID
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}
const updateJobs = async (req, res) => {
  const {
    body: { company, position },
    user: { userID },
    params: { id: jobId },
  } = req
  if (company == '' || position == '') {
    throw new BadRequestError('company and position fields cannot be empty')
  }
  // console.log(company, position)
  const job = await Job.findByIdAndUpdate(
    { _id: jobId, createdBy: userID },
    req.body,
    { new: true, runValidators: true }
  )
  // console.log(job)
  if (!job) {
    throw new NotFoundError(`no job with id :${jobId}`)
  }
  res.status(StatusCodes.OK).json({ job })
}
const deleteJobs = async (req, res) => {
  const {
    user: { userID },
    params: { id: jobId },
  } = req
  const job = await Job.findByIdAndDelete({ _id: jobId, createdBy: userID })
  if (!job) {
    throw new NotFoundError(`no job with id ${jobId}`)
  }
  res.status(StatusCodes.OK).send('deleted')
}
module.exports = {
  getAllJobs,
  getSingleJobs,
  createJobs,
  updateJobs,
  deleteJobs,
}
