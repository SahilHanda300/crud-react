import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home-main'>
    <h2>Features of this App !</h2>
    <div className='home-links'>
      <ul>
        <li>Create</li>
        <h4>You can Create Users as much as you like !</h4>
        <li>Update</li>
        <h4>You can Update The User which you wish to ! The Form will come pre-filled of the user</h4>

        <li>Read</li>
        <h4>You can also Read the Data in Tabular Format</h4>

        <li>Delete</li>
        <h4>You can also Delete any User !</h4>

        <li>API Used : (Mock API)</li>
        <h4>https://651ec9a844a3a8aa4769028c.mockapi.io/Crud</h4>
      </ul>
    </div>
    </div>
  )
}

export default Home