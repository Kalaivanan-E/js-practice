
// write a program to verify given array is empty or not?
// write a program to verify given object is empty or not?
// how to print object in browser?

let users =[{},{},{},{}]
let eids = []
if (users.length > 0){
    console.log("Not Empty")
}
else{
    console.log('Empty Array')
}

if (eids.length > 0){
    console.log("Not Empty")
}
else{
    console.log('Empty Array')
}

// object

let prod_data = {
    "product": [],
    "total": 30,
    "skip": true,
    "limit": "no limit"
}

if (prod_data.length > 0) {
     console.log("Not empty")} 
else {console.log("Empty Object")}