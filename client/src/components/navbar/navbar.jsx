import React from 'react'
import { Link } from "@reach/router"
import { IoIosSearch } from "react-icons/io";
import DropDown from './drop-down'
import useStore from './useStore'

const Navbar = () => {
  const search = useStore(state => state.search)
  const setState = useStore(state => state.setState)
  
  const onChange = (e) => {
    const {value} = e.target
    setState((set) => set({search: value}))
  }
  return (
    <nav>
      <Link to="/" className="logo">NetflixLite</Link>
      <form>
        <input type="text" onChange={onChange} value={search}/>
        <button type="submit"><IoIosSearch /></button>
        <DropDown />
      </form>
    </nav>
  )
}

export default Navbar




