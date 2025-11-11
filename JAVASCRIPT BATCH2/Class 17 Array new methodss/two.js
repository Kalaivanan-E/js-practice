/* 
 The map() method is used to iterate (loop) through an array
and return a new array with modified values. */


let enames = ["rahul","priyanka","sonia"]

let new_enames = enames.map((ename)=>{
    return ename.toUpperCase()
})
console.log(new_enames)


