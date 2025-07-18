// 8)Write a program to print the greatest number in given three numbers?

let a=10
let b=23
let c=9

if(a>=b && a>=c){
    console.log("The greatest number is :" ,a)
}
else if(b>=a && b>=c){
    console.log("The greatest number is :" ,b)
}
else{
    console.log("The greatest number is :" ,c)
}

// 9) Write a program to print the least number in given three numbers?

if(a<=b && a<=c){
    console.log("The least number is :", a)
}
else if(b<=a && b<=c){
    console.log("The least number is :",b)
}
else{
    console.log("The least number is :",c)
}

// 10) Write a program to print the given 3 numbers in ascending orders?


function sortThreeNumbers(a, b, c) {
  let first, second, third;

  if (a <= b && a <= c) {
    first = a;
    if (b <= c) {
      second = b;
      third = c;
    } else {
      second = c;
      third = b;
    }
  } else if (b <= a && b <= c) {
    first = b;
    if (a <= c) {
      second = a;
      third = c;
    } else {
      second = c;
      third = a;
    }
  } else {
    first = c;
    if (a <= b) {
      second = a;
      third = b;
    } else {
      second = b;
      third = a;
    }
  }

  console.log("Ascending Order:", first, second, third);
}

// Example usage:
sortThreeNumbers(25, 7, 14);

// 11) Write a program to print the given 3 numbers in descending orders?

function sortDescending(a, b, c) {
  let first, second, third;

  if (a >= b && a >= c) {
    first = a;
    if (b >= c) {
      second = b;
      third = c;
    } else {
      second = c;
      third = b;
    }
  } else if (b >= a && b >= c) {
    first = b;
    if (a >= c) {
      second = a;
      third = c;
    } else {
      second = c;
      third = a;
    }
  } else {
    first = c;
    if (a >= b) {
      second = a;
      third = b;
    } else {
      second = b;
      third = a;
    }
  }

  console.log("Descending Order:", first, second, third);
}

// Example usage:
sortDescending(10, 25, 15);
