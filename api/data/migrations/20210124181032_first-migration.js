exports.up = function (knex) {
    return knex.schema
        .createTable('users', (tbl) => {
            tbl.increments('user_id')
            tbl.string('username', 200).notNullable().unique()
            tbl.string('password', 200).notNullable()
            tbl.string('phoneNumber', 10).notNullable()
            tbl.timestamps(false, true)
        })
        .createTable('plants', (tbl) => {
            tbl.increments('plant_id')
            tbl.string('nickname').notNullable().unique()
            tbl.string('species').notNullable()
            tbl.text('h2o_frequency').notNullable()
            tbl.binary('plant_image')

        })


}
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('plants')
        .dropTableIfExists('users')
}