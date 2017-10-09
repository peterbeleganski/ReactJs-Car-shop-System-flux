import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../users/Auth'
import userStore from '../../stores/UserStore'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: Auth.getUser().name
    }

    this.handleUserLoggedIn = this.handleUserLoggedIn.bind(this)

    userStore.on(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLoggedIn)
  }

  handleUserLoggedIn (data) {
    if (data.success) {
      this.setState({
        username: data.user.name
      })
    }
  }

  render () {
    return (
      <span>
        <Link to='/'>Home</Link>
        { Auth.isUserAuthenticated() ? (
          <span>
            <Link to='/cars/add'>Add new Car</Link>
            <Link to='/cars/all'>All Cars</Link>
            <Link to='/profile/mine'>My profile</Link>
            <span>User: {this.state.username}</span>
            <Link to='/logout'>Logout</Link>
          </span>
    ) : (
      <span>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </span>
      )}
      </span>
    )
  }
}

export default Navbar
