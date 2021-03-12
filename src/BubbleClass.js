import React, { Component } from "react"
import './Bubble.css';
import bubbleData from './bubbleData'

class BubbleClass extends Component {
    constructor(props) {
        super(props);
        this.state = {isChecked: this.props.isChecked}
    }

    render() {
        return (
            <div 
            className='bubble-container'
            style={this.props.style}
            id={this.props.id}
            isChecked={this.state.isChecked}
            >
                <div 
                className='bubble'
                onClick={() => this.props.handleMouseOver(this.props.id)}>
                    <p>owo</p>
                    <div
                        style={{width: 200, height: 200, backgroundColor: 'black'}}
                    ></div>
                </div>
            </div>
        )
    }

    HandleMouseOver(id) {
        let prev = id-1;
        if (id === 0) {
            this.ActivateBubble(id);
        } else {
            if (bubbleData.find(element => element.id === prev).isChecked === true){
                this.ActivateBubble(id);
            }
            else {console.log('false')}
        }
    }

    ActivateBubble(id) {
        if (bubbleData.find(element => element.id === id).isChecked === false) {
            document.getElementById('header').style.backgroundColor = bubbleData.find(element => element.id === id).setBackgroundColor;
            console.log('isChecked is', bubbleData.find(element => element.id === id).isChecked);
            bubbleData.find(element => element.id === id).isChecked = !bubbleData.find(element => element.id === id).isChecked;
            setTimeout(() => {
                bubbleData.find(element => element.id === id).isChecked = false;
                document.getElementById('header').style.backgroundColor = 'green'
            }, 3000)
        } else {
            console.log('already true')
        }
        
    }
}

export default BubbleClass; 