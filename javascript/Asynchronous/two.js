
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
function fun4(){
    console.log("Fun4 execution started")
    console.log("Fun4 execution Completed")
}
fun1()
setTimeout(fun2,5000)
setTimeout(fun3,2000)
fun4()