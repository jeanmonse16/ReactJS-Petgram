import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotLoggedIn = () => (
  <Context.Consumer>
    {
      ({ activateUser }) => (
        <>
          <RegisterMutation>
            {
              (register, { loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables })
                    .then(activateUser)
                    .catch(e => console.log(e))
                }

                const ErrorMsg = error && 'El usuario ya existe o tienes algún problema.'

                return <UserForm onSubmit={onSubmit} title='Registrarse' error={ErrorMsg} disabled={loading} />
              }
            }
          </RegisterMutation>
          <UserForm onSubmit={activateUser} title='Iniciar Sesión' />
        </>
      )
    }
  </Context.Consumer>
)
