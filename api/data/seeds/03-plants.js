
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {
          nickname: 'Juniper',
          species: 'Juniperus procumbens nana',
          h2o_frequency: 'everyday',
          plant_image: 'https://unsplash.com/photos/hnHoyjm1Jbs',
        },
        {
          nickname: 'Chinese Elm',
          species: 'Ulmus parvifolia',
          h2o_frequency: '1 week',
          plant_image: 'https://www.dreamstime.com/stock-photo-chinese-elm-as-bonsai-tree-ulmus-parvifolia-image43642225',
        },
        {
          nickname: "Sunflower",
          species: "Helianthus annuus",
          h2o_frequency: '1 inch of water per week during growing season',
          plant_image: 'https://images.unsplash.com/photo-1551945326-df678a97c3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
          nickname: 'Lily',
          species: 'Lilium Candidum L',
          h2o_frequency: 'Watering about once a week and spritzing leaves with water throughout the summer will help keep your peace lily hydrated',
          plant_image: 'https://images.unsplash.com/photo-1561186548-0c154609e33e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
        },
      ]);
    });
};
