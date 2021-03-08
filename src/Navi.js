import React, { Component } from "react"
import Bubble from './Bubble'

class Navi extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <h1>Hi, my name is Navi!</h1>
                <div id='box-container'>
                    <div className='box-top'>
                       <Bubble />
                       <Bubble />
                       <Bubble />
                       <Bubble />
                       <Bubble />
                    </div>
                    <div id='box-bottom'>
                        <Bubble />
                        <Bubble />
                        <Bubble />
                        <Bubble />
                        <Bubble />
                    </div>
                </div>
            </div>
        )
        
    }
}

// Navi is a container component for all Bubbles. It tells our application where and how many Bubbles to render,
// as well as what happens to each bubble on an onHover event

export default Navi;