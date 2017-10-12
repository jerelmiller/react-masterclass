import React, { Component } from 'react'

export default class Clock extends Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  render() {
    return <span>{ this.state.date.toTimeString() }</span>
  }
}
