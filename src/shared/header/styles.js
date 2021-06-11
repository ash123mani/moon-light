import styled from 'styled-components'

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  padding: 3rem 10%;
  width: 100%;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--dark-white);
  /* z-index: 9999; */
`

export { Wrapper }
