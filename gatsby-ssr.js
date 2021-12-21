import React from 'react'

import Layout from './src/shared/layout'

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export { wrapPageElement }
