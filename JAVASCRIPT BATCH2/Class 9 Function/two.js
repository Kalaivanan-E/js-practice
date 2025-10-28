
// function with parameter

function add(a,b){
    console.log(a+b);
}
add (10,30)    // 40 

// function with default values 

function addnum(a,b,c=5){
    console.log(a+b+c);
}
addnum(1,2,3)   //6
addnum(1,2)   // 8

function adds(a,b){
    let c= 100
    return (a+b+c);
}

let r1 = adds(1,2)
console.log(r1);   // 103

let r2 = adds(1,2,5)
console.log(r2)
