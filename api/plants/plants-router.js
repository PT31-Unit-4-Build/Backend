const router = require('express').Router()
const Plant = require('../plants/plants-model')

router.get('/', (req, res, next) => {
    res.status(200).json({message: 'plants router connected'})
})


module.exports = router 