require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const moodRoutes = require('./routes/mood');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI 

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/mood', moodRoutes);

app.get('/', (req, res) => res.send('Mood-to-Music API'));

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log('Server running on', PORT));
  })
  .catch((err) => console.error(err));