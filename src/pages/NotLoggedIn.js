import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotLoggedIn = () => (
  <Context.Consumer>
    {
      ({ activateUser }) => (
        <>
          <UserForm onSubmit={activateUser} title='Registrarse' />
          <UserForm onSubmit={activateUser} title='Iniciar Sesión' />
        </>
      )
    }
  </Context.Consumer>
)
