exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable().unique()
      users.string('password', 200).notNullable()
      users.string('phoneNumber', 10).notNullable().unique()
      users.timestamps(false, true)
    })

  .createTable('plants', (plants) => {
    plants.increments()
    plants.string('nickname')
    plants.string('species')
    plants.string('h2o_frequency')
    plants.string('image')
  })

  // .createTable('users_plants', (users_plants) => {
  //   users_plants.increments()
  //   users_plants.integer('users_plant_id')
  //     .unsigned()
  //     .notNullable()
  //     .references('user_id')
  //     .inTable('users')
  //     .onDelete('CASCADE')
  //     .onUpdate('CASCADE')
  //     users_plants.integer('plant_id')
  //     .unsigned()
  //     .notNullable()
  //     .references('id')
  //     .inTable('plants')
  //     .onDelete('CASCADE')
  //     .onUpdate('CASCADE')
  // })
}
exports.down = async (knex) => {

  await knex.schema
  // .dropTableIfExists('users_plants')
  .dropTableIfExists('plants')
  .dropTableIfExists('users')
}
