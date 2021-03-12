import React, { Component } from "react"
import BubbleClass from './BubbleClass'
import bubbleData from './bubbleData'

const activatedBubbles = bubbleData.map(bubble => bubble.isChecked);

class BubbleFamily extends Component {
    constructor() {
        super();
        this.state = {
            isClicked: activatedBubbles,
        }
    }

    render() {
        const blackpinkBubbles = bubbleData.map(bubble => <BubbleClass key={bubble.id} style={bubble.style} id={bubble.id} isChecked={bubble.isChecked} handleMouseOver={() => this.HandleMouseOver()}/> )
        return(
            <div>
                <h1>BubbleFamily is active</h1>
                <button onClick={() => console.log(this.state)}>fuk yea</button>
                {blackpinkBubbles}
            </div>
        )    
    }

    HandleMouseOver (id) {
        console.log(activatedBubbles[id])
        if (activatedBubbles[id] === false) {
            activatedBubbles[id] = true;
            console.log(activatedBubbles[id])
            setTimeout(activatedBubbles[id] = false, 5000);
        }
    }
}



// BubbleFamily is a container component for all Bubbles. It tells our application where and how many Bubbles to render,
// as well as what happens to each bubble on an onHover event

export default BubbleFamily;
