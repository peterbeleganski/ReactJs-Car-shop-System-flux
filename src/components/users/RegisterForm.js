import React from 'react'
import Input from '../common/Input'

const RegisterForm = (props) => (
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
      <br />
      <Input
        name='confirmPassword'
        type='password'
        placeholder='Confirm Password'
        value={props.user.confirmPassword}
        onChange={props.onChange}
      />
      <br />
      <Input
        name='name'
        placeholder='Full Name'
        value={props.user.name}
        onChange={props.onChange}
        type='text'
      />
      <br />
      <input type='submit' onClick={props.onSave} />
    </form>
  </div>
)
export default RegisterForm
