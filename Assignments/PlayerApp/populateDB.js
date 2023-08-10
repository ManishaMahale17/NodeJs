const mongoose = require('mongoose');
const Player = require('./models/Player');

mongoose.connect('YOUR_MONGODB_ATLAS_CONNECTION_STRING', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const playersData = [
  {
    name: 'Player 1',
    image: 'player1.jpg',
  },
  {
    name: 'Player 2',
    image: 'player2.jpg',
  },
  // Add more players as needed
];

async function populateDB() {
  try {
    await Player.deleteMany(); // Clear existing data
    await Player.insertMany(playersData);
    console.log('Database populated successfully');
  } catch (err) {
    console.error('Error populating database:', err);
  } finally {
    mongoose.disconnect();
  }
}

populateDB();
