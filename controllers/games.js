const fs = require('fs');
const path = require('path');
const Game = require('../models/Game');

const gamesDataPath = path.join(__dirname, '..', 'SteamGames.json');
const gamesData = JSON.parse(fs.readFileSync(gamesDataPath, 'utf8'));

exports.getAllGames = (req, res) => {
  const gameObjects = gamesData.map(game => new Game(game.Game, game.Year, game.GameLink));
  res.status(200).json(gameObjects);
};

exports.getGamesByYear = (req, res) => {
  const year = parseInt(req.params.year);
  const selectedGames = gamesData.filter(game => game.Year > year);
  const gameObjects = selectedGames.map(game => new Game(game.Game, game.Year, game.GameLink));
  res.status(200).json(gameObjects);
};

exports.getURLByName = (req, res) => {
    const gameName = req.params.name;
    const game = gamesData.find(game => game.Game === gameName);
  
    if (game) {
      const gameObject = new Game(game.Game, game.Year, game.GameLink);
      console.log("gameObject", gameObject)
  
      res.status(200).json({ steamURL: gameObject.steamURL });
    } else {
      res.status(404).json({ message: 'Jeu non trouvé' });
    }
};
