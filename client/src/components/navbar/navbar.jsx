import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
      <a
       href="#" className="logo">NetflixLite</a>
      <form>
        <input type="text"/>
        <button type="submit"><IoIosSearch /></button>
      </form>
    </nav>
  )
}

export default Navbar

