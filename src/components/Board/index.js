import React from 'react'
import App from './App'
import List from './list'
import Card from './card'
import Button from './Button'

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
        this.state = {list: []}
    }

    render() {
        return (
            <h1> {this.props.name} </h1>
            <div className='board-wrap'>
                this.state.list.map((el) => (
                    <List title={el.title} cards={el.cards} />
                ))
            </div>
        )
    }

    move = (id, dir) => {
        let index
        let card
        this.state.list.map((l, i) => l.filter(el => {
            if (el.id === id) {
                index = i
                card = el
                return false
            }
            return true
        })
        if (!index)
            throw new Error('No card with that ID');
        if (index < 0 || index >= this.state.list.length)
            throw new Error('Illegal move operation')

        this.setState(this.state.list[index+1] = [card, ...this.state.list[index+dir]])
    }

    moveBackward = (id) => this.move(id, -1)

    moveForward = (id) => this.move(id, 1)

    deleteCard = (id) => this.state.list.map((l) => l.filter(el => (el.id !== id)))

    addFunctions() {
        const newState = this.state.list.map(l => {
            l.map((el) =>
                el.moveForward = moveForward.bind(null, el.id)
                el.moveBackward = backForward.bind(null, el.id)
                el.delete = deleteCard.bind(null, el.id)
            ))
        }
        this.setState(newState)
    }

    componentDidMount() {
        this.addFunctions()
    }
}
