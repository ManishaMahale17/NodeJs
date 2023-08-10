const express = require('express');
const mongoose = require('mongoose');
const Player = require('./models/Player');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas
mongoose.connect('YOUR_MONGODB_ATLAS_CONNECTION_STRING', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', async (req, res) => {
  res.render('home');
});

app.get('/players', async (req, res) => {
  try {
    const firstPlayer = await Player.findOne();
    res.render('player', { player: firstPlayer });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching player information');
  }
});
// ...

app.get('/players/:pageNumber?', async (req, res) => {
    const pageNumber = req.params.pageNumber || 1;
    const playersPerPage = 1; // Number of players to display per page
  
    try {
      const players = await Player.find()
        .skip((pageNumber - 1) * playersPerPage)
        .limit(playersPerPage)
        .exec();
  
      res.render('player', { players, pageNumber });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching player information');
    }
  });
  

  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
