import React from 'react'
import {getImgUrl} from '@/module'

const MovieCard = () => {
  return (
    <div className="movieCard">
      <img src={getImgUrl(361, 'small')} alt="Бойцовский клуб"/>
      <div className="info">
        <p className="text xs grey">фантастика, боевик, 1999</p>
        <p className="text sm white">Начало</p>
      </div>
    </div>
  )
}

export default MovieCard
