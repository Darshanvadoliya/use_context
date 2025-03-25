import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent:"space-between", gap: "10px" }}>
        <div style={{display:"flex", gap:"10px"}}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        <div  style={{display:"flex", gap:"10px"}}>
          <Link to="/Login">Login</Link>
          <Link to="/LogOut">LogOut</Link>
        </div>
      </nav>
  )
}

export default NavBar