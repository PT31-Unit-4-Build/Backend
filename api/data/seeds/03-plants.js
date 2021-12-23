
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
          plant_image: 'testurl',
        },
        {
          nickname: 'Chinese Elm',
          species: 'Ulmus parvifolia',
          h2o_frequency: '1 week',
          plant_image: 'testurl',
        },
        {
          nickname: 'Fukien Tea',
          species: 'Ehretia microphylla',
          h2o_frequency: '1 week',
          plant_image: 'testurl',
        },
        {
          nickname: "Petunia",
          species: "Petunia x hybrplant_ida",
          h2o_frequency: "1 week",
          plant_image: "testurl",
        },
        {
          nickname: "Sunflower",
          species: "Helianthus annuus",
          h2o_frequency: '1 inch of water per week during growing season',
          plant_image: 'https://images.unsplash.com/photo-1551945326-df678a97c3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
          nickname: "Daylily",
          species: "Hemerocallis hybrids",
          h2o_frequency: "4 days",
          plant_image: "testurl",
        }
      ]);
    });
};
