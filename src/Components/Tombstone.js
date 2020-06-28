import React, {Component} from 'react';

class Tombstone extends Component{
    constructor(props){
        super(props)
        this.state={
            tombstoneClicked: false
        }
    }

   

    render(){
        // being renderend in Main which is rendered in App///
        return <div>
            {/* passed down a prop named data */}
            <img src={this.props.data.image } alt={this.props.data.name} />
            <p>{this.props.data.name}</p>

        </div>
    }
}

export default Tombstone