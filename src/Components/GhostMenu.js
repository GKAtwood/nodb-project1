import React from 'react';

// Menu with all ghosts

function GhostsMenu (props){
    return (
    <ul>
      {props.ghosts.map((ghost, index) => {
        return <li key={index}>{ghost.name}</li>
      })}
    </ul>
    )
}


export default GhostsMenu