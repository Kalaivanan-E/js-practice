import { Fragment, useState } from "react"


let Message = () =>{

let [Msg,setMsg] = useState("Hello")

let gmHandler = ()=>{
    setMsg("GOOD MORNING")
}
let gaHandler = ()=>{
    setMsg("GOOD AFTERNOON")
}
let geHandler = ()=>{
    setMsg("GOOD EVENING")
}
let gnHandler = ()=>{
    setMsg("GOOD NIGHT")
}


return <Fragment>

        <h3> Message = {Msg}</h3>
        <button onClick={gmHandler}> GM</button>
        <button onClick={gaHandler}> GA</button>
        <button onClick={geHandler}> GE</button>
        <button onClick={gnHandler}> GN</button>
</Fragment>


}

export default Message;

