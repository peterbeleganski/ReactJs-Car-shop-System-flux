import React, { Component } from 'react'
import FormHelpers from '../common/FormHelpers'
import RegisterForm from './RegisterForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import toastr from 'toastr'

class RegisterPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: 'test@test.com',
        password: '123456',
        confirmPassword: '123456',
        name: 'Test'
      },
      error: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleUserForm = this.handleUserForm.bind(this)
    this.handleUserRegistration = this.handleUserRegistration.bind(this)

    userStore.on(
      userStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration
    )
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration
    )
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }

  handleUserRegistration (data) {
    if (!data.success) {
      let firstError = FormHelpers.extractFirstError(data)
      this.setState({
        error: firstError
      })
    } else {
      toastr.success('User registered, you can login now!')
      this.props.history.push('/login')
    }
  }

  handleUserForm (event) {
    event.preventDefault()

    if (this.state.user.password !== this.state.user.confirmPassword) {
      this.setState({
        error: 'Passwords do not match!'
      })
      return
    }
    userActions.register(this.state.user)
  }

  validateUser () {
    const user = this.state.user
    let formIsValid = true
    let error = ''

    if (user.password !== user.confirmPassword) {
      error = 'Passwords do not match!'
      formIsValid = false
    }

    if (error) {
      this.setState({ error })
    }

    return formIsValid
  }

  render () {
    return (
      <div>
        <h1>Register new User</h1>
        <RegisterForm
          user={this.state.user}
          error={this.state.error}
          onChange={this.handleUserChange}
          onSave={this.handleUserForm} />
      </div>
    )
  }
}

export default RegisterPage
