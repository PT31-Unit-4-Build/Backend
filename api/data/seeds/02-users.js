const bcrypt = require('bcryptjs')
// exports.seed = function (knex) {
//     // Deletes ALL existing entries
//     return knex('users').del()
//         .then(function () {
//             // Inserts seed entries
//             return knex('users').insert([
//                 {
//                     user_id: 1,
//                     username: 'AdminUser',
//                     // password: '1234',
//                     password: bcrypt.hash('1234', 8),
//                     phoneNumber: '1234567890'
//                 },

//             ]);
//         });
// }


exports.seed = async function (knex) {
    return knex('users').insert([
        {
            user_id: 1,
            username: 'AdminUser',
            password: await bcrypt.hash('1234', 8),
            phoneNumber: '1234567890'
        }
    ])
}