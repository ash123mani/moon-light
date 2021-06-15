import React from 'react'
import { node, string } from 'prop-types'
import { ThemeProvider } from 'styled-components'

import Header from '../header'
import Footer from '../footer'

import { ResetStyles, GlobalVariables, theme } from '../../styles/global'

function Layout(props) {
  const { children, path } = props
  const showHeader = path === '/'

  return (
    <React.Fragment>
      <ResetStyles />
      <GlobalVariables />
      <ThemeProvider theme={theme}>
        {showHeader && <Header path={path} />}
        <React.Fragment>{children}</React.Fragment>
        {showHeader && <Footer />}
      </ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: node,
  path: string.isRequired,
}

Layout.defaultProps = {
  children: null,
}

export default Layout
