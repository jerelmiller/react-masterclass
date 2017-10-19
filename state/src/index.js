import React from 'react'
import ReactDOM from 'react-dom'
import Counters from './components/Counters'

ReactDOM.render(
  <Counters interval={ 1 } />,
  document.getElementById('root')
)
