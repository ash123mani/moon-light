import styled, { css } from 'styled-components'

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  padding: 1.6rem 5%;
  border-bottom: unset;
  width: 100%;
  border-bottom: 1px solid var(--light-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--dark-white);
  z-index: 9999;

  ${({ isMenuOpen }) => {
    return (
      isMenuOpen &&
      css`
        background: var(--dark-black);
      `
    )
  }}
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
  width: 100%;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  background: var(--dark-black);
  height: 0;
  top: -100%;
  transition: all 0.4s;

  ${({ isMenuOpen }) => {
    return (
      isMenuOpen &&
      css`
        height: calc(100vh - 76px);
        top: 100%;
      `
    )
  }};
`

export { Wrapper, MobieHeaderContainer, LinksContainerMobile }
