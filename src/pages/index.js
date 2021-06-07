import React from 'react'

import { Container } from '../styles/pages/home'
import ImageCarousel from '../components/home-page/carousel'

function IndexPage() {
  return (
    <React.Fragment>
      <Container>
        <ImageCarousel />
      </Container>
    </React.Fragment>
  )
}

export default IndexPage
