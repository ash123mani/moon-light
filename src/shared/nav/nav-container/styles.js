import styled, { css } from 'styled-components'

const parentNavBorder = ({ isTop }) =>
  isTop &&
  css`
    border-bottom: 1px solid var(--border);
  `

const NavContent = styled.div`
  /* margin-left: 24px; */
  ${parentNavBorder}
`

const Container = styled.div`
  /* width: 200px; */
`

export { Container, NavContent }
