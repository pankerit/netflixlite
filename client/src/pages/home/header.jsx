import React from 'react'
import styled from 'styled-components'
import {useInterval} from 'react-use';
import shallow from 'zustand/shallow'
import {useStore} from './useData'

const Header = () => {
  const {active, data, isWaiting} = useStore(state => state.header, shallow)
  const setHeaderActive = useStore(state => state.setHeaderActive)

  useInterval(() => {
    setHeaderActive(active > data.length-2 ? 0 : active + 1 )
  }, isWaiting ? null : 5000)
  if(!data) return null

  const style = {
    backgroundImage: `url('${data[active].poster}')` 
  }
  return (
    <div className="header" style={style}>
      <Left />
      <Right />
    </div>
  )
}

const Left = () => {
  const {data, active} = useStore(state => state.header)
  const info = data[active]
  return (
    <div className="left">
      <span className="text sm grey zd-block">{info.genre.slice(3).join(', ')} | {info.year} | {info.country.slice(0, 2).join(', ')} | {info.time.split('.')[0]}</span>
      <h1 className="text xl white d-block">{info.title_ru}</h1>
      <div className="buttons">
        <a href="#" className="text sm white medium">СМОТРЕТЬ</a>
        <button className="text sm white medium">ТРЕЙЛЕР</button>
      </div>
    </div>
  )
}

const Right = () => {
  const {data, active} = useStore(state => state.header)
  const setActive = useStore(state => state.setHeaderActive)
  
  const boxex = data.map(({img, kinopoisk_id}, id) => <Box onClick={() => setActive(id, true)} 
    key={id} img={kinopoisk_id} active={id === active && true}/>)
  
  return (
    <div className="right">
      {boxex}
    </div>
  )
}

const Box = styled.div`
  background-image: url('${props => `https://st.kp.yandex.net/images/film_big/${props.img}.jpg`}');
  transition: all .2s;
  ${({active}) => `
    border-bottom: 3px solid ${active ? 'var(--active)' : 'rgba(19,23,34, .5)'};
    ${active ? `transform: translateY(-5%) scale(1.1);` : ''}
    &::before {
      opacity: ${active ? '0' : '.5'};
    }
  `}
`

export default Header

