
// Asynchronous executes multi task at the same time(without blocking other code)

function fun1(){
    console.log("Fun1 execution started")
    console.log("Fun1 execution Completed")
}
function fun2(){
    console.log("Fun2 execution started")
    console.log("Fun2 execution Completed")
}
function fun3(){
    console.log("Fun3 execution started")
    console.log("Fun3 execution Completed")
}
fun1()
setTimeout(fun2, 5000)
fun3()
