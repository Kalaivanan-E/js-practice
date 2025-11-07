
let s1 = "JavaScript"
// let s2 = "JAVASCRIPT"
let s2 = "JavaScript"
// console.log(s1 == s2)    // false

let s3 = new String("JavaScript")
console.log(s1 == s3)  // true
console.log(s1 === s3)  // false because it s3 it is object data types
console.log(typeof s1)  // string
console.log(typeof s2)  // string
console.log(typeof s3)  // object
console.log(s1[0])