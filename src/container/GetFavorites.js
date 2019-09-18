import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { ListofFavs } from '../components/ListofFavs'

const GET_FAVS = gql`
  query getFavs {
      favs {
          id
          categoryId
          src
          likes
          userId
      }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>cargando...</p>
  if (error) return <p>error</p>
  const { favs } = data
  return <ListofFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='cache-and-network'>
    {renderProp}
  </Query>
)
