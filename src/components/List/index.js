import React from 'react';
import Card from '../Card/index.js';
import './list.css';

export defualt class List extends React.Component() {
    constructor(props){
        super(props);
        this.props.title = props.title;
        this.props.cards = props.cards;
    }
    render(){
        return (
            <div className="List">
                <h3>{this.props.title}</h3>
                <div className="Cards">
                    {this.props.cards.map (card) => {return <Card id={card.id} text={card.text}
                    moveForward={card.moveForward} moveBackward={card.moveBackward}/>}}
                </div>
            </div>
        )
    }
}
