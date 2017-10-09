import React, { Component } from 'react'
import carActions from '../../actions/CarActions'
import CarStore from '../../stores/CarStore'

class CarDetailsPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      car: {}
    }
    this.handleCarRetrieved = this.handleCarRetrieved.bind(this)

    CarStore.on(
      CarStore.eventTypes.CARS_DETAILS_RETRIEVED,
      this.handleCarRetrieved)
  }

  componentWllUnmount () {
    CarStore.removeListener(
      CarStore.eventTypes.CARS_DETAILS_RETRIEVED,
      this.handleCarRetrieved)
  }

  componentDidMount () {
    const id = this.props.match.params.id
    carActions.byId(id)
  }

  handleCarRetrieved (car) {
    console.log(car)
    this.setState({car})
  }

  render () {
    return (
      <div>
        <h1>Car</h1>
        <img src={this.state.car.image} width='450px' alt={this.state.car.make} />
        <h2>{this.state.car.make}</h2>
        <h3>Model: {this.state.car.model}</h3>
        <h3>Year: {this.state.car.year}</h3>
        <h3>Price: {this.state.car.price} Leva</h3>
      </div>
    )
  }
}

export default CarDetailsPage
