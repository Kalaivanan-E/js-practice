// Create a function that returns the largest of 3 numbers


function myfunctions(n){
    if(n>=100 && n<=999){
        console.log("The given number is a 3 digit:", n)
    }
    else {
        console.log("The given number is not 3 digit :", n)
    }
}

myfunctions(459)


// Write a function that takes a string and returns it reversed

function reversestring(str){
   return str.split("").reverse().join("")
}
let input="kalaivanan"
console.log(reversestring(input))