import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const REGISTER = gql`
  mutation signup($input:UserCredentials!) {
    signup (input: $input)
  }
`

export const RegisterMutation = ({ children }) => {
  return <Mutation mutation={REGISTER}>
    {children}
  </Mutation>
}
