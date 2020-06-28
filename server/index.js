const express = require('express')
const app = express()
const ghostCtrl =require('./controllers/ghostCtrl')
const SERVER_PORT = 6660

app.use(express.json())

/// random ghost endpoint
app.get('/api/ghost', ghostCtrl.getRandomGhost)

// all ghosts
app.get('/api/ghosts', ghostCtrl.getGhosts)

/// selected ghost endpoint
app.get('/api/select-ghost/:ghost_id', ghostCtrl.getGhost) 
app.post('/api/select-ghost', ghostCtrl.createGhost)
app.put('/api/select-ghost/:ghost_id', ghostCtrl.editGhost) 
app.delete('/api/select-ghost/:ghost_id', ghostCtrl.deleteGhost)

app.listen(SERVER_PORT, () => console.log(`Haunting port ${SERVER_PORT}`))

