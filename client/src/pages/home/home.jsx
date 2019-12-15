import React from 'react'
import {useFetch} from './useHome'
import Header from './header'
import PopularMovies from './popular-movies'

const Home = () => {
  const {data, loading} = useFetch()
  if (loading) return 'loading...'
  return (
    <div id="home">
      <Header data={data.header}/>
      <PopularMovies data={data}/>
    </div>
  )
}
  

export default Home