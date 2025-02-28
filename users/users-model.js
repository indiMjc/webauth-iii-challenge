const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByDept
};

function find() {
  return db('users');
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findBy(filter) {
  return db('users')
    .where(filter)
    .first();
}

function findByDept(department) {
  return db('users').where('department', department);
}
