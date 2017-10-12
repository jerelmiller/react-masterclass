import React, { Component } from 'react'

export default class RandomMessage extends Component {
  messages = [
    "I'm not superstitious, I'm a little-stitious",
    'Bears. Beats. Battlestar Gallactica',
    'The worst thing about prison was the dementors.',
    'Where are the turtles?',
    "There's such a thing as good grief. Just ask Charlie Brown.",
    "Saw Inception. Or at least I dreamt I did."
  ]

  state = {
    message: this.messages[0]
  }

  randomMessage() {
    return this.messages[Math.floor(Math.random() * this.messages.length)]
  }

  render() {
    return (
      <div>
        <h1>{ this.state.message }</h1>
        <button onClick={ () => this.setState({ message: this.randomMessage() }) }>
          Change message
        </button>
      </div>
    )
  }
}
