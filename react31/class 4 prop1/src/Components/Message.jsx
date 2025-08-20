import React, { Fragment, useState } from "react";

let  Message = ()=>{
    let [msg, setMsg] = useState("Hello");
    let gmHandler = () =>{
        setMsg(" Good Morning")
    }

    let gnHandler = () =>{
        setMsg(" Good Night")
    }

    return <React.Fragment> 
                <h3> Message Component</h3>
                <h3> Msg Value : { msg}</h3>
                <button onClick={gmHandler}>GM</button>
                <button onClick={gnHandler}>GN</button>

                </React.Fragment>
}

export default Message;