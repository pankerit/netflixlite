import axios from 'axios'
class Service {
  URL = process.env.REACT_APP_SERVER_URL


  getHome = () => axios(this.URL + '/api/get-home').then(res => res.data)
  search = (search) => axios(this.URL + '/api/search?search=' + search).then(res => res.data)

}

export default new Service()
