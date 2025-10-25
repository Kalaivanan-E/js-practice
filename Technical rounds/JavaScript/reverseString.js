
// 1) Write a program to reverse a string in JavaScript

// using built-in function

function reverseString(str){

    return str.split("").reverse().join("")
}
console.log(reverseString("Kalai"))

// str.split("")  => converts the string into an array character Eg: ["k","a","l","a","i"]
// .reverse()  => it will reverse the array character Eg: ["i","a","l","a","k"]
// .join()  =>  it will joins all the elements backs into single string Eg: ialak

// using for loop

function reverseStrings(str2){
    let reversed = '';
    for(let i= str2.length-1; i>=0; i--){
        reversed = reversed + str2[i]
    }
    return reversed
}

console.log(reverseStrings("Bangalore"))