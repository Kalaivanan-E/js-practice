// merge array using spread operator
let a = [10,20,30,40]
let b = [30,40,50,60]
let c = [...a , ...b]
console.log(c)  //[10,20,30,40,30,40,50,60]

// merge object using spread operator

let emp = {'eid':101,"ename":"Rahul",esal:45000.45}
let user = {...emp}
console.log(emp)  // {'eid':101,"ename":"Rahul",esal:45000.45}
console.log(user) // {'eid':101,"ename":"Rahul",esal:45000.45}




