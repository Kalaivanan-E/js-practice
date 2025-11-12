// swap two number
 let a = 10;
 let b = 20;
 a = a + b;  // 10+20 = 30
 b = a-b;    // 30-20 = 10
 a = a-b;    // 30-10 = 20
 console.log(a) //20
 console.log(b) //10

// with using Array destructuring 
 let a = 100;
 let b = 200;
 [a,b] = [b,a]  
 console.log(a)
 console.log(b)