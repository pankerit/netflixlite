import { useEffect, useState } from 'react'
import create from 'zustand'
import service from '~/service'

const useFetch = () => {
  const [state, setState] = useState({ data: null, loading: true })

  useEffect(() => {
    service.getHome()
      .then((data) => {
        setState({ data, loading: false })
      })
    // eslint-disable-next-line
  }, [])

  return state
}



let timeout
const useActive = (cnt) => {
  const [[active, wait], setActive] = useState([0, false])
  useEffect(() => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      setActive([cnt - 1 <= active ? 0 : active + 1, false])
    }, wait ? 10000 : 5000)
  }, [active])

  return [active, setActive]
}



export {
  useFetch,
  useActive,
}