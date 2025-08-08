const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';

// simple auth middleware
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: 'No token' });
  const token = header.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

// mood->playlist mapping
const playlists = {
  happy: {
    title: 'Feel-Good Hits — Happy Vibes',
    youtube: 'https://www.youtube.com/playlist?list=PL_happy_example',
    spotify: 'https://open.spotify.com/playlist/spotify_happy_example'
  },
  sad: {
    title: 'Melancholy Moods — Sad Songs',
    youtube: 'https://www.youtube.com/playlist?list=PL_sad_example',
    spotify: 'https://open.spotify.com/playlist/spotify_sad_example'
  },
  energetic: {
    title: 'Energy Booster — Workout & Pump',
    youtube: 'https://www.youtube.com/playlist?list=PL_energetic_example',
    spotify: 'https://open.spotify.com/playlist/spotify_energetic_example'
  },
  sleepy: {
    title: 'Calm & Sleepy — Chillout',
    youtube: 'https://www.youtube.com/playlist?list=PL_sleepy_example',
    spotify: 'https://open.spotify.com/playlist/spotify_sleepy_example'
  }
};

router.get('/suggest/:mood', auth, (req, res) => {
  const mood = req.params.mood;
  const lower = (mood || '').toLowerCase();
  if (!playlists[lower]) return res.status(400).json({ message: 'Unknown mood' });
  res.json({ mood: lower, playlist: playlists[lower] });
});

module.exports = router;