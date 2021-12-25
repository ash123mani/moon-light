import styled, { css } from 'styled-components'

import { mediaQueries } from '../../styles/utils'

const lineHeight = 2.6

const headingStyle = css`
  width: fit-content;
  position: relative;
  font-size: 2.2rem;
  line-height: 1.4;
  font-weight: 400;
  color: var(--dark-black);
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;

  @media ${mediaQueries['large-up']} {
    font-size: ${({ fs }) => fs || '2.4rem'};
    line-height: ${({ lh }) => `${lh * lineHeight}rem`};
    margin-top: ${({ mt }) => `${mt * lineHeight}rem`};
    margin-bottom: ${({ mb }) => `${mb * lineHeight}rem`};
  }
`

const HeadingBox = styled.div`
  ${headingStyle}
`

export default HeadingBox
