const db = require('../data/db-config')

// find all plants 
function findAll() {
    return db('plants').select('*')
}
// find plant by ID
function findById(id) {
    return db('plants')
    .where('plant_id', id)
    .first()
}
// delete Plant
function deleteById(plant_id) {
    return db('plants').where({ plant_id }).del()
}
// add a plant
const addPlant = async (plant) => {
    const [id] = await db('plants').insert(plant)
    return findById(id)
}
// update plant
const update = (plant_id, changes) => {
    return db('plants').where({ plant_id }).update(changes)
}


module.exports = {
findAll,
findById,
deleteById,
addPlant,
update,
}