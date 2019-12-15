import React from 'react'
import styled from 'styled-components'
import {getImg} from '~/module'
import {useActive} from './useHome'

const Header = ({data}) => {
  const [active, setActive] = useActive(data.length)
  const style = {
    backgroundImage: `url('${data[active].poster}')` 
  }
  return (
    <div className="header" style={style}>
      <Left data={data[active]}/>
      <Right data={data} active={active} setActive={setActive}/>
    </div>
  )
}

const Left = ({data}) => {
  return (
    <div className="left">
      <span className="text sm grey zd-block">{data.genre.slice(0,2).join(', ')} | {data.year} | {data.country.slice(0, 2).join(', ')} | {data.time.split('.')[0]}</span>
      <h1 className="text xl white d-block">{data.title_ru}</h1>
      <div className="buttons">
        <a href="#asd" className="text sm white medium">СМОТРЕТЬ</a>
        <button className="text sm white medium">ТРЕЙЛЕР</button>
      </div>
    </div>
  )
}

const Right = ({data, active, setActive}) => {
  
  const boxex = data.map(({kinopoisk_id}, id) => <Box onClick={() => setActive([id, true])} 
    key={id} kp_id={kinopoisk_id} active={id === active && true}/>)
  
  return (
    <div className="right">
      {boxex}
    </div>
  )
}

const Box = styled.div`
  background-image: url('${props => getImg(props.kp_id, 'md')}');
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

