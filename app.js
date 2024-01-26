// Importing required modules
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const port = 3000;

// Serving static files from the 'public' directory
app.use(express.static('public'));

// Handling root route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Player data structure
const players = {
  dhsahcsaduhs: {
    x: 100,
    y: 100,
    color: 'yellow'
  },
  daddadadsa: {
    x: 200,
    y: 200,
    color: 'yellow'
  },
};

// Handling socket.io connection event
io.on('connection', (socket) => {
  console.log('a user connected');
  // You can add socket-specific logic here for the connected user
});

// Starting the server
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log('server did load');
