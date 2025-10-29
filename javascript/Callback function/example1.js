
function greet(name,callback){
    console.log("Hello"+name)
     callback()
}

greet("Kalai", ()=>{console.log("Welcome to Bengaluru")})  // Hellokalai // welcome to bengaluru