import styled from 'styled-components'

const ContentWrapper = styled.div``

const Img = styled.img`
  width: 100vw;
  height: calc(100vh - 109px);
  filter: grayscale(100%);
`

const Title = styled.h1`
  position: absolute;
  top: 40%;
  padding-left: 10%;
  color: var(--dark-white);
  font-size: 4.2rem;
  /* color: var(--dark-black); */
`

const Description = styled.h2`
  position: absolute;
  top: 50%;
  padding-left: 10%;
  font-weight: 400;
  /* color: var(--dark-black); */
  color: var(--dark-white);
`

export { ContentWrapper, Img, Title, Description }
