import React from 'react'
import { node, string, bool, object } from 'prop-types'

import { GatsbyLink } from './styles'

function Link({ children, to, activeStyle, activeClassName, partiallyActive, ...restProps }) {
  // This assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  console.log('restProps', restProps)

  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        activeStyle={activeStyle}
        partiallyActive={partiallyActive}
        {...restProps}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to} rel="noreferrer" target="_blank" {...restProps}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: node.isRequired,
  to: string.isRequired,
  activeClassName: string,
  partiallyActive: bool,
  activeStyle: object,
  asbutton: bool,
}

Link.defaultProps = {
  partiallyActive: false,
  activeStyle: {},
  activeClassName: '',
  asbutton: false,
}

export default Link
