import React from 'react'
import { string } from 'prop-types'

import Link from '../../../../common/link'

import { Container, Title, Subtitle } from './styles'

function SubBlogCard({ url, title, description }) {
  return (
    <Link to={url}>
      <Container>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
      </Container>
    </Link>
  )
}

SubBlogCard.propTypes = {
  url: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
}

export default SubBlogCard
