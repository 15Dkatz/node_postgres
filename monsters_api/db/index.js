const { Pool } = require('pg');
const { user, host, database, password, port } = require('../secrets/db_configuration');

const pool = new Pool({ user, host, database, password, port });

pool.query('SELECT * FROM monsters', (err, res) => {
  if (err) return console.log(err);

  console.log(res);
});