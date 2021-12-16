const db = require('../data/db-config')

function find() {
    return db('plants')
}
function findBy(filter) {
    return db('plants').where(filter)
}
function findById(id) {
    return db('plants')
    .where('p.id', id)
    .first()
}
// function deleteById(id) {
//     return db('plants')
// }
async function add(plant) {
    const[id] = await db('plants').insert(plant)
    return findById(id)
}


module.exports = {
find,
findBy,
findById,
add,
delete,
}