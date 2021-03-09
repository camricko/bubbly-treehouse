import React, { Component } from "react";
import './Bubble.css';

function Bubble(props) {
    return(
        <div className='bubble-container'>
            <div
                className='bubble' 
                id={props.id}
                style={props.style}
                onMouseOver={() => props.handleMouseOver(props.id)}
            >
            </div>
        </div>
    )
}

export default Bubble;