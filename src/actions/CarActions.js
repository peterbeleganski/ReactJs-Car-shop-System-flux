import dispatcher from '../dispatcher'

const carActions = {
  types: {
    CREATE_CAR: 'CREATE_CAR',
    ALL: 'ALL_CARS',
    CAR_DETAILS: 'CAR_DETAILS',
    MINE_CARS: 'MINE_CARS',
    DELETE_CARS: 'DELETE_CARS'
  },
  createCar (car) {
    dispatcher.dispatch({
      type: this.types.CREATE_CAR,
      car
    })
  },
  all (page, search) {
    page = page || 1
    dispatcher.dispatch({
      type: this.types.ALL,
      page,
      search
    })
  },
  byId (id) {
    dispatcher.dispatch({
      type: this.types.CAR_DETAILS,
      id
    })
  },
  mineCars () {
    dispatcher.dispatch({
      type: this.types.MINE_CARS
    })
  },
  deleteCars (id) {
    dispatcher.dispatch({
      type: this.types.DELETE_CARS,
      id
    })
  }
}

export default carActions
