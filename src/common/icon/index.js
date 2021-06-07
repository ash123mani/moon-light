import React, { memo } from 'react'
import { oneOf, string } from 'prop-types'

import svgList from './svg-list'
import { Image } from './styles'

function Icon({ alt, rotate, height, width, name, ...restProps }) {
  return <Image src={svgList[name]} alt={alt} rotate={rotate} height={height} width={width} {...restProps} />
}

Icon.propTypes = {
  rotate: oneOf(['0', '90', '180', '270']),
  name: string,
  alt: string,
  width: string,
  height: string,
}

Icon.defaultProps = {
  color: 'black',
  name: '',
  rotate: '0',
  alt: '',
  width: '40px',
  height: '40px',
}

export default memo(Icon)
