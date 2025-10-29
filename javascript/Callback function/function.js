
// this is normal function 
let a =17;

function oddoreven(){
    return  (a%2==0)?'Even number' : 'odd number'
}
// console.log(oddoreven(a))

let OddorEven = oddoreven;
console.log(OddorEven(a))