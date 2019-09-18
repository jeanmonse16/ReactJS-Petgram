import React from 'react'
import { useInputValue } from '../../Hooks/useInputValue'
import { Form, Input, Button, H2, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }
  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <H2>{title}</H2>
        <Input disabled={disabled} placeholder='email' {...email} />
        <Input disabled={disabled} placeholder='password' type='password' {...password} />
        <Button disabled={disabled}>
          {title}
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
      {disabled && <p>loading...</p>}
    </>
  )
}
