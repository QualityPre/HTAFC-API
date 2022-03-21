const Player = require('../models/playerModel')

exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find()
    res.status(200).json({
      status: 'success',
      results: players.length,
      data: {
        players,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    })
  }
}

exports.getPlayer = async (req, res) => {
  try {
    const tour = await Player.findById(req.params.id)
    res.status(200).json({
      status: 'success',
      data: {
        player,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    })
  }
}

exports.createPlayer = async (req, res) => {
  try {
    const newPlayer = await Player.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        player: newPlayer,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    })
  }
}

exports.updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({
      status: 'success',
      data: {
        player,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    })
  }
}

exports.deletePlayer = async (req, res) => {
  try {
    await Player.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'success',
    })
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    })
  }
}
