

// elseif(cond){
//     --
// }{
//     --
// }

// example- 1
let number = 0
if(number<0){
    console.log(number,"is negative number")
}
else if(number>0){
    console.log(number,"is positive number ")
}
else{
    console.log("The given number is zero ")
}

// // example -2
// avg = 87;
// 90-100; A Grade
// 80-89;  B Grade
// 70-79;  C Grade
// <70     D Grade

let avg = 55

if(avg >= 90 && avg<=100){
    console.log('A Grade')
}
else if(avg >=80 && avg<= 89){
    console.log('B Grade')
}
else if(avg >=70 && avg<= 79){
    console.log('C Grade')
}
else{
    console.log('D Grade')
}