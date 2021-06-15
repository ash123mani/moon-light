import styled, { css } from 'styled-components'

const orientationStyles = ({ orientation }) => {
  switch (orientation) {
    case 'reverse':
      return css`
        & {
          flex-direction: row-reverse;
          border-right: none;
          border-left: 1px solid var(--border);
        }
      `
    case 'default':
      return css`
        & {
          border-left: none;
        }
      `
  }
}

const BlogCard = styled.div`
  width: 100%;
  display: flex;
  transition: var(--card-transition);
  border-radius: var(--border-radius-card);
  border: 1px solid var(--border);

  ${orientationStyles};

  & img {
    filter: grayscale(1);
  }

  &:hover {
    box-shadow: var(--box-shadow-1);
  }

  &:hover img {
    filter: grayscale(0);
  }
`

const Content = styled.div`
  padding: 2rem 4rem;
  flex: 1;
`

const BlogTitle = styled.div`
  font-size: 3.2rem;
  font-weight: 400;
  color: var(--dark-black);
`

const BlogDescription = styled.div`
  font-size: 2rem;
  margin-top: 1.2rem;
  color: var(--medium-black);
`

export { BlogCard, Content, BlogTitle, BlogDescription }
