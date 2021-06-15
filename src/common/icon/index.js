import React, { memo } from 'react'
import { oneOf, string, bool } from 'prop-types'

import svgList from './svg-list'
import { Image, Container } from './styles'

function Icon({ alt, rotate, height, width, name, hoverable, ...restProps }) {
  return (
    <Container height={height} width={width} hoverable={hoverable} {...restProps}>
      <Image src={svgList[name]} alt={alt} rotate={rotate} height={height} width={width} />
    </Container>
  )
}

Icon.propTypes = {
  rotate: oneOf(['0', '90', '180', '270']),
  name: string,
  alt: string,
  width: string,
  height: string,
  hoverable: bool,
}

Icon.defaultProps = {
  color: 'black',
  name: '',
  rotate: '0',
  alt: '',
  width: '40px',
  height: '40px',
  hoverable: false,
}

export default memo(Icon)
