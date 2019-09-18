import { keyframes, css } from 'styled-components'

const FadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0px);
    opacity: 1;
  }
`

export const FadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
      animation: ${time} ${FadeInKeyframes} ${type};
  `

