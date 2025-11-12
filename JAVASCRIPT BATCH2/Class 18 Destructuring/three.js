// object destructuring

let emp = {
    eid:101,
    ename :'Rahul',
    details :{
        email:'Ragul@gmail.com',
        loc: 'wayanad'
    }
}
// console.log(ename);  // Reference error
console.log(emp.ename);  // Rahul
// console.log(loc);  // Reference error
console.log(emp.details.loc);  // wayanad


// using object destructuring

let {ename,details} =emp;
let {loc} = details
console.log(ename) // Rahul
console.log(loc)  // Wayanad