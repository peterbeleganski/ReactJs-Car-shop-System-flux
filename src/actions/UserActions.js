import dispatcher from '../dispatcher'

const userActions = {
  types: {
    REGISTER_USER: 'REGISTER_USER',
    LOGIN_USER: 'LOGIN_USER',
    STATISTICS: 'STATISTICS'
  },
  register (user) {
    dispatcher.dispatch({
      type: this.types.REGISTER_USER,
      user
    })
  },
  login (user) {
    dispatcher.dispatch({
      type: this.types.LOGIN_USER,
      user
    })
  },
  stats () {
    dispatcher.dispatch({
      type: this.types.STATISTICS
    })
  }
}

export default userActions
