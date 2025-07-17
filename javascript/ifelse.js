//if else statement example

let num=10;
if(num>=100){
    console.log("Big number");
}
else{
    console.log("small number");
    }

// to check if num is even or odd

if(num%2==0){
    console.log("The given number is even.");
    }
    else{
        console.log("The given  number is odd.");
    }

//Print grade based on marks:
// 90+ = A, 80–89 = B, 70–79 = C, below 70 = Fail
 let studmarks =85;
if(studmarks>=90){
    console.log("Grade A");
}
else if(studmarks>=80 && studmarks<90){
    console.log("Grade B");
}
else if(studmarks>=70 && studmarks<80){
    console.log("Grade c");
}
else if(studmarks<=60 && studmarks<70){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}

// Write code to find the largest number
// to find the largest number
let a = 25, b = 58, c = 41;
if (a> b && a > c){
    console.log("The largest number is:",a);
}
else if(a <b && b> c){
    console.log("The largest number is:",b);
}
else{
    console.log ('The largest number is:',c);
}
