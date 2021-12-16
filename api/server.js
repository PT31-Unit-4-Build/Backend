const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('colors')

const authRouter = require('../api/auth/auth-router')


const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)

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
