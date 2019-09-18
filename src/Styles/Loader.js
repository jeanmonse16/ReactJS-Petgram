import styled from 'styled-components'

export const Loader = styled.div`
  display: block;
  width: 75px;
  height: 75px;
  margin-left: auto;
  margin-right: auto;
  &::after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid green;
    border-color: green transparent #000 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
