import React from 'react';
import Card from '../Card/';
import './list.css';

export default class List extends React.Component {
    static propTypes = { id: React.PropTypes.string.isRequired,
                         cards: React.PropTypes.array.isRequired};
    static defaultProps = { cards: [] };

    render(){
        return (
            <div className="List">
                <h3>{this.props.title}</h3>
                <div className="Cards">
                    {this.props.cards.map(card => <Card {...card} />)}
                </div>
            </div>
        )
    }
}
