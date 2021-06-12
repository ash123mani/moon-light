import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import NavContainer from '../../../shared/nav'

import { NavWrapper } from './styles'

function NavMenu() {
  const data = useStaticQuery(graphql`
    query NavMenu {
      contentfulNavigations {
        navigations {
          pages {
            title
            url
            pages {
              title
              url
              pages {
                title
                url
              }
            }
          }
        }
      }
    }
  `)

  const {
    contentfulNavigations: {
      navigations: { pages },
    },
  } = data

  return (
    <NavWrapper>
      <NavContainer navs={pages} />
    </NavWrapper>
  )
}

export default NavMenu
