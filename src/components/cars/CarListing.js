import React from 'react'
import { Link } from 'react-router-dom'

const CarListing = (props) => (
  <li>
    <img src={props.image} width='300px' alt={props.make} />
    <br />
    <span>Cena: {props.price} Leva</span>
    <br />
    <Link to={`/cars/details/${props.id}`}>Details</Link>
  </li>
)

export default CarListing
