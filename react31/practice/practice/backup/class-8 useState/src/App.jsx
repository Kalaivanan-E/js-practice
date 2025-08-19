

// import React, { Component } from 'react';
// import Navbar from './Component/Navbar';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>App Components </h2>
//                 <hr />
                

//             </div>
//         );
//     }
// }

// export default App;

import React, { useState} from "react";

let App = ()=>{

     const [num,setNum]= useState(1)

    // let x = 1;

    const handloaded = ()=>{
        // x=x+1;
        // console.log(x)
        setNum((currvalue)=>{
            return currvalue + 1;
        })
    }

    console.log(num)

    return <div>
        <h2> App components</h2>
        <h1>{num}</h1>
        <button onClick={handloaded}>Adds</button>
    </div>
}

export default App;