import React, { Component } from 'react'
import Auth from './Auth'
import FormHelpers from '../common/FormHelpers'
import LoginForm from './LoginForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import toastr from 'toastr'

class LoginPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: 'test@test.com',
        password: '123456'
      },
      error: ''
    }

    this.handleUserLogin = this.handleUserLogin.bind(this)

    userStore.on(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin.bind(this)
    )
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin
    )
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }

  handleUserForm (event) {
    event.preventDefault()

    if (this.state.user.email || this.state.user.password || this.state.user.email.length < 3 || this.state.user.password.length < 3) {
      this.setState({
        error: 'Invalid form data, please check again'
      })
    }
    userActions.login(this.state.user)
  }

  handleUserLogin (data) {
    if (!data.success) {
      this.setState({
        error: data.message
      })
    } else {
      Auth.authenticateUser(data.token)
      Auth.saveUser(data.user)
      toastr.success(data.message)
      this.props.history.push('/')
    }
  }

  render () {
    return (
      <div>
        <h1>Login Into your account</h1>
        <LoginForm
          error={this.state.error}
          user={this.state.user}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.handleUserForm.bind(this)}
         />
      </div>
    )
  }
}

export default LoginPage
