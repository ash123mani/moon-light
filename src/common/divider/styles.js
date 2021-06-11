import styled from 'styled-components'

const BaseDivider = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ bgColor }) => bgColor};
`

export { BaseDivider }
