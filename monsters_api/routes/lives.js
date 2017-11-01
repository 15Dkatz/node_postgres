const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
  pool.query('SELECT * FROM lives', (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

router.get('/conditions', (request, response, next) => {
  pool.query(
    'SELECT * FROM lives JOIN habitats ON habitats.name = lives.habitat',
    (err, res) => {
      if (err) return next(err);

      response.json(res.rows);
    }
  )
});

module.exports = router;