import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  :root {
    --dark-black: rgb(0 0 0);
    --medium-black: rgb(0 0 0 / 62%);
    --medium1-black: #464e4e;
    --light-black: rgba(243 241 239);

    --dark-white: rgba(255, 255, 255, 1);
    --light-white: rgba(255, 255, 255, 0.3);


    --border: rgba(0, 0, 0, 0.12);
    --border-radius-card: 4px;

    --dunzo: rgb(23, 30, 48);

    --transparent: transparent;

    --box-shadow-1: rgb(0 0 0 / 12%) 0px 0px 7px 0px,rgba(0,0,0,0.06) 0px 2px 4px -1px;

    --card-transition: transform 0.15s ease-out 0s, border-color 0.15s ease-out 0s, box-shadow 0.15s ease-out 0s;
  }
`

export default Global
