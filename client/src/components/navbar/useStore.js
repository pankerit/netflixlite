import create from 'zustand'
import service from '~/service'


const [useStore, api] = create((set) => ({
  loading: false,
  movies: [],
  search: '',
  setState(callback) {
    callback(set)
  }
}))

let time
api.subscribe((str) => {
  if (str.length < 4) return
  clearTimeout(time)
  api.setState({ loading: true })
  time = setTimeout(() => {
    service.search(str).then(res => {
      api.setState({ movies: res, loading: false })
    })
  }, 300)
}, (state) => state.search)

export default useStore

