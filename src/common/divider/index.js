import React from 'react'
import { string } from 'prop-types'

import { BaseDivider } from './styles'

function Divider({ height, width, bgColor, ...restProps }) {
  return <BaseDivider height={height} width={width} bgColor={bgColor} {...restProps} />
}

Divider.propTypes = {
  height: string,
  width: string,
  bgColor: string,
}

Divider.defaultProps = {
  height: '1px',
  width: '100%',
  bgColor: 'var(--light-white)',
}

export default Divider
