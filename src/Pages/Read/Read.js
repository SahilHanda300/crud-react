import React from 'react'
import { Table } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Read.css'
const Read = () => {
  const [api, setapi] = useState([])
  const setID = (id,fname,lname) => {
    console.log(id)
    localStorage.setItem('ID', id)
    localStorage.setItem('fname', fname);
    localStorage.setItem('lname',lname);
  }
  useEffect(() => {
    axios.get('https://651ec9a844a3a8aa4769028c.mockapi.io/Crud')
      .then((getData => {
        setapi(getData.data)
      }))

  }, [])


  const getData = () =>{
    axios.get('https://651ec9a844a3a8aa4769028c.mockapi.io/Crud')
    .then((getData => {
      setapi(getData.data)
    }))
  }
  const onDelete = (id) =>{
    axios.delete(`https://651ec9a844a3a8aa4769028c.mockapi.io/Crud/${id}`)
    .then(()=>{
      getData()
    }
    )
  }
  if (api.length==0) {
    return (
    <div className='apiZero'>
    <h3>There are No Records Right Now !</h3>
    </div>
    )
  }
  return (
    <>
    <div className='read-main'>
      <h1>Read Data</h1>
      <Table columns={5}>
        <Table.Header>
          
          <Table.Row>

            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>

          </Table.Row>
          
        </Table.Header>

        <Table.Body>
          {api.map(data => {
            return (

              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell className='table-btn'>
                  <Link to='/update'>
                    <button onClick={() => { setID(data.id,data.firstName,data.lastName) }}>Update</button>
                  </Link>
                </Table.Cell>
                <Table.Cell className='table-btn table-del'><button onClick={() =>onDelete(data.id)}>Delete</button></Table.Cell>
              </Table.Row>

            )
          })}

        </Table.Body>

      </Table>
      </div>
    </>
  )
}

export default Read