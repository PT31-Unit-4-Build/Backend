const router = require('express').Router()
const generateToken = require('../middleware/generateToken')
const bcrypt = require('bcryptjs')
const { insertUser, findBy } = require('../users/users-model')
const checkUsernameExists = require('../middleware/checkUsernameExists')
const checkMissingCredentials = require('../middleware/checkMissingCredentials')
const correctBodyStructure = require('../middleware/correctBodyStructure')
const checkUsernameFree = require('../middleware/checkUsernameFree')
const checkPhoneNumberFree = require('../middleware/checkPhoneNumberFree')


router.post('/register', correctBodyStructure, checkUsernameFree, checkPhoneNumberFree, (req, res, next) => {

    let user = req.body
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(user.password, rounds)
    user.password = hash

    insertUser(user)
        .then(saved => {
            res.status(201).json({
                message: `Great to have you, ${saved.username}`,
                id: saved,
                username: saved.username,
                password: saved.password,
                phoneNumber: saved.phoneNumber,
            })
        })
        .catch(next)
})

router.post('/login', checkUsernameExists, checkMissingCredentials, (req, res, next) => {
    let { username, password } = req.body
    findBy({ username })
    .then(([user]) => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({
                message: `Welcome ${req.user.username}`,
                token,
            })
        } else {
            next({ status: 401, message: 'invalid credentials' })
        }
        })
        .catch(next)
    
})





module.exports = router;