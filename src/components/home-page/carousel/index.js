import React from 'react'
import { object } from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import 'react-multi-carousel/lib/styles.css'

import Link from '../../../common/link'

import { ContentWrapper, Title, Description, StyledCarousel } from './styles'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

function ImageCarousel({ blogs }) {
  return (
    <StyledCarousel ssr partialVisbile itemClass="image-item" responsive={responsive} deviceType="desktop" infinite>
      {blogs.map((blog, index) => {
        const { title, description, gatsbyImageData } = blog

        return (
          <Link key={index} to="/blog">
            <ContentWrapper>
              <GatsbyImage
                key={index}
                alt={title}
                image={gatsbyImageData}
                as="div"
                style={{ width: '100vw', height: '100%' }}
              />
              <Title>{title}</Title>
              <Description>{description}</Description>
            </ContentWrapper>
          </Link>
        )
      })}
    </StyledCarousel>
  )
}

ImageCarousel.propTypes = {
  blogs: object.isRequired,
}

export default ImageCarousel
