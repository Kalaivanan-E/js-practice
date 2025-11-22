

let employees = [
    {eid:101,ename:'Rahul',esal:45000},
    {eid:102,ename:'Sonia',esal:55000}
]

let createEmployee = (emp, callback)=>{
    setTimeout(()=>{
        employees.push(emp);
        callback()
    },4000)
    
}
let getEmployees = ()=>{
    setTimeout(()=>{
        let row = '';
        for (let emp of employees){
            row = row + `
                        <tr> 
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                        </tr>`
        }
        document.getElementById('tbody').innerHTML = row 
    },1000)
}

createEmployee({eid:103,ename:'priya',esal:5000},getEmployees)
