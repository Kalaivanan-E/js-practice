

console.log("hello world")

// global object

setTimeout(() => {
    console.log("This is a settimeout function")
    clearInterval(intfuc)
}, 2000);

const intfuc= setInterval(()=>{
    console.log("This is a interval function")
},1000)

console.log(__dirname)
console.log(__filename)