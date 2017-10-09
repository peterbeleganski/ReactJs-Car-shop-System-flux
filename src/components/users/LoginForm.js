import React from 'react'
import Input from '../common/Input'

const LoginForm = (props) => (
  <div>
    <form>
      <div>{props.error}</div>
      <Input
        type='email'
        name='email'
        placeholder='E-mail'
        value={props.user.email}
        onChange={props.onChange}
        />
      <br />
      <Input
        type='password'
        name='password'
        placeholder='Password'
        value={props.user.password}
        onChange={props.onChange}
      />
      <input type='submit' onClick={props.onSave} />
    </form>
  </div>
)
export default LoginForm
