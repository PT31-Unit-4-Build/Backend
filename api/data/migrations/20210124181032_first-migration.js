exports.up = function (knex) {
  return knex.schema
    .createTable('users', (tbl) => {
      tbl.increments()
      tbl.string('username', 200).notNullable().unique()
      tbl.string('password', 200).notNullable()
      tbl.string('phoneNumber', 10).notNullable()
      tbl.timestamps(false, true)
    })
    .createTable('plants', (tbl) => {
      tbl.increments()
      tbl.string('nickname')
      tbl.string('species')
      tbl.string('h2o_frequency')
      tbl.string('image')
    })
    .createTable('users_plants', (tbl) => {
      tbl.increments()
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('plant_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('plants')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

}
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('users_plants')
    .dropTableIfExists('plants')
    .dropTableIfExists('users')
}
