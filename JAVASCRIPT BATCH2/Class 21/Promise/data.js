
// promise

let employees = [
    {eid:101,ename:'Rahul'},
    {eid:102,ename:'sonia'}
]
let createEmployee = (emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag = true;
            if(flag){
                resolve("data inserted")
                employees.push(emp)
            }else{
                reject("Data failed")
            }
            
        },4000)
    })
}
let getEmployee = ()=>{
    setTimeout(()=>{
        let row = ''
        for (let emp of employees){
            row = row + `<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        `
        }
        document.getElementById('tbody').innerHTML = row
    },1000)
}
createEmployee({eid:103,ename:'priyanka'})
.then((msg)=>{
    console.log(msg)
    getEmployee()
})
.catch((err)=>{console.log(err)})