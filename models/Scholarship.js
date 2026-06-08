const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
  title: String,
  provider: String, // gov, institution, private
  eligibility_criteria: String,
  deadline: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Scholarship', scholarshipSchema);
