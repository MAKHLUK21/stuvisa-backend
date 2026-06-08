const express = require('express');
const Application = require('../models/Application');
const router = express.Router();

// Create Application
router.post('/', async (req, res) => {
  try {
    const appData = new Application(req.body);
    await appData.save();
    res.json({ message: "✅ Application created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Applications
router.get('/', async (req, res) => {
  try {
    const apps = await Application.find();
    res.json(apps);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
