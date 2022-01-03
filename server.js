const express = require('express');
const useSocket = require('socket.io');

const app = express();
const server = require('http').Server(app);
const io = useSocket(server);

const rooms = new Map([]);

app.get('/users', function (req, res) {
  res.json(rooms);
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
