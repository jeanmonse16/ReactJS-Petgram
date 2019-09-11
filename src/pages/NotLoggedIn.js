import React from 'react'
import Context from "../Context"

export const NotLoggedIn = () => (
  <Context.Consumer>
    {
      ({activateUser}) => (
        <form onSubmit={activateUser} >
          <button>
            Iniciar Sesión
          </button>
        </form>
      )
    }
  </Context.Consumer>
)
