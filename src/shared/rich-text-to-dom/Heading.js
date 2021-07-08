import styled, { css } from 'styled-components'

const headingStyle = css`
  margin: 2rem 0;
  width: fit-content;
  position: relative;
  font-size: 2.4rem;
  font-size: ${({ fs }) => fs || '2.4rem'};
  font-weight: 600;
  color: var(--dark-black);
`

const HeadingBox = styled.div`
  ${headingStyle}
`

export default HeadingBox
