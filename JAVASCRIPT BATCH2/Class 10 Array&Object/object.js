
// how to verify given object is empty or not

let user = {
    
}
let emp = {
    eid : 101,
    ename : 'Rahul'
}
console.log(emp.eid)   //101
console.log(emp.ename )  //ename
// length property is not applicable for Object

console.log(emp.length)  // undefined

// Object.key() => Object inbuilt function, it will return all the key of an Object as a array
// Object.values() => Object inbuilt function, it will return all the values of an Object as a array
console.log(Object.keys(emp))  // [eids, ename]
console.log(Object.values(emp))   // [101,'Rahul']
console.log(Object.keys(emp).length );  // 2
console.log(Object.keys(user).length);  // 0

Object.keys(emp).length > 0 ? console.log("Not a Empty object") : console.log("Empty object")

