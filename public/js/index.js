const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

var socket = io()

const scoreEl = document.querySelector('#scoreEl')

canvas.width = innerWidth
canvas.height = innerHeight

const x = canvas.width / 2
const y = canvas.height / 2

const players = {}

socket.on('updatePlayers', (backendPlayers) => {
  for (const id in backendPlayers) {
    const backendPlayers = backendPlayers[id]

    if (!players[id]) {
      players[id] = new Player(backendPlayer.x, backendPlayer.y, 10, 'hsl()')
    }
  }

for (const id in players){
  if (!backendPlayers[id]) {
    delete players[id]
  }
}
console.log(players)
})

let animationId
let score = 0
function animate() {
  animationId = requestAnimationFrame(animate)
  c.fillStyle = 'rgba(0, 0, 0, 0.1)'
  c.fillRect(0, 0, canvas.width, canvas.height)

  for (const id in players) {
    const player = players[id]
    player.draw()
  }
}

animate()