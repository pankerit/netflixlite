import axios from 'axios'

class Service {
  URL = process.env.REACT_APP_SERVER_URL

  getHome = () => axios(URL + 'api/get-home').then(res => res.data)

}

export default new Service
