
// functions

let a =15, b=5;
function myfunctions(a,b=10){
    console.log(a*b)
}
myfunctions(a)


// Write a function that takes a number and prints if it's even or odd

function Number(n= 2){
    if(n%2==0){
        console.log("It is a Even number",n)
    }
    else{
        console.log("It is a Odd number",n)
    }
}

Number()

// Write a function that returns the square of a number

function square(num){
    console.log("square of ",num ,"is :" , num * num);
}

square(5)

