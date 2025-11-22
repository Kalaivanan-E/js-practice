
// spread operator
/* 1) create a new Array
2) merge array Object
3) extends array/elements */

let uids = [101,102,103,104]
// create new array [eids] based on existing
let eids = [...uids]
console.log(eids)    // [101,102,103,104]

// without spread operator:
let numbers = [101,102,103,104,105]
//create new array based on existing arrray
let new_eids =[]
for(let num of numbers){
    new_eids.push(num)
}
console.log(new_eids); //[101,102,103,104,105] 
