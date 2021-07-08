import React from 'react'
import WebFont from 'webfontloader'

import Layout from './src/shared/layout'

const wrapPageElement = ({ element, props }) => {
  WebFont.load({
    google: {
      families: ['Noto Sans JP:300,400,500,700', 'sans-serif'],
    },
  })

  return <Layout {...props}>{element}</Layout>
}

export { wrapPageElement }
