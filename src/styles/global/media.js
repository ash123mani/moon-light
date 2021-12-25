import { createMedia } from '@artsy/fresnel'

import { breakpoints } from '../utils'

const AppMedia = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints,
})

const { MediaContextProvider, Media } = AppMedia

const mediaStyle = AppMedia.createMediaStyle()

export { MediaContextProvider, Media, mediaStyle }
