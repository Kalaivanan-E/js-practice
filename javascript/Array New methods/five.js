

let enames = ['Rahul', 'sonia', 'priyanka','modi'];

// create a new array with uppercase names - based on the existing array

let newEnames = enames.map((ename)=>{
    return ename.toLocaleUpperCase ()
})

console.log(newEnames)