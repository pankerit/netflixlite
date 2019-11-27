import { useEffect } from 'react'
import create from 'zustand'
import produce from 'immer'

import service from '@/service'

let timeout
const [useStore] = create((set, get) => ({
  header: {
    active: 0,
    data: null,
    isWaiting: false
  },
  setData: (callback) => set(produce(callback)),
  setHeaderActive: (i, setWaiting) => {
    if (setWaiting) {
      set(state => ({ header: { ...state.header, isWaiting: true } }))
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        set(state => ({ header: { ...state.header, isWaiting: false } }))
      }, 5000)
    }
    else {
      set(state => ({ header: { ...state.header, active: i } }))
    }
  }
}))

const Init = () => {
  const setData = useStore(state => state.setData)
  useEffect(() => {
    service.getHome().then(data => {
      setData(data)
    })
  }, [])
}

export {
  Init,
  useStore
}