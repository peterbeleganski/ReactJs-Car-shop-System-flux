import React, { Component } from 'react'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'

class UserStatistics extends Component {
  constructor (props) {
    super(props)

    this.state = {
      stats: {
        users: 0,
        cars: 0
      },
      error: ''
    }
    this.handleStatisticsFetched = this.handleStatisticsFetched.bind(this)

    userStore.on(
      userStore.eventTypes.STATISTICS_FETCHED,
      this.handleStatisticsFetched
    )
  }

  componentWillMount () {
    userActions.stats()
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.STATISTICS_FETCHED,
      this.handleStatisticsFetched
    )
  }
  handleStatisticsFetched (data) {
    console.log(data)
    this.setState({
      stats: data
    })
  }
  render () {
    return (
      <div>
        <h1>HomePage, Statistics</h1>
        <h2>Users registered: {this.state.stats.users}</h2>
        <h2>Cars created: {this.state.stats.cars}</h2>
      </div>
    )
  }
}

export default UserStatistics
