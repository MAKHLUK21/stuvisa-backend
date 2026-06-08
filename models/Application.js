const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  target_country: String,
  university: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  documents: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
