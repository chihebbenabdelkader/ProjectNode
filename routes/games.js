const express = require('express');
const gameController = require('../controllers/games');

const router = express.Router();

router.get('/game', gameController.getAllGames);
router.get('/game/select/:year', gameController.getGamesByYear);
router.get('/game/:name', gameController.getURLByName);

module.exports = router;
