import React, { useContext } from 'react'
import { Button } from '../components/UserForm/styles'
import { Context } from '../Context'
export const LoggedIn = () => {
  const { removeUser } = useContext(Context)
  return (
    <>
      <h1>You have Logged</h1><br />
      <Button onClick={removeUser}>Cerrar Sesión</Button>
    </>
  )
}
