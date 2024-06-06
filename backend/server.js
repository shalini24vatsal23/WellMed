const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer((req, res) => {
});

const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:3000', // Replace with your client origin
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('New client connected');

  // Handle incoming socket events

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));