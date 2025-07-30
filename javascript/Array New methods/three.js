

let prices = [99,199,299,399,499];

// create a newprices with add +1
// expected output: [100,200,300,400,500]

let newprices = []

for(price of prices){
    newprices.push(price + 1);
}

console.log(newprices);
