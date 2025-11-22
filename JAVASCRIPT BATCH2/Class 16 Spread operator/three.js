
// duplicates keys are not allowed while using spread operator

let emp = {ename:'Rahul',email:'kalaivananeswaran564@gmail.com'}
let details = {email:'kalaivananeswaran554@gmail.com',loc:'theni'}

let emp_details = {...emp, ...details}
console.log(emp_details) // {ename:'rahul',email:'kalaivananeswaran554@gmail.com',loc:'theni'}