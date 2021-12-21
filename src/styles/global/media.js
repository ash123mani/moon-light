import { createMedia } from '@artsy/fresnel'

import { breakpoints } from '../utils'

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints,
})

export { MediaContextProvider, Media }
