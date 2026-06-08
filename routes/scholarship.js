const express = require('express');
const Scholarship = require('../models/Scholarship');
const router = express.Router();

// Create Scholarship
router.post('/', async (req, res) => {
  try {
    const scholarship = new Scholarship(req.body);
    await scholarship.save();
    res.json({ message: "✅ Scholarship created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Scholarships
router.get('/', async (req, res) => {
  try {
    const scholarships = await Scholarship.find();
    res.json(scholarships);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
