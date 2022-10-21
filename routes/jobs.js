const express = require('express')
const router = express.Router()

const {
  getAllJobs,
  getSingleJobs,
  createJobs,
  updateJobs,
  deleteJobs,
} = require('../controllers/jobs')
router.route('/').post(createJobs).get(getAllJobs)
router.route('/:id').get(getSingleJobs).patch(updateJobs).delete(deleteJobs)

module.exports = router
