
// Non Primitive Data types
// JavaScript Array
// create array
var eid = [101,102,103,104]
let enames = ["Rahul","Sonia","Priyanka","Modi"]
var arr1 = [10,20,30,10,10,23]
var arr2 = [10,20.5, 10,"Rahul","Y",false,undefined,null,[10,20,30],{}]
// read array
console.log(eid)
console.log(arr1)
console.log(arr2)
console.log(typeof eid)  // object
console.log(typeof arr1) // object
console.log(typeof arr2) // object
console.log(arr2[5])
console.log(eid[-4])  // undefined
//update array
enames[0] = "Rahul Gandhi";
console.log(enames)  
console.log(enames[10])  // undefined
// delete array using delete keyword
delete enames[0]
console.log(enames)

