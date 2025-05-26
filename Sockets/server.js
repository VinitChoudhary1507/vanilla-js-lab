const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static HTML
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('✅ New client connected:', socket.id);

  socket.on('chat-message', (message) => {
    console.log('📨 Message received:', message);
    io.emit('chat-message', message); // Broadcast to everyone
  });

  socket.on('disconnect', () => {
    console.log('❌ Client disconnected:', socket.id);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
