/* eslint-disable react/display-name */
import React from 'react'
import { INLINES, BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import GatsbyLink from './A'
import Text from './Text'
import Heading from './Heading'
import Image from './Image'

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      return <GatsbyLink to={node.data.uri}>{children}</GatsbyLink>
    },
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_1]: (node, children) => (
      <Heading as="h1" fs="4.2rem" lh="2" mt="3" mb="1">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Heading as="h2" fs="3.2rem" lh="1.5" mt="1" mb="1">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Heading as="h3" fs="2.8rem" lh="2" mt="1" mb="0">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Heading as="h4" fs="2.4rem" lh="1" mt="1" mb="0">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <Heading as="h5" fs="2rem" lh="1" mt="1" mb="0">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <Heading as="h6" fs="1.6rem" lh="1" mt="1" mb="0">
        {children}
      </Heading>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const {
        data: { target },
      } = node

      return <Image target={target} />
    },
  },
}

export default function RichTextToDOM({ richTextJson }) {
  return renderRichText(richTextJson, options)
}
