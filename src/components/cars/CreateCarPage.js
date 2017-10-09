import React, { Component } from 'react'
import CreateCarForm from './CreateCarForm'
import FormHelpers from '../common/FormHelpers'
import carActions from '../../actions/CarActions'
import carStore from '../../stores/CarStore'
import toastr from 'toastr'

class CreateCarPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      car: {
        make: '',
        model: '',
        year: 0,
        engine: '',
        price: 0,
        image: '',
        mileage: ''
      },
      error: ''
    }
    this.handleCarCreation = this.handleCarCreation.bind(this)
    this.handleCarForm = this.handleCarForm.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleFormChange = this.handleFormChange.bind(this)

    carStore.on(carStore.eventTypes.CAR_CREATED, this.handleCarCreation)
  }
  handleInputChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'car')
  }

  handleCarForm (event) {
    event.preventDefault()
    if (
      !this.state.car.model ||
      !this.state.car.image ||
      !this.state.car.make ||
      !this.state.car.engine ||
      !this.state.car.price ||
      !this.state.car.year) {
      this.setState({
        error: 'Form data invalid, please provide all the fields'
      })
    } else {
      carActions.createCar(this.state.car)
    }
  }

  componentWillUnmount () {
    carStore.removeListener(
      carStore.eventTypes.CAR_CREATED,
      this.handleCarCreation
    )
  }
  handleCarCreation (data) {
    console.log(data)

    if (!data.success) {
      let firstError = FormHelpers.extractFirstError(data)
      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.props.history.push(`/`)
    }
  }

  render () {
    return (
      <div>
        <h2>Create your car here!</h2>
        <CreateCarForm
          car={this.state.car}
          error={this.state.error}
          onChange={this.handleInputChange}
          onSave={this.handleCarForm}
         />
      </div>
    )
  }
}

export default CreateCarPage
