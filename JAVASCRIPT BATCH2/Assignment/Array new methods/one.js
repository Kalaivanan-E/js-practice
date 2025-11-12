
// array new methods assignment

let enames = ["rahul","sonia","priyanka","priya","modi"]

//1) use forEach() to print each employee name in uppercase

enames.forEach((ename)=>{
    console.log(ename.toUpperCase())
})

//2) use map() to create a new array containing the lenghts of each name

let length_arr = enames.map((ename)=>{
    return ename.length
})
console.log(length_arr)

// 3) filter() to get name that with the letter 's'

let new_Arr = enames.filter((ename)=>{
    return ename[0] === "p"
})
console.log(new_Arr)

// 4) find() to get first name that has more than 5 characters

let first_char = enames.find((ename)=>{
    return ename.length > 5 
})
console.log(first_char)

// 5) findIndex() to find the index of 'modi'
console.log(enames.indexOf('modi'))

// 6) use some() to check if any name starts with 'r'

let some_of = enames.some((ename)=>{
    return ename[0] === 'r'
})
console.log(some_of)  // true

// 7) use every() to check if all names have more than 3 characters

let every = enames.every((ename)=>{
     return ename.length > 3
})

console.log(every)