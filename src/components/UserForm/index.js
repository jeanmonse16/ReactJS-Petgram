import React from 'react'
import { useInputValue } from '../../Hooks/useInputValue'
import { Form, Input, Button, H2 } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <>
      <H2>{title}</H2>
      <Form onSubmit={onSubmit}>
        <Input placeholder='email' {...email} />
        <Input placeholder='password' type='password' {...password} />
        <Button>
          {title}
        </Button>
      </Form>
    </>
  )
}
