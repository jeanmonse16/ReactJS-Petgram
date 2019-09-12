import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotLoggedIn = () => (
  <Context.Consumer>
    {
      ({ activateUser }) => (
        <UserForm onSubmit={activateUser} />
      )
    }
  </Context.Consumer>
)
