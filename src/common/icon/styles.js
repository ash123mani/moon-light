import styled from 'styled-components'

const Image = styled.img`
  color: ${({ color }) => color};
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`

export { Image }
