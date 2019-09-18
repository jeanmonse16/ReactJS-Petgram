import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const LOGIN = gql`
  mutation login($input:UserCredentials!) {
    login (input: $input)
  }
`

export const LoginMutation = ({ children }) => {
  return <Mutation mutation={LOGIN}>
    {children}
  </Mutation>
}