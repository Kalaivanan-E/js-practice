

/* 
 =>The map() method in javascript is used to create a new array by changing or transforming
    each element from the existing array
 => It runs a function on every element and returns a new array with an updated values,
     wihout changing the original array */

let numbers  = [101,102,103,104]

let results = numbers.map((numbers)=>{
    return numbers                      // [101,102,103,104]
})

console.log(results)


let eids =[101,102,103,104,105];
let result=eids.map((eids)=>{
    console.log(eids);            // prints 101,102,103,...
    
})
console.log(result);    // [undefined, undefined, undefined..]    
/* the map() always creates new arr from the retured values from 
     callback function, but here we did't mentioned the return anything so it will show undefined.
 */