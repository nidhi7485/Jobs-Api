const mongoose = require('mongoose')
const User = require('./User')

const JobScheme = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'please provide company name'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'please provide'],
      maxlength: 100,
    },
    status: {
      type: String,
      required: [true, 'please provide company'],
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'please provide user'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Job', JobScheme)
