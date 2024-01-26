const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)
const { server } = require('socket.io')
const io = new Server(server)

const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

const players = {
  dhsahdsaduhs: {
  x: 100,
  y: 100
}
}

io.on('connection', (socket) => {
  console.log('a user connected')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log('server did load')
