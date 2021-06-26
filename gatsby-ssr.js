import React from 'react'
import Layout from './src/shared/layout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
