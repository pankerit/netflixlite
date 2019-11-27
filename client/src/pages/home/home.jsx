import React from 'react'
import {Init} from './useData'
import Header from './header'
import PopularMovies from './popular-movies'

const Home = () => {
  Init()

  return (
    <div id="home">
      <Header />
      <PopularMovies />
    </div>
  )
}

export default Home