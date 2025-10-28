
// Factorial using for loop

/* let num = 4
let result = 1;
for (let i =1; i<=num; i++){
    result *= i
}
console.log(`Factorial of ${5} is : ${result}`) */

let num = 5
let fact = 1
let i =1
while (i<=num){
    fact *=i
    i++
}
console.log(`Factorial of ${5} is : ${fact}`)


let a = 5

function addeven(num){
    if(a%2==0){
        console.log("the given number is even number")
    }
    else{
        console.log("The given number is add number")
    }
}

addeven(a)