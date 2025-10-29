
// callback function

function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function calc(a,b,callback){   // callback is just passing a another function as a argument
    return callback(a,b)
}

console.log(add(10,20))  // 30
console.log(sub(10,20))  //-10
console.log(mul(10,20))  // 200
 
console.log(calc(10,20,add))  //30
console.log(calc(10,20,sub))  //-10