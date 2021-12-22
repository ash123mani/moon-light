import styled, { css } from 'styled-components'

import { mediaQueries } from '../../styles/utils'

const Content = styled.div`
  padding: 2rem;
  flex: 1;
  border-radius: 8px;
  transition: var(--card-transition);

  @media ${mediaQueries['medium-up']} {
    padding: 2rem 4rem;
  }
`

const orientationStyles = ({ orientation }) => {
  switch (orientation) {
    case 'reverse':
      return css`
        & {
          flex-direction: row-reverse;
          border-right: none;
        }

        ${Content} {
          border: 1px solid var(--border);
          margin-right: 0px;

          @media ${mediaQueries['medium-up']} {
            margin-right: 8px;
          }
        }
      `
    case 'default':
      return css`
        & {
          border-left: none;
        }

        ${Content} {
          border: 1px solid var(--border);
          margin-left: 0px;

          @media ${mediaQueries['medium-up']} {
            margin-left: 8px;
          }
        }
      `
  }
}

const BlogCard = styled.div`
  width: 100%;
  display: flex;

  ${orientationStyles}

  & img {
    filter: grayscale(0);
  }

  &:hover img {
    filter: grayscale(1);
  }

  &:hover {
    ${Content} {
      box-shadow: var(--box-shadow-1);
    }
  }
`

const BlogTitle = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: var(--dark-black);

  @media ${mediaQueries['large-up']} {
    font-size: 2.4rem;
  }
`

const BlogDescription = styled.div`
  font-size: 1.6rem;
  margin-top: 1.2rem;
  color: var(--medium-black);

  @media ${mediaQueries['large-up']} {
    font-size: 1.6rem;
  }
`

export { BlogCard, Content, BlogTitle, BlogDescription }
