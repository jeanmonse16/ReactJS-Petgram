import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  justify-content: center;
  width: 100%;
  &[disabled]{
    opacity: .3;
  }
`
// #8d00ff
export const Button = styled.button`
  background: green;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled]{
    opacity: .3;
  }
`

export const H2 = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
font-size: 14px;
color: red;
`
