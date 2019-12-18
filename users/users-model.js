const db = require('../data/dbConfig');

module.exports = {
  add,
  findBy,
  findById
};

const findById = id => {
  return db('users')
    .where({ id })
    .first();
};

const add = async user => {
  const [id] = await db('users').insert(user);

  return findById(id);
};

const findBy = filter => {
  return db('users').where(filter);
};
