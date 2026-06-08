const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect (updated)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// Simple route
app.get("/", (req, res) => {
  res.send("StuVisa Backend Running...");
});

// 🔹 Auth Routes connect
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// 🔹 Application Routes connect
const appRoutes = require('./routes/application');
app.use('/applications', appRoutes);

// 🔹 Scholarship Routes connect
const scholarshipRoutes = require('./routes/scholarship');
app.use('/scholarships', scholarshipRoutes);

// 🔹 Visa Routes connect
const visaRoutes = require('./routes/visa');
app.use('/visa', visaRoutes);

// 🔹 Reminder Routes connect
const reminderRoutes = require('./routes/reminder');
app.use('/reminders', reminderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

