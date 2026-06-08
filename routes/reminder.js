const express = require('express');
const Reminder = require('../models/Reminder');
const router = express.Router();

// Create Reminder
router.post('/', async (req, res) => {
  try {
    const reminder = new Reminder(req.body);
    await reminder.save();
    res.json({ message: "✅ Reminder created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Reminders for a Student
router.get('/:student_id', async (req, res) => {
  try {
    const reminders = await Reminder.find({ student_id: req.params.student_id });
    res.json(reminders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
