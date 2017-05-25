import React from 'react'
import List from '../List'

/**
~~~~~~~~~~~ List Structure ~~~~~~~~~~~
list: [{
    title: "",
    cards: [{
        id: "",
        text: "",
        moveForward: () => {},
        moveBackward: () => {},
    }],
}],
}
**/

export default class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {list: [{title: 'To Do', cards: [{id: 1, text: 'purple jumpsuit', moveForward: this.moveForward, moveBackward: this.moveBackward}, {id: 2, text: 'cop a feel', moveForward: this.moveForward, moveBackward: this.moveBackward}]}, {title: 'Done', cards: [{id: 3, text: 'yellow jumpsuit', moveForward: this.moveForward, moveBackward: this.moveBackward}, {id: 4, text: 'ew', moveForward: this.moveForward, moveBackward: this.moveBackward}]}]}
    }

    render() {
      return (
        <div>
            <h1> {this.props.name} </h1>
            <div className='board-wrap'>
              {this.state.list.map(el => <List title={el.title} cards={el.cards} />)}
            </div>
        </div>
      )
    }

    move = (id, dir) => {
        let index
        let card
        this.state.list.map((l, i) => {
            for (var j = 0; j < l.cards.length; j++) {
                if (l.cards[j].id == id) {
                    index = i
                }
            }
        })
        console.log(index);
        // if (!index)
        //     throw new Error('No card with that ID');
        if (index < 0 || index >= this.state.list.length)
            throw new Error('Illegal move operation')

        this.setState(this.state.list[index+1] = [card, ...this.state.list[index+dir]])
    }

    moveBackward = (id) => this.move(id, -1)

    moveForward = (id) => this.move(id, 1)

    deleteCard = (id) => this.setState({list: this.state.list.map((l) => {title: l.title, cards: l.cards.filter(el => (el.id !== id))})})

    addFunctions() {
        const newState = this.state.list.map(l => {
            l.cards.map((el) => {
                el.moveForward = this.moveForward.bind(null, el.id)
                el.moveBackward = this.moveBackward.bind(null, el.id)
                el.delete = this.deleteCard.bind(null, el.id)
            })
        })
        this.setState(newState)
    }

    componentDidMount() {
        this.addFunctions()
    }
}
