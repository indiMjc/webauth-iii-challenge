exports.seed = function(knex) {
  return knex('users').then(function() {
    return knex('users').insert([
      { id: 1, username: 'bernard', password: 'pass', department: 'team lead' },
      { id: 2, username: 'jackson', password: 'pass', department: 'student' },
      { id: 3, username: 'jen', password: 'pass', department: 'team lead' }
    ]);
  });
};
