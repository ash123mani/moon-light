import React from 'react'
import { node } from 'prop-types'
import { ThemeProvider } from 'styled-components'

import Header from '../header'
import Footer from '../footer'

import { ResetStyles, GlobalVariables, theme } from '../../styles/global'

function Layout(props) {
  const { children } = props

  return (
    <React.Fragment>
      <ResetStyles />
      <GlobalVariables />
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: node,
}

Layout.defaultProps = {
  children: null,
}

export default Layout
