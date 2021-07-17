import React from 'react'
import { array } from 'prop-types'
import 'react-multi-carousel/lib/styles.css'

import Link from '../../../common/link'
import Image from '../../../common/image'

import { ContentWrapper, Title, Description, StyledCarousel, TextWrapper } from './styles'

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
    <StyledCarousel
      ssr
      partialVisbile
      itemClass="image-item"
      responsive={responsive}
      deviceType="desktop"
      infinite
      autoPlay
      autoPlaySpeed={4000}
      showDots
    >
      {blogs.map((blog, index) => {
        const { title, description, image, banneLink, altText } = blog

        return (
          <Link key={index} to={banneLink}>
            <ContentWrapper>
              <Image
                altText={altText}
                image={image.gatsbyImageData}
                imgStyle={{ width: '100vw', height: 'calc(100vh - 113px)' }}
              />
              <TextWrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
              </TextWrapper>
            </ContentWrapper>
          </Link>
        )
      })}
    </StyledCarousel>
  )
}

ImageCarousel.propTypes = {
  blogs: array.isRequired,
}

export default ImageCarousel
