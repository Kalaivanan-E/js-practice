// action is a function and it returns the actionable object

// action type

const INCR = "INCR"
const DECR = "DECR"

// action

let incrAction = () =>{
    return {type:'INCR'}
}

let decrAction = () =>{
    return {type: 'DECR'}
}

export {incrAction,decrAction,INCR,DECR}