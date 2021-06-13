import styled, { css } from 'styled-components'

const orientationStyles = ({ orientation }) =>
  orientation === 'reverse' &&
  css`
    & {
      flex-direction: row-reverse;
      border-right: none;
      border-left: 1px solid var(--border);
    }
  `

const BlogCard = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  transition: transform 0.15s ease-out 0s, border-color 0.15s ease-out 0s, box-shadow 0.15s ease-out 0s;
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
  border: 1px solid var(--border);
  border-left: none;
  padding: 2rem 4rem;
  flex: 1;
`

const BlogTitle = styled.div`
  font-size: 3.2rem;
  font-weight: 500;
`

const BlogDescription = styled.div`
  font-size: 2rem;
  margin-top: 1.2rem;
`

export { BlogCard, Content, BlogTitle, BlogDescription }
