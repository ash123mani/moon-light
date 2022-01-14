import styled, { css } from 'styled-components'

import { mediaQueries } from '../../styles/utils'

const Content = styled.div`
  padding: 0.8rem 1.2rem;
  flex: 1;
  border-radius: 4px;
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
  min-height: 140px;

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

  @media ${mediaQueries['large-up']} {
    min-height: 240px;
  }
`

const BlogTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--dark-black);

  @media ${mediaQueries['large-up']} {
    font-size: 2.4rem;
  }
`

const BlogDescription = styled.div`
  font-size: 1.4rem;
  margin-top: 0.4rem;
  color: var(--medium-black);

  @media ${mediaQueries['large-up']} {
    font-size: 1.6rem;
    margin-top: 1.2rem;
  }
`

export { BlogCard, Content, BlogTitle, BlogDescription }
