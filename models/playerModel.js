const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Player must have a name'],
  },
  appearances: {
    type: Number,
    required: [true, 'Player must have appearance number'],
  },
  goals: {
    type: Number,
    default: 0,
  },
  //   summary: {
  //     type: String,
  //     trim: true,
  //     required: [true, 'Player must have a summary'],
  //   },
  //   position: {
  //     type: String,
  //     required: [true, 'Player must have a playing position'],
  //   },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})
const Player = mongoose.model('Player', playerSchema)

module.exports = Player
