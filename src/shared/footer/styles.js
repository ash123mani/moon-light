import styled from 'styled-components'

import Divider from '../../common/divider'
import Link from '../../common/link'

const Container = styled.div`
  padding: 8rem 10%;
  background: var(--dark-black);
`

const TopContent = styled.div`
  /* border-bottom: 1px solid var(--light-white); */
  /* padding-bottom: 4rem; */
`

const Title = styled.div`
  font-size: 2rem;
  color: var(--light-white);
  margin-bottom: 1.2rem;
`

const About = styled.div`
  font-size: 1.4rem;
  color: var(--light-white);
`

const StyledDivider = styled(Divider)`
  margin: 4rem 0rem;
`

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const BottomTitle = styled.div`
  font-size: 1.6rem;
  color: var(--light-white);
  font-weight: bold;
`

const AllLinks = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLink = styled(Link)`
  color: var(--light-white);
  margin-top: 1.8rem;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
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
