import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 90px);
`

const NavWrapper = styled.div`
  border-right: 1px solid var(--border);
  /* padding: 40px; */
  height: calc(100vh - 90px);
  overflow: auto;
`

export { Container, NavWrapper }
