const express = require('express');
const { saveGameData } = require('../controllers/memoryController');
const { getGameHistory } = require('../controllers/memoryController');
const router = express.Router();

// Route to save game data
router.post('/save', saveGameData);
// Route to fetch game data
router.get('/history', getGameHistory);

module.exports = router;
