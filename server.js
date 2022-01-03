const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(express.json());

const rooms = new Map([]);

app.get('/rooms', function (req, res) {
  res.json(rooms);
});

app.post('/rooms', function (req, res) {
  const { roomId, userName } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ['users', new Map()],
        ['messages', []],
      ]),
    );
  }
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
