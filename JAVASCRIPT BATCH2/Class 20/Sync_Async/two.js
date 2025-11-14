// asynchronous

setTimeout(() => {
    console.log("Request 1")
}, 5000);
setTimeout(() => {
    console.log("Request 2")
}, 1000);
setTimeout(() => {
    console.log("Request 3")
}, 4000);
setTimeout(() => {
    console.log("Request 4")
}, 3000);
