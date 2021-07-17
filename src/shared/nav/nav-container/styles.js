import styled, { css } from 'styled-components'

const parentNavBorder = ({ isTop }) =>
  isTop &&
  css`
    /* border-bottom: 1px solid var(--border); */
  `

const animate = ({ isItOpen }) => {
  return !isItOpen
    ? css`
        height: 0;
        visibility: collapse;
        opacity: 0;
      `
    : css`
        height: auto;
        visibility: visible;
        transform: translateX(0px);
        opacity: 1;
      `
}

const NavContent = styled.div`
  padding-left: 8px;
  transition-property: transform;
  /* transform: translateX(-40px); */
  transition-duration: 0.4s;
  transition-timing-function: linear;
  /* ${animate}; */
  ${parentNavBorder}
`

const Container = styled.div`
  /* width: 200px; */
`

export { Container, NavContent }
