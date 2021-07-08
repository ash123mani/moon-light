import React from 'react'
import { node, object } from 'prop-types'
import { ThemeProvider } from 'styled-components'

import Header from '../header'
import Footer from '../footer'

import { ResetStyles, GlobalVariables, theme } from '../../styles/global'

function Layout(props) {
  console.log('props', props)
  const {
    children,
    location: { pathname },
  } = props
  const showHeader = pathname === '/'

  return (
    <React.Fragment>
      <ResetStyles />
      <GlobalVariables />
      <ThemeProvider theme={theme}>
        {showHeader && <Header path={pathname} />}
        <React.Fragment>{children}</React.Fragment>
        {showHeader && <Footer />}
      </ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: node,
  location: object.isRequired,
}

Layout.defaultProps = {
  children: null,
}

export default Layout
