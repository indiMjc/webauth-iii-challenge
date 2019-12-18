const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/restrictresults', restricted, (req, res) => {
  const { username } = req.token;

  Users.findBy({ username })
    .then(user => {
      console.log(' : user', user);
      return Users.findByDept(user.department).then(users => {
        res.json(users);
      });
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
