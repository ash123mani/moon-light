import styled, { css } from 'styled-components'

const lineHeight = 2.6

const headingStyle = css`
  width: fit-content;
  position: relative;
  font-size: 2.4rem;
  font-size: ${({ fs }) => fs || '2.4rem'};
  font-weight: 400;
  color: var(--dark-black);
  line-height: ${({ lh }) => `${lh * lineHeight}rem`};
  margin-top: ${({ mt }) => `${mt * lineHeight}rem`};
  margin-bottom: ${({ mb }) => `${mb * lineHeight}rem`};
`

const HeadingBox = styled.div`
  ${headingStyle}
`

export default HeadingBox
