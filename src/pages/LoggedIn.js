import React, { useContext } from 'react'
import { Button } from '../components/UserForm/styles'
import { Context } from '../Context'
import { Layout } from '../components/Layout'
export const LoggedIn = () => {
  const { removeUser } = useContext(Context)
  return (
    <Layout title='User Section' subtitle='You have Logged In!'>
      <br />
      <Button onClick={removeUser}>Cerrar Sesión</Button>
    </Layout>
  )
}
