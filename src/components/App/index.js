import React, {Component} from 'react'

import Board from '../Board'
import './App.css'

const BOARDS = [{name: 'Work'}]
const USER = {name: 'Admin'}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boards: BOARDS,
      user: USER,
    }
  }

  render() {
    return (
      <div className='app-wrap'>
        {this.state.boards.map((b, i) => <Board key={i} {...b} />)}
      </div>
    )
  }
}
