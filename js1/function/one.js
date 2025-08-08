
var x = 1;

a()  // 10
b()  // 100
num1(10,20)  // 30

console.log(x)  //1

function a(){
    var x = 10
    console.log(x)
}

function b(){
    var x=100
    console.log(x);
    
}


function num1(a,b){
    console.log(a+b);
}

 
num1(10,20,30)   // 30
  
num1(100)   //NaN

num1(100,'Rahul')  //100Rahul

// function with parameter default value

function num2(x,y,z=1){
    console.log(x+y+z);
    
}

num2(10,20)  // 31