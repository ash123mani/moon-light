import { createGlobalStyle } from 'styled-components'

const Colors = createGlobalStyle`
  :root {
    --dark-black: rgba(0, 0, 0, 1);

    --dark-white: rgba(255, 255, 255, 1);
    --medium-white: rgba(255, 255, 255, 0.8);
    --light-white: rgba(255, 255, 255, 0.6);


    --border: rgba(0, 0, 0, 0.12);
  }
`

export default Colors
