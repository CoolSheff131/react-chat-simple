const express = require('express');

const app = express();

const rooms = {
  rooms: [],
};

app.get('/users', function (req, res) {
  res.send('ss');
});

app.listen(5000, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Started');
});
