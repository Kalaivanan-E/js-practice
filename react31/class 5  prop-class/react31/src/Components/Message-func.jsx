import { Fragment, useState } from "react"


let Message = () =>{

let [Msg,setMsg] = useState("Hello")

let updateHandler = (value)=>{

    setMsg(value)

}


return <Fragment>

        <h3> Message = {Msg}</h3>
        <button onClick={updateHandler.bind(null,"GOOD MORNING")}> GM</button>
        <button onClick={updateHandler.bind(null,"GOOD AFTERNOON")}> GA</button>
        <button onClick={updateHandler.bind(null,"GOOD EVENING")}> GE</button>
        <button onClick={updateHandler.bind(null,"GOOD NIGHT")}> GN</button>
</Fragment>


}

export default Message;

