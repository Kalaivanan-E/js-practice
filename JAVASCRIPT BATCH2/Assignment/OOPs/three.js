
let c1 = {
    name: "BMW",
    cost: 75.6,
    mileage: 8.9
};
console.log(c1.name)   // BMW
console.log(c1.cost)   // 75.6
console.log(c1.mileage) // 8.9
// console.log(c2.name)     c2 is not defined

c2 = c1;

console.log(c2.name)  // BMW
console.log(c2.cost)  // 75.6
console.log(c1.name)  // BMW