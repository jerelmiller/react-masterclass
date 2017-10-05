import React from 'react'
import CustomizableBox from './CustomizableBox'

const PrimaryBox = props => (
  <CustomizableBox background='#2AA6F9' padding={ 10 }>
    { props.children }
  </CustomizableBox>
)

export default PrimaryBox
