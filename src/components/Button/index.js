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
                return '&#8594;';
            case 'backward':
                return '&#8592;';
            case 'delete':
                return '&#128169;';
            case 'create':
            default:
                return '&#43;';
        }
    }

    render() {
        return (
            <div onClick={this.props.onClick} className={`button ${this.props.variant}`}>{this.getText()}</div>
        );
    }
}

export default Button;
