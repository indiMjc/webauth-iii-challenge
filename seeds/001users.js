exports.seed = function(knex) {
  return knex('table_name').then(function() {
    return knex('table_name').insert([
      { id: 1, username: 'bernard', password: 'pass' },
      { id: 2, username: 'jackson', password: 'pass' },
      { id: 3, username: 'jen', password: 'pass' }
    ]);
  });
};
