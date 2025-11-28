import React from 'react'
import Employee from './Employee'

const User = () => {
    let users = [
        {uid: 101, uname: "Rahul", loc: "Wayanad"},
        {uid: 102, uname: "Sonia", loc: "New Delhi"},
        {uid: 103, uname: "Priyanka", loc: "New Delhi"},
        {uid: 104, uname: "Modi", loc: "Gujarat"},
    ]
  return (
    <div>
        <h1>User Components</h1><hr />
        <Employee employee = {users}/>
    </div>
  )
}

export default User