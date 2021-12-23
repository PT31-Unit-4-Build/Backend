const db = require('../data/db-config')

// find all plants 
function findAll() {
    return db('plants').select('*')
}
// find plant by ID
function findById(id) {
    return db('plants as p')
    .where('plant_id', id)
    .select('p.nickname', 'p.species', 'p.h2o_frequency')
    .first()
}
// delete Plant
async function deleteById(plant_id) {
    return db('plants').where({ plant_id }).del()
}
// add a plant
async function add(plant) {
    const[id] = await db('plants').insert(plant)
    return findById(id)
}
// update plant
const update = async(plant_id, changes) => {
    await db('plants').where({ plant_id }).update(changes)
    return findById(plant_id)
}


module.exports = {
findAll,
findById,
deleteById,
add,
update,
}