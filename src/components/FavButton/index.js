import React, { useContext } from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Button } from './styles'
import PropTypes from 'prop-types'
import { Context } from '../../Context'
import { Error } from '../UserForm/styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  const { isAuth } = useContext(Context)
  return (
    <>
      <Button onClick={onClick}>
        <Icon size='32px' />
        {likes} likes!
      </Button>
      {!isAuth && <Error>Necesitas un usuario registrado para dar un "me gusta"</Error>}
    </>)
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
