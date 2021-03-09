import React, { Component } from "react"
import Bubble from './Bubble'
import bubbleData from './bubbleData.js'

class Navi extends Component {
    constructor() {
        super();
    }

    HandleMouseOver(id) {
        console.log('Hovered over item', id);
    }

    render() {
        const bubbleComponents = bubbleData.map(bubble => <Bubble key={bubble.id} id={bubble.id} style={bubble.style} handleMouseOver={this.HandleMouseOver} />)

        return(
            <div>
                <h1>Navi is active</h1>
                <button onClick={() => console.log('clicked!')}>Click Meee</button>
                <button onClick={this.HandleClick}>Click Me Function</button>
                <div id='box-container'>
                    <div id='top-grid'>
                        {bubbleComponents}
                       {/* <Bubble id='test' style={{backgroundColor: 'red'}} handleMouseOver={this.HandleMouseOver}/>
                       <Bubble id='dipsie' handleMouseOver={this.HandleMouseOver}/>
                       <Bubble id='lala' handleMouseOver={this.HandleMouseOver}/>
                       <Bubble id='po' handleMouseOver={this.HandleMouseOver}/>
                       <Bubble id='owo' handleMouseOver={this.HandleMouseOver}/> */}
                    </div>
                    <div id='bottom-grid'>
                    </div>
                </div>
            </div>
        )
        
    }
}

// Navi is a container component for all Bubbles. It tells our application where and how many Bubbles to render,
// as well as what happens to each bubble on an onHover event

export default Navi;