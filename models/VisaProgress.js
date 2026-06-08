const mongoose = require('mongoose');

const visaProgressSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  step_number: { type: Number, required: true },
  status: { type: String, enum: ['completed', 'pending'], default: 'pending' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('VisaProgress', visaProgressSchema);
