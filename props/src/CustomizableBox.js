import React from 'react'

const CustomizableBox = props => {
  const styles = {
    background: props.background || 'black',
    color: props.color || 'white',
    padding: props.padding,
    width: props.width
  }

  return (
    <div style={ styles }>
      { props.children }
    </div>
  )
}

export default CustomizableBox
