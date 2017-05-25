import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './Card.css';
import Button from '../Button'

export default class Card extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        moveForward: PropTypes.func.isRequired,
        moveBackward: PropTypes.func.isRequired,
        delete: PropTypes.func.isRequired,
    }

    static defaultProps = {
        text: 'This is a card. It is a good card.',
    }

    render() {
        return (
            <div className='card'>
                {this.props.text}
                <Button onClick={this.props.moveBackward} variant='backward' />
                <Button onClick={this.props.moveForward} variant='forward' />
                <Button onClick={this.props.delete} variant='delete' />
            </div>
        );
    }
}
