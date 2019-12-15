import React from 'react'
import {Link} from '@reach/router'
import {MdVisibility} from 'react-icons/md'
import {GoPlay} from 'react-icons/go'
import {getImg} from '~/module'

const MovieCard = ({kinopoisk_id, title_ru, genre, year, rating}) => {
  const num_vote = rating.kp_num_vote >= 1000 ? Math.round(rating.kp_num_vote/1000) + 'k' : rating.kp_num_vote
  const link = `watch/${kinopoisk_id}`
  return (
    <div className="movieCard">
      <div className="img">
        <img src={getImg(kinopoisk_id, 'md')} alt={title_ru}/>
        <div className="layer">
          <Link to={link} className="play">
            <GoPlay />
          </Link>
        </div>
      </div>
      <div className="info">
        <div className="d-flex align-center justify-between">
          <p className="text xs grey">{genre[0]}, {year}</p>
          <div className="view d-flex align-center">
            <p>{num_vote}</p>
            <MdVisibility />
          </div>
        </div>
        <p className="text sm white">{title_ru}</p>
      </div>
    </div>
  )
}

export default MovieCard
