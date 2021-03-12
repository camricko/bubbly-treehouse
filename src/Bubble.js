import React, { Component } from "react";
import './Bubble.css';

function Bubble(props) {
    return(
        <div className='bubble-container'>
            <div
                className='bubble' 
                id={props.bubble.id}
                style={props.bubble.style}
                isHovered={props.bubble.isHovered}
                onClick={() => props.handleMouseOver(props.bubble.id, props.bubble.isHovered)}
            >
            </div>
        </div>
    )
}

export default Bubble;