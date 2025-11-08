// Array new Methods
/* push() = append elements end of the array
pop()     = remove last element from array
shift()   = remove first element from array
unshift() = add element begins of array
slice()
reverse() = reverse the array element
join()
split()
map()   = it will iterate the array and give new array 
filter()
forEach()
sort()
indexof() = return index value of specified element
 */
let eids = [101,102,103,104]
console.log(eids) // 101,102,103,104
eids.push(105)  
console.log(eids) // 101,102,103,104,105
eids.pop()
console.log(eids) // 101,102,103,104
eids.shift()
console.log(eids) // 102,103,104
eids.unshift(101)
console.log(eids) // 101,102,103,104
console.log(eids.reverse())   // 104,103,102,101
console.log(eids.indexOf(102))  // 2

// let emp = eids.map((eids)=> { return console.log(eids)})



