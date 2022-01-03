const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

const rooms = new Map([]);

app.get('/users', function (req, res) {
  res.json(rooms);
});

app.post('/rooms', function (req, res) {
  console.log('gg');
});

io.on('connection', (socket) => {
  console.log('user connected', socket);
});

server.listen(5000, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Server has been started!');
});
