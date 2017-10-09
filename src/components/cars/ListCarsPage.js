import React, { Component } from 'react'
import carActions from '../../actions/CarActions'
import CarStore from '../../stores/CarStore'
import CarListing from './CarListing'
import queryString from 'query-string'

class ListCarsPage extends Component {
  constructor (props) {
    super(props)

    const query = queryString.parse(this.props.location.search)
    const page = parseInt(query.page, 10) || 1
    const search = query.search
    console.log(query)

    this.state = {
      page: page,
      cars: [],
      search: search || ''
    }

    this.handleCarsRetrieved = this.handleCarsRetrieved.bind(this)

    CarStore.on(CarStore.eventTypes.CARS_RETRIEVED, this.handleCarsRetrieved)
  }
  componentDidMount () {
    carActions.all(this.state.page, this.state.search)
  }

  componentWillUnmount () {
    CarStore.removeListener(
      CarStore.eventTypes.CARS_RETRIEVED,
      this.handleCarsRetrieved)
  }

  handleCarsRetrieved (cars) {
    console.log(cars)
    this.setState({ cars })
  }

  goToNextPage () {
    let page = this.state.page
    let search = this.state.search
    if (this.state.cars.length < 1) {
      return
    }
    page += 1

    this.setState({ page })

    carActions.all(page)
    this.props.history.push(`/cars/all?page=${page}&search=${search}`)
  }

  goToPrevPage () {
    let page = this.state.page
    let search = this.state.search
    if (page === 1) {
      return
    }
    page -= 1

    this.setState({ page })

    carActions.all(page)
    this.props.history.push(`/cars/all?page=${page}&search=${search}`)
  }

  render () {
    let cars = 'No cars found!'
    if (this.state.cars.length) {
      cars = this.state.cars.map(car => (
        <CarListing key={car.id} {...car} />
      ))
    }
    return (
      <div>
        <h2>List Cars</h2>
        <div>
          <button onClick={this.goToPrevPage.bind(this)}>Prev</button>
          <button onClick={this.goToNextPage.bind(this)} >Next</button>
        </div>
        <ul>
          {cars}
        </ul>
      </div>
    )
  }
}

export default ListCarsPage
