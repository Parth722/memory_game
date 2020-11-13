import React, { useState } from 'react';


const Card = (props) => {
 
    return (
        <div className="card">
            <img 
                src={props.source} 
                alt={props.name}
                className="card-image" 
                onClick={props.click}
            />
        </div>
    )
}

export default Card