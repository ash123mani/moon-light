import styled from 'styled-components'

const Container = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  box-sizing: content-box;
`

const Image = styled.img`
  color: ${({ color }) => color};
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  height: inherit;
  width: inherit;
`

export { Image, Container }
