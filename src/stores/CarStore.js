import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import carActions from '../actions/CarActions'
import carData from '../data/CarData'

class CarStore extends EventEmitter {
  creteCar (car) {
    carData
      .create(car)
      .then(data => this.emit(this.eventTypes.CAR_CREATED, data))
  }

  allCars (page, search) {
    page = page || 1
    carData
      .all(page, search)
      .then(data => this.emit(carStore.eventTypes.CARS_RETRIEVED, data))
  }

  byId (id) {
    carData
      .getById(id)
      .then(data => this.emit(this.eventTypes.CARS_DETAILS_RETRIEVED, data))
  }

  getMyCars () {
    carData
      .getMineCars()
      .then(data => this.emit(this.eventTypes.MY_CARS_RETRIEVED, data))
  }

  deleteCar () {
    carData
      .deleteCar()
      .then(data => this.emit(this.eventTypes.CAR_DELETED, data))
  }

  handleAction (action) {
    switch (action.type) {
      case carActions.types.CREATE_CAR: {
        this.creteCar(action.car)
        break
      }
      case carActions.types.ALL : {
        this.allCars(action.page)
        break
      }
      case carActions.types.CAR_DETAILS : {
        this.byId(action.id)
        break
      }
      case carActions.types.MINE_CARS : {
        this.getMyCars()
        break
      }
      case carActions.types.DELETE_CARS : {
        this.deleteCar(action.id)
        break
      }
      default: break
    }
  }
}

let carStore = new CarStore()

carStore.eventTypes = {
  CAR_CREATED: 'car_created',
  CARS_RETRIEVED: 'cars_retrieved',
  CARS_DETAILS_RETRIEVED: 'cars_details_retrieved',
  MY_CARS_RETRIEVED: 'my_cars_retrieved',
  CAR_DELETED: 'car_deleted'
}

dispatcher.register(carStore.handleAction.bind(carStore))

export default carStore
