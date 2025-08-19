import React, { useEffect, useState } from 'react';

const App = ()=>{

     let [num1,setNum1]=useState(100)
     let [num2,setNum2]=useState(1000)

     useEffect(()=>{
        setNum1(200);
        console.log('from useEffect');
        
     },[])

     console.log('num1',num1)
     console.log('num2',num2)

    return <div>
        <h2> App Components</h2>
        <hr />
        <h2>{num1}</h2>
        <button onClick={()=>setNum1((curr)=> curr + 1)}>Add</button>
        <h2>{num2}</h2>
        <button onClick={()=>setNum2((curr)=> curr + 1)}>Add</button>
    </div>
}

export default App