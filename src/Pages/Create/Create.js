import React, { useState } from 'react'
import { Button,Form } from 'semantic-ui-react'
import axios from 'axios'
import './Create.css'
const Create = () => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  

  const sendToAPI = () =>{
    axios.post(`https://651ec9a844a3a8aa4769028c.mockapi.io/Crud`,{
        firstName,
        lastName
    })
  }
  return (
    <div className='create-main'>
    <Form>
    <Form.Field>
    <h3>Create User</h3>

      <label>First Name</label>
      <input placeholder='First Name' name='fname' onChange={(e)=>setfirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' name='lname 'onChange={(e)=>setlastName(e.target.value)}/>
    </Form.Field>
    <Button type='submit' onClick={sendToAPI}>Submit</Button>
  </Form>
  </div>
  )
}

export default Create