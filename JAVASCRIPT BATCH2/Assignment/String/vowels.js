// count how many vowel in the string

let str = 'kalaivanan'
let vowel = 'aeiou'
let count = 0;

for (let char of str){
    if(vowel.includes(char)){
        count++
        console.log(char)
    }
}
console.log(count)