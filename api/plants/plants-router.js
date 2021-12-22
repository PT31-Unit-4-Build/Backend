const router = require('express').Router()
const Plant = require('../plants/plants-model')


// get all plants 
router.get('/', async (req, res, next) => {
    try {
const plant = await Plant.findAll()
        res.json(plant)
    } catch (err) {
        next({
            status: 500,
            message: 'Error getting Plants!',
            ...err,
        })
    }
})

// get plant by id
router.get('/:id', async (req, res, next) => {
    try {
const plant = await Plant.findById(req.params.id)
        res.status(200).json(plant)
    } catch(err) {
        next(err)
    }
})

// add a plant 
router.post('/', async (req, res, next) => {
    try {
        let plant = await Plant.add(req.body)
        res.status(201).json(plant)
    } catch(err){
        next({
            status: 500, 
            message: 'Error creating plant!', 
            ...err 
        })
    }
})


module.exports = router 