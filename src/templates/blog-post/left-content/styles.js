import styled from 'styled-components'

const NavContainer = styled.aside`
  height: 100vh;
  border-right: 1px solid var(--light-white);
  position: sticky;
  top: 0px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: var(--dark-black);
  width: 320px;
`

export { NavContainer }
