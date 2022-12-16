import { createGlobalStyle } from 'styled-components'

import { COLORS, FONT_SIZE } from './global'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${COLORS.GRAY_600};
    color: ${COLORS.GRAY_100};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-size: ${FONT_SIZE.DEFAULT};
    line-height: 140%;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${COLORS.PURPLE};
  }
`