const express = require('express')

const morgan = require('morgan')

const app = express()

// Route to go here

const playerRouter = require('./routes/playerRoutes')

//Middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use((req, res, next) => {
  console.log('Hello, this is middleware!')
  next()
})

// mount route here

app.use('/api/v1/players', playerRouter)

module.exports = app
