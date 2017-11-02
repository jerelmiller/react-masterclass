import React, { Component } from 'react'

export default class OfflineDetector extends Component {
  state = {
    online: navigator.onLine
  }

  componentDidMount() {
    window.addEventListener('online', this.handleOnline)
    window.addEventListener('offline', this.handleOffline)
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline)
    window.removeEventListener('offline', this.handleOffline)
  }

  handleOnline = () => {
    this.setState({ online: true })
  }

  handleOffline = () => {
    this.setState({ online: false })
  }

  render() {
    return (
      <span>
        Your network status is { this.state.online ? 'online' : 'offline' }
      </span>
    )
  }
}
