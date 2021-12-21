import styled, { css } from 'styled-components'

import { mediaQueries, fadeInUp } from '../../styles/utils'

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  padding: 1.6rem 10%;
  width: 100%;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--dark-white);
  z-index: 9999;

  @media ${mediaQueries['large-down']} {
    padding: 1.6rem 5%;
    border-bottom: unset;
  }
`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${mediaQueries['large-down']} {
    padding: 1rem 5%;
    ${({ isMenuOpen }) => {
      return (
        isMenuOpen &&
        css`
          animation: ${fadeInUp} 0.5s linear;
        `
      )
    }}
  }
`

const LinksContainer = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

export { Wrapper, HeaderContainer, LinksContainer }
