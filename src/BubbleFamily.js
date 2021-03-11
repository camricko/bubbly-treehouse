import React, { Component } from "react"
import BubbleClass from './BubbleClass'
import bubbleData from './bubbleData'

const blackpinkBubbles = bubbleData.map(bubble => <BubbleClass key={bubble.id} style={bubble.style} id={bubble.id} isChecked={bubble.isChecked}/>)

class BubbleFamily extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <h1>BubbleFamily is active</h1>
                <button onClick={() => console.log(bubbleData)}>fuk yea</button>
                <BubbleClass style={{top: 10, left: 200}} />
                <BubbleClass style={{top: 300, left: 1200}} />
                {blackpinkBubbles}
            </div>
        )    
    }
}



// BubbleFamily is a container component for all Bubbles. It tells our application where and how many Bubbles to render,
// as well as what happens to each bubble on an onHover event

export default BubbleFamily;
export {blackpinkBubbles as anArray};
