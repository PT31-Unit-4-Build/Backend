const router = require('express').Router()
const restricted = require('../middleware/restricted')
const Plant = require('../plants/plants-model')


// get all plants 
router.get('/', restricted, async (req, res, next) => {
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
router.get('/:id', (req, res, next) => {
    const { id } = req.params
    Plant.findById(id)
        .then(plant => {
            if (!plant) {
                next({
                    status: 404,
                    message: 'Plant not found'
                })
            } else {
                res.status(200).json(plant)
            }
        })
        .catch(err => {
            next(err)
        })
})

// add a plant 
router.post('/', async (req, res, next) => {
    try {
        let plant = await Plant.addPlant(req.body)
        res.status(201).json(plant)
    } catch (err) {
        next({
            status: 500,
            message: 'Error creating plant!',
            ...err
        })
    }
})

// router.post('/', (req, res, next) => {
//     Plant.add(req.body)
//         .then(plant => {
//             res.status(201).json(plant)
//         })
//         .catch(err => {
//             next(err)
//         })
// })

// edit a plant
router.put('/:id', (req, res, next) => {
    const { id } = req.params
    const changes = req.body

    Plant.update(id, changes)
        .then(plant => {
            if (plant) {
                res.json(plant)
            } else {
                next({
                    status: 404,
                    message: 'Plant not found'
                })
            }
        })
        .catch(err => {
            next(err)
        })
})

router.delete('/:id', (req, res, next) => {
    const plant = req.params.id
    Plant.deleteById(plant)
        .then(count => {
            if (count > 0) {
                res.status(204).json({ mesage: 'Plant deleted' }).end()
            } else {
                next({
                    status: 404,
                    message: 'Plant not found '
                })
            }
        })
})

module.exports = router 