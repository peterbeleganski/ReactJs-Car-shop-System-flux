import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import RegisterPage from '../users/RegisterPage'
import LoginPage from '../users/LoginPage'
import LogoutPage from '../users/LogoutPage'
import UserStatistics from '../users/UserStatistics'
import CreateCarPage from '../cars/CreateCarPage'
import ListCarspage from '../cars/ListCarsPage'
import CarDetailsPage from '../cars/CarDetailsPage'
import ProfilePage from '../users/ProfilePage'

class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' exact component={UserStatistics} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <PrivateRoute path='/logout' component={LogoutPage} />
        <PrivateRoute path='/cars/add' component={CreateCarPage} />
        <PrivateRoute path='/cars/all' component={ListCarspage} />
        <PrivateRoute path='/cars/details/:id' component={CarDetailsPage} />
        <PrivateRoute path='/profile/mine' component={ProfilePage} />
      </Switch>
    )
  }
}

export default Routes
