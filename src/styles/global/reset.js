import { createGlobalStyle } from 'styled-components'

// https://perishablepress.com/a-killer-collection-of-global-css-reset-styles/
// http://html5doctor.com/html-5-reset-stylesheet/
// https://dev.to/hankchizljaw/a-modern-css-reset-6p3

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`

export default GlobalStyles
