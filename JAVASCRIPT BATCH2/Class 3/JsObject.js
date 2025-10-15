// JavaScript Object
// creating a object
let emp = {
    "eid": 101,
    "ename": "Rahul",
    "esal":45000.23 
}

// Read a object
console.log(emp)
console.log(emp.eid) // 101
console.log(emp.ename) // Rahul
console.log(emp.esal) // 45000.23
console.log(emp.loc)  // undefined
let users = {
    "eid" : 101,
    "ename" : "Rahul",
    "ename" : "Rahul Gandhi",
    "ename" : "RG"
}
console.log(users) // {eid: 101,ename 'RG'}
//Duplicates are not allowed.

//update object
emp.esal = 55000.55
console.log(emp)
emp.gender = 'm'
console.log(emp)

// delete object
delete emp.gender
console.log(emp)