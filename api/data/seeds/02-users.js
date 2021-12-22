exports.seed = function (knex) {
    return knex('users') 
    .del()
    .then(function(){
        return knex('users').insert([
            { id: 1, username: 'user', phoneNumber: '1234567890', password: '1234'},
            { id: 2, username: 'thom herz', phoneNumber: '1234567891', password: '1234'},
            { id: 3, username: 'amber herz', phoneNumber: '1234567892', password: '1234'},
        ])
    })
}