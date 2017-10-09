import React from 'react'
import Input from '../common/Input'

const CreateCarForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input
      name='make'
      placeholder='Car make'
      value={props.car.make}
      onChange={props.onChange} />
    <br />
    <Input
      name='model'
      type='text'
      placeholder='Car model'
      value={props.car.model}
      onChange={props.onChange} />
    <br />
    <Input
      name='year'
      type='number'
      placeholder='Car year'
      value={props.car.year}
      onChange={props.onChange}
    />
    <br />
    <Input
      name='engine'
      type='text'
      placeholder='Car engine'
      value={props.car.engine}
      onChange={props.onChange}
    />
    <br />
    <Input
      name='price'
      type='number'
      placeholder='Car price'
      value={props.car.price}
      onChange={props.onChange}
    />
    <br />
    <Input
      name='image'
      type='url'
      placeholder='Car image'
      value={props.car.image}
      onChange={props.onChange}
    />
    <br />
    <Input
      name='mileage'
      type='number'
      placeholder='Car mileage(optional)'
      value={props.car.mileage}
      onChange={props.onChange}
    />
    <br />
    <input type='submit' onClick={props.onSave} value='Create  Car' />
  </form>
)

export default CreateCarForm
