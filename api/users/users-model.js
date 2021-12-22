const db = require('../data/db-config')

module.exports = {
    insertUser,
    getAllUsers,
    findBy,
    findById,
}

function getAllUsers() { return db('users') }

// async function insertUser(user) {
//     // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
//     // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD 
//     // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
//     const [newUserObject] = await db('users').insert(user, ['id', 'username', 'password', 'phoneNumber'])
//     return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
// }

async function insertUser(user) {
    const [id] = await db('users').returning('id').insert(user)
    return findById(id)
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users')
        .where('id', id)
        .first()
} 
