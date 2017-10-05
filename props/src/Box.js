import React from 'react'

const Box = props => (
  <div style={{ background: 'black', color: 'white', padding: '1rem' }}>
    { props.children }
  </div>
)

export default Box
