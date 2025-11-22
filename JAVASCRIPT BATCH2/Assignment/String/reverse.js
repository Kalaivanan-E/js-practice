// reverse the string without using built-in function

let string = "Kalaivanan"
let rev = '';

for (let i= string.length-1; i>=0; i--){
    rev = rev + string[i]
}
console.log(rev)

// reverse the string using built-in function

let str = 'JavaScript'
let split = str.split("")
console.log(split)
let reverse = split.reverse()
console.log(reverse)
let join = reverse.join("")
console.log(join)

let reversed = str.split("").reverse().join("")
console.log(reversed)