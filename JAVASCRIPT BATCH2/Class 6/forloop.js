

// for loop 
for (let i =1; i<=5; i++){
    console.log(i);
}
// print numbers from 1 to 100

for (let i=1; i<=100; i++){
    console.log(i)
}
// print even numbers from 1 to 10

for (let i=0; i<=10; i++){
    if(i%2==0){
        console.log(i)
    }
}

for (i=0; i<20; i+=2){
    console.log(i)
}

// print 7th table using for loop

for (let i=1; i<=10; i++){
    console.log("7 *"+i+" =", 7*i)
}


// string literal

let eid = 101;
let ename = "John";

console.log("Employee ID:",eid,"Employee Name:",ename)   // old way

console.log(`Employee ID: ${eid} Employee Name: ${ename}`)  // new way using backtick
