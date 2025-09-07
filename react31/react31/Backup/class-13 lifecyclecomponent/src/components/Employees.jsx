

import React, {useState, useEffect } from 'react'
import Axios from 'axios'

 const Employees = () => {
  let [employees, setEmployees] = useState([])

  useEffect(() =>{
     Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{
      setEmployees(resp.data)
    })
    .catch()
  })

  return (
    <div>
      <pre>{JSON.stringify(employees)}</pre>
      <h2> Employees Components</h2>
      {
        employees.length > 0 ? 
        <>
          <table>
            <thead>
            <tr>
              <th>Employee Id: </th>
              <th>Employee Name:</th>
              <th>Employee Company:</th>
            </tr>
              
            </thead>
            <tbody>
              {
                employees.map((emp)=>{
                  return <tr key={emp.id}>
                    <td>{emp}</td>
                  </tr>
                })
              }

            </tbody>
          </table>
        </>
        : <p>No employees found.</p>
      }
    </div>
  )
}

export default Employees;
