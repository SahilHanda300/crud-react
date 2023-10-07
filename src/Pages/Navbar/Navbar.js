import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-main'>
      <div className='nav'>
        <img src={logo} />
        <h3>CRUD in React</h3>
        <div className='links'>
          <ul>
            <Link to="/" className='home-link'>Home</Link>

            <Link to="/create">Create</Link>
            <Link to="/read"><li>Read , Update & Delete</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar