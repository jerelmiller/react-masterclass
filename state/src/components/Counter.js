import React, { Component } from 'react'

const Counter = (props) => (
  <div>
    <h1>{ props.count }</h1>
    <button onClick={ () => props.onChange(props.count - props.interval) }>
      -
    </button>
    <button onClick={ () => props.onChange(props.count + props.interval) }>
      +
    </button>
  </div>
)

Counter.defaultProps = {
  interval: 1
}

export default Counter
