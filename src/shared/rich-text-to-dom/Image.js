/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

import GatsbyImage from '../../common/image'

const StyledGatsbyImage = styled(GatsbyImage)`
  /* border: 1px solid var(--border); */
  margin-bottom: 4rem;
  margin-top: 4rem;
  border-radius: 4px;
`

const Image = ({ target }) => {
  const { gatsbyImageData, title } = target
  return (
    <StyledGatsbyImage
      altText={title}
      image={gatsbyImageData}
      imgStyle={{ marginTop: '4rem', marginBottom: '4rem', borderRadius: '4px' }}
    />
  )
}

export default Image
