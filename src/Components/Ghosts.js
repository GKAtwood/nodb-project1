import React from 'react';


// ghost that are selected need to be edited and be able to be deleted//

function Ghosts(props){
    return (<div>
            <button>NEXT</button>
            <div>{JSON.stringify(props.ghostSelected)}</div>
            <SelectWindow 
                editGhost={props.editGhost} 
                deleteGhost={props.deleteGhost} data={props.ghostSelected}/>
                
                
        </div>
    )
}


export default Ghosts