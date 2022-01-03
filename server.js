const express = require('express');

const app = express();

app.get('/users', function (req, res) {
  res.send('ss');
});

app.listen(5000);
