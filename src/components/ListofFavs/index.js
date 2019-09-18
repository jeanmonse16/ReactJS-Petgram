import React from 'react'
import { Link, Grid, Image } from './styles'

export const ListofFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(fav => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </Link>))
      }
    </Grid>
  )
}
