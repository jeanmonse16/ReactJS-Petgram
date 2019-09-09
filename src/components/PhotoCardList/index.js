import React from 'react'

import { PhotoCard } from '../PhotoCard'

import { withPhotos } from '../../hoc/withPhotos'

export const PhotoCardListComponent = ({ data: { photos = [] } } = {}) => {
  console.log(photos)
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export const PhotoCardList = withPhotos(PhotoCardListComponent)
