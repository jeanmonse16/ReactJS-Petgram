import React from 'react'

import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useNearScreen } from '../../Hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({
  id, likes = 0, src = DEFAULT_IMAGE
}) => {
  const [Show, element] = useNearScreen()

  const key = `like-${id}`
  const [Liked, setLiked] = useLocalStorage(key, false)
  const Icon = Liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        Show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLiked(!Liked)}>
              <Icon size='32px' />
              {likes} likes!
            </Button>
          </>
      }
    </Article>
  )
}
