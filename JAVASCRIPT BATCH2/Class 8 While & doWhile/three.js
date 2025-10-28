
// write  a program to print no of even no using (for,while, do while, for of)

let numbers = [18,31,8,7,1055,96,11,53]
// for loops

/* let no_evens =0
for (let i =0; i<= numbers.length-1; i++){
    if(numbers[i]%2 === 0){
        no_evens ++
    }
}
console.log(no_evens)
 */

// while loops

let i =1;
let no_evens =0;
while(i<= numbers.length -1){
    if(numbers[i]%2 === 0){
        no_evens = no_evens+1
    }
}
console.log(no_evens);
