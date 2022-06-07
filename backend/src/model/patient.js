const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    require: true
  },
  taj: {
    type: Number,
    require: true
  },
  birth_date: {
    type: String,
    require: true
  },
  mothers_name: {
    type: String,
    require: true
  }
}, {
  timestamps: true,
  collection: 'patients',
})

module.exports = mongoose.model('Patient', PatientSchema);