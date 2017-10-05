import React from 'react'
import Greeting from './Greeting'

export default function ThriceGreeting() {
  return (
    <div>
      <Greeting name='Bob' />
      <Greeting name='Sallie' />
      <Greeting name='Bojangles' />
    </div>
  )
}
