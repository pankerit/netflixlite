import React, {useState} from 'react'
import MovieCard from '~C/movie-card'

const arr =  [['Сегодня', 'day'], ['Эта неделя', 'week'], ['Последние 30 дней', 'month']]
let timeout
const PopularMovies = ({data}) => {
  const [active, setActive] = useState(0)
  const [movie, setMovie] = useState(null)

  const onMovie = (movie) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => setMovie(movie), 500)
  }

  const nav = arr.map((el, idx) => <button className={`text sm grey ${active === idx && 'active'}`} 
    onClick={() => setActive(idx)} key={idx}>
      <span>{el[0]}</span>
    </button>)

  const movies = data[`movies_${arr[active][1]}`].map(el => <div className="card" key={el._id} 
    onMouseEnter={() => onMovie(el)}>
      <MovieCard {...el} />
    </div>)

  return (
    <div className="popular-movies">
      <div className="wrapper grid">
        <div className="navigation d-flex">
          {nav}
        </div>
        
        <div className="movie-info">
          {!movie && <div className="popular text lg white">Популярные фильмы смотреть сейчас</div>}   
          {movie && <MovieInfo {...movie}/>}
        </div>
        
        {movies}
        
      </div>
    </div>
  )
}


const MovieInfo = ({genre, year, title_ru}) => {
  return <>
    <p className="text sm grey medium">{genre.join(', ')}, {year}</p>
    <h2 className="text md white bold">{title_ru}</h2>
  </>

}

export default PopularMovies
