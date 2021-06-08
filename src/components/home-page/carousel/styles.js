import styled from 'styled-components'
import Carousel from 'react-multi-carousel'

import { fadeInUp } from '../../../styles/utils'

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
`
const Title = styled.h1`
  position: absolute;
  top: 40%;
  padding-left: 10%;
  color: var(--dark-white);
  font-size: 4.2rem;
  /* animation: ${fadeInUp} 1s linear; */
`

const Description = styled.h2`
  position: absolute;
  top: 50%;
  padding-left: 10%;
  font-weight: 400;
  color: var(--dark-white);
`

const StyledCarousel = styled(Carousel)`
  & .react-multi-carousel-track {
    height: 100%;
  }

  & .react-multi-carousel-track .react-multi-carousel-item--active h1,
  & .react-multi-carousel-track .react-multi-carousel-item--active h2 {
    animation: ${fadeInUp} 1s ease-in-out;
  }
`

export { ContentWrapper, Title, Description, StyledCarousel }
