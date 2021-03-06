import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const PHOTO_LIKED = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`

export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={PHOTO_LIKED}>
    {children}
  </Mutation>
}
