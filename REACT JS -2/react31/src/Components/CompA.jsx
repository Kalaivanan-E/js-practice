import CompB from "./CompB";
let CompA = ()=>{
    let eid =101;
    let ename = "Rahul";

    return <div>
        <h2>Component A</h2>
        <h3>Emp_ID: {eid}</h3>
        <h3>Emp_Name: {ename}</h3>
        <hr />
        <CompB msg = {"Good Morning"} Emp_ID ={eid}/>
    </div>
}
export default CompA;