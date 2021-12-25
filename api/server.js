const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('colors')

const AuthRouter = require('../api/auth/auth-router')
const User = require('../api/users/user-router')
const PlantsRouter = require('../api/plants/plants-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', AuthRouter)
server.use('/api/plants', PlantsRouter)
server.use('/api/users', User)

server.get('/',  (req, res) => {
  res.status(200).json({
    message: 'API is up'
  })
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})


module.exports = server
