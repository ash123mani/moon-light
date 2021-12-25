import styled from 'styled-components'

import { mediaQueries } from '../../styles/utils'

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

const MobieHeaderContainer = styled.div`
  position: relative;
`

const LinksContainerMobile = styled.div`
  padding: 0;
  position: absolute;
  z-index: 30000;
  right: 0;
  background: white;
  height: 40vh;
  width: 100%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  @media ${mediaQueries['large-down']} {
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
  }
`

const LinksContainerDesktop = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export { Wrapper, MobieHeaderContainer, LinksContainerMobile, LinksContainerDesktop }
