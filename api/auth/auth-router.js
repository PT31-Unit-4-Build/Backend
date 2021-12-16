const router = require('express').Router()
const { JWT_SECRET } = require('../../config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { insertUser } = require('../users/users-model')


router.post('/register',  (req, res, next) => {

    let user = req.body
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(user.password, rounds)
    user.password = hash 
})



module.exports = router;