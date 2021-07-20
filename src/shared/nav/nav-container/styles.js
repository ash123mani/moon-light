import styled, { css } from 'styled-components'

const parentNavBorder = ({ isTop }) =>
  isTop &&
  css`
    /* border-bottom: 1px solid var(--border); */
  `

const NavContent = styled.div`
  padding-left: 8px;
  transition-property: transform;
  transition-duration: 0.4s;
  transition-timing-function: linear;
  ${parentNavBorder}
`

const Container = styled.div``

export { Container, NavContent }
