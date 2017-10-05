import React from 'react'
import Greeting from './Greeting'

const GreetAll = props => (
  <div>
    { props.people.map(person => <Greeting name={ person } />) }
  </div>
)

export default GreetAll
