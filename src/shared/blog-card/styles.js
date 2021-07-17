import styled, { css } from 'styled-components'

const Content = styled.div`
  padding: 2rem 4rem;
  flex: 1;
  border-radius: 8px;
  transition: var(--card-transition);
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
          margin-right: 8px;
        }
      `
    case 'default':
      return css`
        & {
          border-left: none;
        }

        ${Content} {
          border: 1px solid var(--border);
          margin-left: 8px;
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
  font-size: 2.4rem;
  font-weight: 400;
  color: var(--dark-black);
`

const BlogDescription = styled.div`
  font-size: 1.8rem;
  margin-top: 1.2rem;
  color: var(--medium-black);
`

export { BlogCard, Content, BlogTitle, BlogDescription }
