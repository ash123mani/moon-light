import React from 'react'
import { string } from 'prop-types'

import NavMenu from '../../components/blog-page/nav-menu'

import { Container } from './styles'

function BlogPost(props) {
  const currentPath = props.path

  return (
    <React.Fragment>
      <title>Vnet Macina</title>
      <Container>
        <NavMenu currentPath={currentPath} />
        <div>
          <h1>BlogPost</h1>
        </div>
      </Container>
    </React.Fragment>
  )
}

BlogPost.propTypes = {
  path: string.isRequired,
}

export default BlogPost
