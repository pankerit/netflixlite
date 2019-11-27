import React from 'react'
import MovieCard from '@C/movie-card'

const PopularMovies = () => {

  const nav = ['Сегодня', 'Эта неделя', 'Последние 30 дней']
    .map((el, idx) => <button className="text sm grey">{el}</button>)


  return (
    <div className="popular-movies">
      <div className="wrapper grid">
        <div className="navigation d-flex">
          {nav}
        </div>
        <div className="info">
          <h2 className="text lg white">Популярные фильмы смотреть сейчас</h2>   
        </div>
        
        <div className="card"><MovieCard /></div>
        <div className="card"><MovieCard /></div>
        <div className="card"><MovieCard /></div>
        <div className="card"><MovieCard /></div>
        <div className="card"><MovieCard /></div>
        <div className="card"><MovieCard /></div>
        <div className="card"><MovieCard /></div>
        <div className="card"><MovieCard /></div>
        <div className="card"><MovieCard /></div>
        <div className="card"><MovieCard /></div>
        
      </div>
    </div>
  )
}

export default PopularMovies
