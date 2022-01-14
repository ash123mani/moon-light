import styled from 'styled-components'
import Carousel from 'react-multi-carousel'

import { fadeInUp, mediaQueries } from '../../../styles/utils'

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
`
const TextWrapper = styled.div`
  position: absolute;
  top: 44%;
  padding-left: 10%;
  max-width: 80%;

  @media ${mediaQueries['large-down']} {
    top: 20%;
  }
`
const Title = styled.h1`
  color: var(--dark-white);
  font-size: 4.2rem;
  line-height: 1;

  @media ${mediaQueries['large-down']} {
    font-size: 3.2rem;
  }
`

const Description = styled.h2`
  font-weight: 400;
  color: var(--dark-white);
  margin-top: 1rem;

  @media ${mediaQueries['large-down']} {
    font-size: 2rem;
  }
`

const StyledCarousel = styled(Carousel)`
  & .react-multi-carousel-track {
    height: 100%;
  }

  & .react-multi-carousel-track .react-multi-carousel-item--active h1,
  & .react-multi-carousel-track .react-multi-carousel-item--active h2 {
    animation: ${fadeInUp} 1s ease-in-out;
  }

  & .react-multiple-carousel__arrow {
    background-color: var(--light-white);
  }
`

export { ContentWrapper, Title, Description, StyledCarousel, TextWrapper }
