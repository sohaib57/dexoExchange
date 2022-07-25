import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background: url("/images/bg.png") no-repeat center center /cover;

    img {
      height: auto;
      max-width: 100%;
    }
    
  }
  // header
  .ljhUAa{
  background: linear-gradient(0deg,rgba(14,19,48,0) -156.13%,rgba(14,19,48,.3) 90.09%);
  backdrop-filter: blur(81.5485px);
  padding-inline: 4rem;
  padding-block: 2.5rem;
}
// footer
.fHVXkX {
  background: linear-gradient(0deg,rgba(14,19,48,0) -156.13%,rgba(14,19,48,.3) 90.09%);
border-top: 1px solid #383241;
}
.hjKMoa{
  display: none;
}
.bOTSjc {
  border-bottom: none;
}
`

export default GlobalStyle
