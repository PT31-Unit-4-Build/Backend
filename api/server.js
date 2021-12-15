const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')
require('colors')


const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

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


// server.post('/api/users', async (req, res) => {
//   res.status(201).json(await insertUser(req.body))
// })

module.exports = server
