import styled from 'styled-components'

import Divider from '../../common/divider'
import Link from '../../common/link'

import { mediaQueries } from '../../styles/utils'

const Container = styled.section`
  padding: 3.2rem 4%;
  background: var(--dark-black);

  @media ${mediaQueries['large-up']} {
    padding: 8rem 10%;
  }
`

const TopContent = styled.div``

const Title = styled.div`
  font-size: 1.6rem;
  color: var(--medium-white);
  margin-bottom: 0.8rem;

  @media ${mediaQueries['large-up']} {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
`

const About = styled.div`
  font-size: 1.4rem;
  color: var(--medium-white);
`

const StyledDivider = styled(Divider)`
  margin: 2.8rem 0rem;

  @media ${mediaQueries['large-up']} {
    margin: 4rem 0rem;
  }
`

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media ${mediaQueries['large-up']} {
    flex-direction: row;
    align-items: unset;
  }
`

const BottomTitle = styled.div`
  font-size: 1.6rem;
  color: var(--medium-white);
  font-weight: bold;
`

const AllLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  align-items: center;

  @media ${mediaQueries['large-up']} {
    margin: 0;
    align-items: unset;
  }
`

const StyledLink = styled(Link)`
  color: var(--medium-white);
  margin-top: 0.4rem;
  display: flex;
  align-items: center;
  padding: 0.8rem 0;

  &:hover {
    text-decoration: underline;
  }

  @media ${mediaQueries['large-up']} {
    border-bottom: unset;
    margin-top: 1.8rem;
  }
`

const UserIds = styled.div`
  font-size: 1.2rem;
  margin-left: 1rem;
`

export {
  Container,
  TopContent,
  Title,
  About,
  StyledDivider,
  BottomContainer,
  BottomTitle,
  AllLinks,
  StyledLink,
  UserIds,
}
