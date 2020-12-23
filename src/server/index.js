var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});


app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>'); 
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

http.listen(3001, () => {
  console.log('listening on http://localhost:3001');
});