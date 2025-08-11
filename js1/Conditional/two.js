//Conditional chains

// avg >= 90 A grade
// avg >= 80 B grade
// c grade

// let a = 10 

// console.log(a)

let x = '5'
let y = 5

console.log(x==y) // true
console.log(x===y) // false

// print all even number from 1 to 20


for (i=1; i<=20; i++){
    if(i%2==0){
        console.log(i)
    }
}

//a function that takes a string and returns it reversed.

// using built in methods

function reversestring(str){
    return str.split('').reverse().join('');    


}

console.log(reversestring("hello"))  // 'olleh'

// .split('')  --> turns 'hello' into ['h','e','l','l','o']
// .reverse()  --> reverse the array to ['o','l','l','e','h']
// .join()     --> combines back to 'olleh'

// without .reverse()

function Reversestring(str){
    let reversed = '';
    for(let i = str.length -1 ; i>= 0; i--){
        reversed += str[i];
    }

    return reversed;
}

console.log(Reversestring("Kalaivanan"));  //nanavialak


console.log(a);
var a = 10;

function greet(name) {
    console.log("Hello, " + name);
}


greet('Kalai')