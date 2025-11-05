
function wish(){
    console.log("good morning")
}
wish()

function wish(){
    console.log("Good night")
}
wish()

// Good night
// Good night  becasue function hoisting is happens so function will over write, so can write fat arrow function


// fat arrow function

var wish1 = ()=>{ console.log("good morning")}
wish1()   // good morning
var wish1 = ()=>{ console.log("Good night")}
wish1()  // good night
