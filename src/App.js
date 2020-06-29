import React, {Component} from 'react';
import Header from './Components/Header'
import Main from './Components/Main' 
import Footer from './Components/Footer'
import axios from 'axios'
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
      this.state={
        ghostSelected: null,
        ghosts: null
      }
      this.editGhost= this.editGhost.bind(this);
      this.deleteGhost = this.deleteGhost.bind(this);
      this.getRandomGhost =this.getRandomGhost.bind(this);
      this.handleChange =this.handleChange.bind(this);
      
  }

  componentDidMount() {
    this.getAllGhosts()
    axios.get('/api/ghost')
      .then(res => this.setState({ ghostSelected: res.data }))
  }

  selectGhost (ghost) {
    console.log('ghost selected', ghost)
    axios.get(`/api/select-ghost/${ghost.id}`)
      .then(res => {
        this.setState({
          ghostSelected: res.data
        })
      })
  }
  
  editGhost(){
    axios.put(`/api/select-ghost/${this.state.ghostSelected.id}`, {name: this.state.ghostSelected.name})
    .then(res=> {
      this.setState({ghostSelected: res.data})
      this.getAllGhosts()
    })
  console.log('editGhost', this.state.ghostSelected)
  }

  deleteGhost= id=>{
    console.log('delete ghost', id)
    axios.delete(`/api/select-ghost/${id}`)
    .then(res=> {
      this.setState({ghostSelected: res.data})
      this.getAllGhosts()
    })
 
  }

  getRandomGhost(){
    axios.get('/api/ghost')
    .then(res=> this.setState({ghostSelected: res.data}))
  }

  handleChange(event) {
    this.state.ghostSelected.name=event.target.value
    this.setState({ghostSelected: this.state.ghostSelected})
    
  }

  getAllGhosts(){
    axios.get('/api/ghosts')
    .then(r => {
      this.setState({
        ghosts: r.data
      })
    })
  }



  render(){

    return (
      <div className='App'>
        {this.state.ghostSelected && this.state.ghosts && 
            <>
            <Header/>
            <ul>
            {this.state.ghosts.map((ghost, index) => {
              return <li key={index} onClick={() => this.selectGhost(ghost)}>{ghost.name}</li>
            })}
            
            </ul>
            <label>Name: <input onChange={this.handleChange} id="ghost-name" value={this.state.ghostSelected.name} type="text" /></label>
            
            <img src={this.state.ghostSelected.image}/>
            <div className='EditButton'>
              <button onClick={this.editGhost}>CHANGE NAME</button>
              </div>
              <div className ='Banish'>
              <button onClick={this.deleteGhost}>BANISH</button>
            </div>
            <footer className='footer'>
            <Footer />
            </footer>
            
            
             </>
         
          } 
        
      </div>)
          
  }
}

export default App;

