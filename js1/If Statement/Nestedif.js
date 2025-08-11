// Nested if
/* 
if(cond){
  if(cond){
  --
  }
}

min mark >=35
91-100 A
81-90 B
71-80 C
D */

let english =95,tamil = 98, maths = 75;
let total,avg;

total = english+ tamil + maths;

avg = total/3
console.log('total :'+ total)         // 268
console.log('Avg :'+ avg.toFixed(2))  // 89.33


if(avg >= 35){
    console.log("Result : Pass")
    if(avg>= 91 && avg<=100){
        console.log('A Grade')
    }
    if(avg>= 81 && avg<=90){
        console.log('B Grade')
    }
    if(avg>= 71 && avg<=80){
        console.log('C Grade')
    }
        
}
else{
    console.log("D Grade")
}


