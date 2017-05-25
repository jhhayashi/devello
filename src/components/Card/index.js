import React, { Component } from 'react';
import './Card.css';
import Button from '../Button'

export default class Card extends Component {
    render() {
        return (
            <div className='card' id={this.props.id}>
                {this.props.text}
                <Button onClick={this.props.moveBackward} variant='backward' />
                <Button onClick={this.props.moveForward} variant='forward' />
                <Button onClick={this.props.delete} variant='delete' />
            </div>
        );
    }
}
