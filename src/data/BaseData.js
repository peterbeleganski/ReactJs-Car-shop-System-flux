import Data from './Data'
const baseUrl = '/'

class BaseData {
  static stats () {
    return Data.get(`${baseUrl}stats`)
  }
}

export default BaseData
