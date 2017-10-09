import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import carData from '../../data/CarData'
import toastr from 'toastr'

class MineCarsListing extends Component {
  constructor (props) {
    super(props)
    this.deleteCar = this.deleteCar.bind(this)
  }

  deleteCar (id) {
    toastr.success(`Car ${this.props.make} deleted!`)
    console.log(this.props.id)
    carData.deleteCar(this.props.id)
    window.location.reload()
  }
  render () {
    return (
      <li>
        <img src={this.props.image} width='300px' alt={this.props.make} />
        <br />
        <span>Cena: {this.props.price} Leva</span>
        <br />
        <Link to={`/cars/details/${this.props.id}`}>Details</Link>
        <button onClick={this.deleteCar}><span className='delete'>Delete</span></button>
      </li>
    )
  }
}

export default MineCarsListing
