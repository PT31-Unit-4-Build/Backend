const router = require('express').Router()
// const restricted = require('../middleware/restricted') need to test endpoints first


const Users = require('../users/users-model')

// get all users
router.get('/', (req, res, next) => {
    Users.getAllUsers()
        .then(user => {
            if (!user) {
                res.status(400).json({
                    message: 'no users'
                })
            } else {
                res.status(200).json(user)
            }
        })
        .catch(err => {
            next(err)
        })
})

// get user by id
router.get('/:id', (req, res, next) => {
    const { id } = req.params
    Users.findById(id) 
        .then(user => {
            if(user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({
                    message: 'user not found'
                })
            }
        })
        .catch(err => {
            next(err)
        })
})

// update user 
router.put('/:id', (req, res, next) => {
    const { id } = req.params
    const changes = req.body

    Users.editUser(id, changes)
        .then(user => {
            if(user) {
                res.json(user)
            } else {
                res.status(404).json({
                    message: 'User not found'
                })
            }
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router