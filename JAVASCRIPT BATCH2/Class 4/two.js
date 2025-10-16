// print all employees name without using iterable object
let eids = [101,102,103,104]
let employees = [
    {"eid":101,"ename":"RG","esal":4500},
    {"eid":102,"ename":"SG","esal":5500},
    {"eid":103,"ename":"PG","esal":6500},
    {"eid":104,"ename":"NM","esal":7500},
]
console.log(typeof eids)        // object
console.log(typeof employees)   // object
console.log(employees[0])       // {eid: 101, ename: RG, esal: 4500}
console.log(employees[1].ename) // SG

// for of loop
// to print employees name without hard coding

for (let emp of employees){
    console.log(emp.ename)
}
