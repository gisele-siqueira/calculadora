const express = require('express');
const fs = require('fs');

let html = fs.readFileSync("index.html");

var calc = require('./cal');
const app = express();

app.get('/', (req, res) => {
  res.end(html);
});

app.get('/soma', (req, res) => {
  res.send(calc.soma(req.param.numero1, req.param.numero2))
});

app.listen(3000, () => {
  console.log('server started');
});
