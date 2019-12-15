import React from 'react'
import {Link} from '@reach/router'
import {useClickAway} from 'react-use';
import useStore from './useStore'
import {getImg} from '~/module'
import { ReactComponent as Logo } from './loading.svg';

const DropDown = () => {
  const [movies, loading, search, setState] = useStore((state) => ([state.movies, state.loading, state.search, state.setState]))
  const ref = React.useRef()
  useClickAway(ref, () => setState((set) => set({search: ''})))

  if (search.length < 4) return null
  const show_movies = movies.map((movie) => <div key={movie.kinopoisk_id} className="item">
    <img src={getImg(movie.kinopoisk_id, 'sm')} alt={movie.title_ru}/>
    <Link to={`watch/${movie.kinopoisk_id}`} className="info">
      <div className="text xs grey">{movie.genre.slice(0, 2).join(', ')}, {movie.year}</div>
      <div className="text sm bold d-block" style={{marginTop: '.3rem'}}>{movie.title_ru}</div>
    </Link>
  </div>)
  return (
    <div ref={ref} className="drop-down">
      {loading ? <Logo /> : show_movies} 
    </div>
  )
}

export default DropDown
