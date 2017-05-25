import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        variant: PropTypes.oneOf(['default', 'forward', 'backward', 'delete', 'create']).isRequired
    }

    static defaultProps = {
        text: 'Click Me!',
        variant: 'default'
    }


    getText = () => {
        switch(this.props.variant) {
            case 'default':
                return '&#10003;';
            case 'forward':
                return '→';
            case 'backward':
                return '←';
            case 'delete':
                return 'X';
            case 'create':
            default:
                return 'hi';
        }
    }

    render() {
        return (
            <div onClick={this.props.onClick} className={`button ${this.props.variant}`}>{this.getText()}</div>
        );
    }
}

export default Button;
