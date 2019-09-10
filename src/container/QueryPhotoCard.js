import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Loader } from "../Styles/Loader"

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Loader />
  if( error ) return <p>error al cargar los datos!!!</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const QueryPhotoCard = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
       renderProp
    }
  </Query>
)
