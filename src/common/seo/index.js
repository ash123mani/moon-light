import React from 'react'
import { string } from 'prop-types'
import Helmet from 'react-helmet'

function SEO(props) {
  const { title, description } = props

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* OG Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="video.movie" />
      <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
      <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
      <meta property="og:description" content="This will have open graph description" />
    </Helmet>
  )
}

SEO.propTypes = {
  title: string,
  description: string,
}

SEO.defaultProps = {
  title: 'Vnet Machina',
}

export default SEO
