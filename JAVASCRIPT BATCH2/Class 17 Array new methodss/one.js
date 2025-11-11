
// create new array  with uppercase emp name?
// using normal function

let enames = ["rahul","priyanka","sonia"]
let users = []
enames.forEach(function enames(ename){
    users.push(ename.toUpperCase())
})
console.log(users)  // ["RAHUL","PRIYANKA",SONIA]

// using fat arrow function
let new_ename = []
enames.forEach((ename)=>{new_ename.push(ename.toUpperCase())})
console.log(new_ename)// ["RAHUL","PRIYANKA",SONIA]