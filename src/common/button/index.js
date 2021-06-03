import React from 'react'
import { string } from 'prop-types'

import { PrimaryButton } from './styles'

function Button(props) {
  return <PrimaryButton>{props.text}</PrimaryButton>
}

Button.propTypes = {
  text: string.isRequired,
}

export default Button
