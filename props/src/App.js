import React from 'react'
import PrimaryBox from './PrimaryBox'
import GreetAll from './GreetAll'

const App = props => (
  <PrimaryBox>
    <GreetAll
      people={
        ['Jon', 'Kyle', 'Alicia', 'Matt', 'Daniel', 'Anne', 'David', 'Jesse']
      }
    />
  </PrimaryBox>
)

export default App
