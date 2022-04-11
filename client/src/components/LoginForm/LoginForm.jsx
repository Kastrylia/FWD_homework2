import React from 'react'
import Form from '../ui/Form/Form'
import Input from '../ui/Input/Input'

function LoginForm({ onSubmit, title, buttonText, error }) {
  return (
    <div>
      <h2>{title}</h2>
      <Form onSubmit={onSubmit} defaultValues={{ login: '', password: '' }}>
        <Input name="login" label="Login" rules={{ required: { message: 'Login is required', value: true } }} />
        <Input
          name="password"
          label="Password"
          type="password"
          rules={{ required: { message: 'Enter username!', value: true } }}
        />
        {error && <p>{error}</p>}
        <button type="submit">{buttonText}</button>
      </Form>
    </div>
  )
}

export default LoginForm
