import React, { Component } from 'react'
import Counter from './Counter'

export default class Counters extends Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        <Counter
          count={ this.state.count }
          onChange={ count => this.setState({ count: count }) }
        />
        <Counter
          count={ this.state.count }
          interval={ 2 }
          onChange={ count => this.setState({ count: count }) }
        />
        <Counter
          count={ this.state.count }
          interval={ 3 }
          onChange={ count => this.setState({ count: count }) }
        />
      </div>
    )
  }
}
