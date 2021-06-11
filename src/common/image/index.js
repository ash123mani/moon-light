import React from 'react'
import { string, object, oneOf } from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

function DynamicImage({ image, altText, imgStyle, as, loading }) {
  return <GatsbyImage as={as} image={image} alt={altText} loading={loading} style={imgStyle} />
}

DynamicImage.propTypes = {
  image: object.isRequired,
  altText: string.isRequired,
  imgStyle: object.isRequired,
  as: string,
  loading: oneOf(['eager', 'lazy']),
}

DynamicImage.defaultProps = {
  loading: 'eager',
  as: 'div',
}

export default DynamicImage
