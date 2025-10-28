/* 
 *function is reusable code to perform a specific task.
 *Function are created using function keywords.
  */

 function login(){
    console.log("login created successfully");
 }
 login()

 function addition(){
    console.log('Addition');
 }

 addition()      // addition
 addition(10,20) // addition

function add (a,b){     // (a,b) --> parameter
    console.log(a+b);
}
add(10,20)  // 30   (10,20) --> Arguments
add(1,2)   // 3
add(1)    // NaN
add("Rahul") // Rahulundefined
