import React from 'react'
import { Link } from '@reach/router'

import { Article, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../Hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({
  id, liked, likes = 0, src = DEFAULT_IMAGE
}) => {
  const [Show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        Show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {
                (ToggleLike) => {
                  const HandleFavClick = () => {
                    ToggleLike({ variables: { input: { id } } })
                  }
                  return <FavButton liked={liked} likes={likes} onClick={HandleFavClick} />
                }
              }
            </ToggleLikeMutation>
          </>
      }
    </Article>
  )
}
