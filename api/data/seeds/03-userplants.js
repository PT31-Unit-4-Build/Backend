exports.seed = function (knex) {
    return knex('users_plants')
        .del()
        .then(function () {
            return knex('users_plants').insert([
                { id: 1, user_id: 1, plant_id: 1 },
                { id: 2, user_id: 1, plant_id: 2 }

            ])
        })
}