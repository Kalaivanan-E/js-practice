
// find() methods iterate array and executes the provided function
// to verify wheather element is present or not

let employees = [{eid:101,ename:'Rahul'},
    {eid:102,ename:"sonia"},
    {eid:103,ename:"Priyanka"},
]

employees.find((emp)=>{return emp.eid==101})
console.log(emp)