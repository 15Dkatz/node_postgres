const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;