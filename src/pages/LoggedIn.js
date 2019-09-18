import React, { useContext } from 'react'
import { Button } from '../components/UserForm/styles'
import { Context } from '../Context'
import { Layout } from '../components/Layout'
export const LoggedIn = () => {
  const { removeUser } = useContext(Context)
  return (
    <Layout title='Sección del Usuario' subtitle='Has iniciado sesión!'>
      <br />
      <Button onClick={removeUser}>Cerrar Sesión</Button>
    </Layout>
  )
}
