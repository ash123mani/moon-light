import React from 'react'
import WebFont from 'webfontloader'

import Layout from './src/shared/layout'

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,600'],
  },
})

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export { wrapPageElement }
