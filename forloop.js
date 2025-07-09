// Use for loop to print sum of first 10 numbers

let n=10;
let sum=0;
for (i=1; i<=n; i++){
    sum =sum + i;   
}

console.log("The sum of first", n, "numbers is:", sum);


// Print multiplication table of 5 up to 10
let num =5;
for(i=1; i<=10; i++){
    console.log(num, "X", i, "=", num * i);
}

let number =5;
for( i=1; i<=5; i++){
    for(j=1; j<=i; j++){
        console.log("* ");
    }
    console.log("\n");
}