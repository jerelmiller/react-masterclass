import React, { Component } from 'react'

export default class Clock extends Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return <span>{ this.state.date.toTimeString() }</span>
  }
}
