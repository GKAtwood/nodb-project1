import React, {Component} from 'react'
import Tombstone from './Tombstone'
import axios from 'axios'


class Main extends Component{
    constructor(props){
        super(props)
        this.state ={
            ghost:[],
        }
    }
    ////method to get selected ghost
    ////displaying data from backend 
    componentDidMount() {
        axios.get('/api/ghost')
          .then(res => this.setState({ ghostSelected: res.data }))
      }

    render(){
    //  
        return <div>
           
          

           
        </div>
    }
}

export default Main