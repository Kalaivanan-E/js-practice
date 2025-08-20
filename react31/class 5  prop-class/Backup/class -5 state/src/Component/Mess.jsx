
// Function component


// import React from "react"

// function Mess(){
//     let eid = 101
//     let ename = 'Rahul Gandhi'
//     let loc = ['Waynad','New Delhi']
//     let Details ={
//         sal : 45000,
//         avail : true
//     }

//     return <div>
//         <h1> Message Component</h1>
//         <h3> Employee Id : {eid}</h3>
//         <h3> Employee Name : {ename}</h3>
//         <h3> Location : {loc[0]}</h3>
//         <h3>Deatails: { JSON.stringify(Details)}</h3>

//     </div>
// }

// export default Mess;

// Class component

import React from "react";

class Mess extends React.Component{
     eid = 101
     ename = 'Rahul Gandhi'
     loc = ['Waynad','New Delhi']
     Details ={
        sal : 45000,
        avail : true
    }
    

    render(){
        return <div>

        <h2> Mess Class Component</h2>
        <h3> Employee Id : {this.eid}</h3>
        <h3> Employee Name : {this.ename}</h3>
        <h3> Employee location : {this.loc[0]}</h3>
        <h3> Employee Details : {JSON.stringify(this.Details)}</h3>

        </div>
    }
}

export default Mess;

