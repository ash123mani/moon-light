import styled, { css } from 'styled-components'

const hoverStyle = ({ hoverable }) =>
  hoverable &&
  css`
    cursor: pointer;
  `

const Container = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  box-sizing: content-box;
  ${hoverStyle};
`

const Image = styled.img`
  color: ${({ color }) => color};
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  height: inherit;
  width: inherit;
`

export { Image, Container }
