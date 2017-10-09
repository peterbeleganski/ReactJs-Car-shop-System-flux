import { Component } from 'react'
import Auth from './Auth'
import toastr from 'toastr'

class LogoutPage extends Component {
  componentWillMount () {
    Auth.deauthenticateUser()
    toastr.success('You have sign out!')
    this.props.history.push('/login')
  }

  render () {
    return null
  }
}

export default LogoutPage
