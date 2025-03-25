import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function Contect() {
    return (
        <div>
            <h1>This is Contecvt page</h1>
            <nav style={{display:'flex', gap:"10px"}}>
                <Link to='/'>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
             {/* <NavBar/> */}
        </div>
    )
}

export default Contect