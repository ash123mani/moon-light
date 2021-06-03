import React from 'react'
import { node } from 'styled-components'
import { ThemeProvider } from 'styled-components'

import { ResetStyles, Colors, theme } from '../../styles/global'

function Layout(props) {
  const { children } = props

  return (
    <React.Fragment>
      <ResetStyles />
      <Colors />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
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
