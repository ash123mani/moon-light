import React from 'react'
import { Context as ResponsiveContext } from 'react-responsive'
import Layout from './src/shared/layout'
import { breakpoints } from './src/styles/utils'
import { renderToString } from 'react-dom/server'

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const bodyHTML = renderToString(
    <ResponsiveContext.Provider value={breakpoints}>{bodyComponent}</ResponsiveContext.Provider>,
  )

  replaceBodyHTMLString(bodyHTML)
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
