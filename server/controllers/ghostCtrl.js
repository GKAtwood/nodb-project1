const ghosts = require('../ghosts');

module.exports = {
  
  getRandomGhost: (req, res) => {
  
    const rand = Math.ceil(Math.random() * 10) % ghosts.length
    const randomGhost = ghosts[rand]

    // return the random ghost with a 200 OK response
    return res.status(200).send(randomGhost)
  },

  getGhosts: (req, res) => {
    res.status(200).send(ghosts)
  },
 
  getGhost: (req, res) => {
    const {ghost_id} = req.params // localhost:6660/getGhost/2
    // find ghost object
    const ghost = ghosts.find((ghost) => ghost.id === +ghost_id);
    if (!ghost) {
      return res.status(404).send({ message: "this ghost doesn't exist"});
    }
    res.status(200).send(ghost);
  },
  

  createGhost: (req, res) => {
    const {name, image} = req.body;
    const newGhost = {
      id: ghosts[ghosts.length-1].id + 1,
      name,
      image
    }
    ghosts.push(newGhost);
    res.status(201).send();
  },

 
  editGhost: (req, res) => {
    const {ghost_id} = req.params
    let newName = req.body.name
    // find ghost index
    const index = ghosts.findIndex((element) => element.id === + ghost_id)
    if(index === -1){
      return res.status(404).send('Ghost not found')
    }
    
    ghosts[index].name = req.body.name
    res.status(200).send(ghosts[index])
  },

  deleteGhost: (req, res) => {
    const {ghost_id} = req.params
    const index = ghosts.findIndex(ghosts => ghosts.id === +ghost_id)
    const deletedGhost = ghosts.splice(index , 1)[0]
    res.status(200).send(deletedGhost)
  }
} 