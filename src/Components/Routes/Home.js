import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>this is Home Page</h1>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Home