import React, { useContext } from 'react'
import { Link, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import { Context } from '../../Context'

const SIZE = '32px'

export const NavBar = () => {
  const { isAuth } = useContext(Context)
  return (
    <Nav>
      <Link to='/'> <MdHome size={SIZE} /></Link>
      <Link to='/favs'> <MdFavoriteBorder size={SIZE} /></Link>
      <Link to='/user'> <MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}
