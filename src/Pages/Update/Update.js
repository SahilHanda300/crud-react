import React, { useState,useEffect } from 'react'
import { Button,Form } from 'semantic-ui-react'
import axios from 'axios'
import './Update.css'
const Update = () => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [ID, setID] = useState(null)

  const sendToAPI = () =>{
    axios.put(`https://651ec9a844a3a8aa4769028c.mockapi.io/Crud/${ID}`,{
        firstName,
        lastName
    })
  }

  useEffect(() => {
    setfirstName(localStorage.getItem('fname'))
    setlastName(localStorage.getItem('lname'))
    setID(localStorage.getItem("ID"))
  }, [])
  
  return (
    <div className='update-main'>
    <Form>
      <h3>Update User</h3>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' name='fname' value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
      {console.log(firstName)}
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' name='lname ' value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
    </Form.Field>
    <Button type='submit' onClick={sendToAPI}>Update</Button>
  </Form>
  </div>
  )
}

export default Update