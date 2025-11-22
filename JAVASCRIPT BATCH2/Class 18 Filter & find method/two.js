

let employees = [
    {eid:101,ename:'Rahul',gender:'Male'},
    {eid:102,ename:'Sonia',gender:'Female'},
    {eid:103,ename:'Priyanka',gender:'Female'},
    {eid:102,ename:'Sonia',gender:'Female',duplicate:true},
    {eid:104,ename:'Modi',gender:'Male'},
    {eid:105,ename:'Rajini',gender:'Male'},
]

// iterate a male employees in new array
// without using filter method

let male_employees =[]
for (let emp of employees){
    if(emp.gender === "Male"){
        male_employees.push(emp)
    }
}
console.log(male_employees)

// iterate a Female employee in new array
// with filter method

let Female_employees = employees.filter((emp)=> {
    return emp.gender === 'Female'
})
console.log(Female_employees)

// find method

let employee = employees.find((emp)=> emp.ename==='Sonia')
console.log(employee)   // {eid:102,ename:'Sonia',gender:'Female'},