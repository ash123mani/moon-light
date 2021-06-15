import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem;
  border: 1px solid var(--border);
  margin-bottom: 4rem;
  transition: var(--card-transition);
  border-radius: var(--border-radius-card);

  &:hover {
    box-shadow: var(--box-shadow-1);
  }
`

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
`

const Subtitle = styled.div`
  font-size: 1.8rem;
  margin-top: 0.8rem;
  color: var(--medium-black);
`

export { Container, Title, Subtitle }
