const express = require('express');
const VisaProgress = require('../models/VisaProgress');
const router = express.Router();

// Create Visa Progress
router.post('/', async (req, res) => {
  try {
    const visa = new VisaProgress(req.body);
    await visa.save();
    res.json({ message: "✅ Visa progress created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Visa Progress by Student
router.get('/:student_id', async (req, res) => {
  try {
    const progress = await VisaProgress.find({ student_id: req.params.student_id });
    res.json(progress);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update Visa Progress Step
router.put('/:id', async (req, res) => {
  try {
    const updated = await VisaProgress.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
