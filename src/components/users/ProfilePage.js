import React, { Component } from 'react'
import carActions from '../../actions/CarActions'
import CarStore from '../../stores/CarStore'
import MineCarsListing from '../cars/MineCarsListing'

class ProfilePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cars: []
    }

    this.handleCarsFetched = this.handleCarsFetched.bind(this)

    CarStore.on(
      CarStore.eventTypes.MY_CARS_RETRIEVED,
      this.handleCarsFetched
    )
  }
  componentWillMount () {
    carActions.mineCars()
  }

  componentWillUnMount () {
    CarStore.removeListener(
      CarStore.eventTypes.MY_CARS_RETRIEVED,
      this.handleCarsFetched
    )
  }

  handleCarsFetched (data) {
    this.setState({
      cars: data
    })
    console.log(data)
  }
  render () {
    let cars = 'No cars found!'

    if (this.state.cars.length) {
      cars = this.state.cars.map(car => (
        <MineCarsListing key={car.id} {...car} />
      ))
    }

    return (
      <div>
        <h2>My profile page</h2>
        <ul>
          {cars}
        </ul>
      </div>
    )
  }
}

export default ProfilePage
