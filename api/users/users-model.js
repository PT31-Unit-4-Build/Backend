const db = require('../data/db-config')

module.exports = {
    insertUser,
    getAllUsers,
    findBy,
    findById,
    editUser,
}

function getAllUsers() { return db('users') }

async function insertUser(user) {
    // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
    // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD 
    // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
    const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password', 'phoneNumber'])
    return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users')
        .where('user_id', id)
        .first()
} 

function editUser(id, changes) {
    return db('users').update(changes).where('user_id', id)
}