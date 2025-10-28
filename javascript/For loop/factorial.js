// Write a function to calculate the factorial of a number


 function factorial(n){
    let i=1;
    let result =1;
    while(i<=n){
        result*=i;
        i++;
    }
    return result;
}
let num= 5;
 console.log(factorial(num))
 

