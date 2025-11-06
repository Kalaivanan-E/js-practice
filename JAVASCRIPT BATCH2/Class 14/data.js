// setTimeout() executes a function once
//  after a certain number of millisecond

/* setTimeout(() => {
  console.log("Hello after 3 seconds!");
}, 3000); */


setInterval(()=>{
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString()
},2000)