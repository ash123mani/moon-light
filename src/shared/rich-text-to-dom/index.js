/* eslint-disable react/display-name */
import React from 'react'
import { INLINES } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import GatsbyLink from './A'

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      console.log('Node@options', node)
      return <GatsbyLink to={node.data.uri}>{children}</GatsbyLink>
    },
  },
}

export default function RichTextToDOM({ richTextJson }) {
  console.log('richTextJson', richTextJson)
  return renderRichText(richTextJson, options)
}
