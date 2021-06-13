import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  :root {
    --dark-black: rgba(0, 0, 0, 1);
    --medium-black: rgb(0 0 0 / 62%);
    --light-black: rgba(243 241 239);

    --dark-white: rgba(255, 255, 255, 1);
    --medium-white: rgba(255, 255, 255, 0.8);
    --light-white: rgba(255, 255, 255, 0.6);


    --border: rgba(0, 0, 0, 0.12);

    --dunzo: rgb(23, 30, 48);

    --transparent: transparent;

    --box-shadow-1: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }
`

export default Global
