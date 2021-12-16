const db = require('../data/db-config')

// find all plants 
function findAll() {
    return db('plants').orderBy('plants.id')
}
// find plant by ID
function findById(id) {
    return db('plants')
    .where('p.id', id)
    .first()
}
// delete Plant
function deleteById(id) {
    return db('plants').where({ id }).del()
}
// add a plant
async function add(plant) {
    const[id] = await db('plants').insert(plant)
    return findById(id)
}
// update plant
const update = (id, changes) => {
    return db('plants').where({ id }).update(changes)
}


module.exports = {
findAll,
findById,
deleteById,
add,
update,
}