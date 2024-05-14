/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('fruits').truncate()
  await knex('fruits').insert([
    {fruit_name: 'apple', avg_weight_oz: '1', delecious: 'null', color: ''},
    {fruit_name: 'orange', avg_weight_oz: '1.5', delecious: 'true', color: 'red'  },
    {fruit_name: 'banana', avg_weight_oz: '2', delecious: 0, color: ''  }
  ]);
};
