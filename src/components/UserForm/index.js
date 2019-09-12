import React from 'react'
import { useInputValue } from '../../Hooks/useInputValue'

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <form onSubmit={onSubmit}>
      <input placeholder='email' {...email} />
      <input placeholder='password' type='password' {...password} />
      <button>
      Iniciar Sesión
      </button>
    </form>
  )
}
