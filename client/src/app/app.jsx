import React from 'react'
import { Router } from "@reach/router"
import '~/styles/main.scss'

import Navbar from '~C/navbar'
import Home from '~/pages/home'

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/"/>
      </Router>
    </>
  )
}

export default App
