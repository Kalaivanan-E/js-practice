
// Arrow function is alternative way to write a function. 

// function without parameter

function add(){
    console.log(`Addition`)
}
 add ()

let a =100
let b = 200

// function with parameter
function sub(a,b){
    console.log(a-b)
}
sub(a,b)    // -100
sub(a)      // NaN

// Arrow function
let adds = ()=>{
    console.log(`Addition of ${a} +${b} = ${a+b}`)
}

adds(a,b)

let getfullname = (fname,lname)=>{
    return fname + lname
}

let name1 = getfullname("kalai","vanan")
console.log(name1)

console.log(getfullname("Rahul","Gandhi"))
