import Data from './Data'
const baseUrl = '/cars'

class CarData {
  static create (car) {
    return Data.post(`${baseUrl}/create`, car, true)
  }

  static all (page, search) {
    page = page || 1
    search = search || ''
    return Data.get(`${baseUrl}/all?page=${page}&search=${search}`, true)
  }

  static getById (id) {
    return Data.get(`${baseUrl}/details/${id}`, true)
  }

  static getMineCars () {
    return Data.get(`${baseUrl}/mine`, true)
  }

  static deleteCar (id) {
    return Data.post(`${baseUrl}/delete/${id}`, {}, true)
  }
}

export default CarData
