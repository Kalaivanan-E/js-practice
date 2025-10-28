
function wish(name){
    return name
    console.log(" GM")      // it is disabled because whatever we give after the return statement it won't print
}

let name = wish("Rahul")
console.log(name)

function login(unames,status){
    return unames, status      
}

let result = login("Rahul", true)
console.log(result)   // true     (because in javascript it return only one value)