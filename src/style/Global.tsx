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
  .cLxnYb {
    position: relative;
    z-index: 1 !important;
    height: 100px;
  }
  .iLuIaV {
    position: relative;
    height: 100px;
  }
  .ljhUAa{
    height: 100px;
  background: linear-gradient(0deg,rgba(14,19,48,0) -156.13%,rgba(14,19,48,.3) 90.09%);
  backdrop-filter: blur(81.5485px);
  padding-inline: 1rem;
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
.pTkiS {
  color: white;
}
.kTejTD:first-child{
  color: white;
  font-wight: 400;
}
.cIXZDv {
  color: #8f9bb7;
}
.cIXZDv:hover {
  color: #765DF6;
  text-decoration: none;
}
.gKnNVk {
  margin:0 !important;
}
.fYDmMR{
  padding: 0;
}
@media screen and (min-width: 800px) {
  .ljhUAa{
  padding-inline: 7rem;
}
}
@media screen and (max-width: 600px) {
  .ljhUAa{
  padding-inline: 2rem;
}
.gUixnn{
  padding: 10px;
}
.fRbdfc {
  font-size: 2rem;
}
.bGfBeh {
  font-size: 0.8rem;
}
.kHFFwp {
  padding: 1rem;
}
.bwvFDe {
  padding: 1rem;
}
.gMHWOT {
  padding: 1rem;
}
}
@media screen and (max-width: 425px) {
  .ljhUAa{
  padding-inline: 1rem;
}
.fRbdfc {
  font-size: 1.4rem;
}

}
`

export default GlobalStyle
