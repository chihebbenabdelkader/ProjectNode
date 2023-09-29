const express = require('express');
const gameRoutes = require('./routes/games');

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Use the game routes
app.use('/', gameRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
