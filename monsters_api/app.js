const express = require('express');
const bodyParser = require('body-parser');
const monsters = require('./routes/monsters');

const app = express();

app.use(bodyParser.json());
app.use('/monsters', monsters);

app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;