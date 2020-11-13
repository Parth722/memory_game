import React from 'react';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <p className="logo">Memory Card</p>
            <ul className="score">
                <li>Current Score: {props.currentScore}</li>
                <li>Best Score: {props.bestScore}</li>
            </ul>
        </div>
    )
}

export default Navbar