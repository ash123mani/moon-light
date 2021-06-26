import React from 'react'
import Layout from './src/shared/layout'
import 'react-multi-carousel/lib/styles.css'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
