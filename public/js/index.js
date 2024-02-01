const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

var socket = io()

const scoreEl = document.querySelector('#scoreEl')

canvas.width = innerWidth
canvas.height = innerHeight

const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 10, 'white')
const players = {}

socket.on('updatePlayers', (players) => {
  for (const id in backendPlayers) {
    const backendPlayers = backendPlayers[id]

    if (!players[id]) {
      
    }
  }
})

let animationId
let score = 0
function animate() {
  animationId = requestAnimationFrame(animate)
  c.fillStyle = 'rgba(0, 0, 0, 0.1)'
  c.fillRect(0, 0, canvas.width, canvas.height)

  player.draw()
}

animate()