exports.seed = function (knex) {
    return knex('plants')
        .del()
        .then(function () {
            return knex('plants').insert([
                {
                    id: 1,
                    nickname: 'Juniper',
                    species: 'Juniperus procumbens nana',
                    h2o_frequency: 'everyday',
                    image: 'testurl',
                },
                {
                    id: 2,
                    nickname: 'Chinese Elm',
                    species: 'Ulmus parvifolia',
                    h2o_frequency: '1 week',
                    image: 'testurl',
                },
                {
                    id: 3,
                    nickname: 'Fukien Tea',
                    species: 'Ehretia microphylla',
                    h2o_frequency: '1 week',
                    image: 'testurl',
                },
                {
                    id: 4,
                    nickname: "Petunia",
                    species: "Petunia x hybrida",
                    h2o_frequency: "1 week",
                    image: "testurl",
                },
                {
                    id: 5,
                    nickname: "Sunflower",
                    species: "Helianthus annuus",
                    h2o_frequency: "1 week",
                    image: "testurl",
                },
                {
                    id: 6,
                    nickname: "Daylily",
                    species: "Hemerocallis hybrids",
                    h2o_frequency: "4 days",
                    image: "testurl",
                }
            ])
        })
}