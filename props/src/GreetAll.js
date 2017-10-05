import React from 'react'
import Greeting from './Greeting'

export default function GreetAll(props) {
  return (
    <div>
      { props.people.map(person => <Greeting name={ person } />) }
    </div>
  )
}
