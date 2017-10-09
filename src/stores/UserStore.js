import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import userActions from '../actions/UserActions'
import UserData from '../data/UserData'
import BaseData from '../data/BaseData'

class UserStore extends EventEmitter {
  register (user) {
    UserData
      .register(user)
      .then(data => this.emit(this.eventTypes.USER_REGISTERED, data))
  }

  login (user) {
    UserData
      .login(user)
      .then(data => this.emit(this.eventTypes.USER_LOGGED_IN, data))
  }

  stats () {
    BaseData
      .stats()
      .then(data => this.emit(this.eventTypes.STATISTICS_FETCHED, data))
  }

  handleAction (action) {
    switch (action.type) {
      case userActions.types.REGISTER_USER : {
        this.register(action.user)
        break
      }
      case userActions.types.LOGIN_USER : {
        this.login(action.user)
        break
      }
      case userActions.types.STATISTICS : {
        this.stats()
        break
      }
      default: break
    }
  }
}

let userStore = new UserStore()

userStore.eventTypes = {
  USER_REGISTERED: 'user_registered',
  USER_LOGGED_IN: 'user_logged_in',
  STATISTICS_FETCHED: 'statistics_fetched'
}

dispatcher.register(userStore.handleAction.bind(userStore))

export default userStore
