
// use map() to return the square of each number

let number = [2,4,6,8]
let square_num = number.map((num)=> num*num)
console.log(square_num)  // [4,6,36,64]

// use filter() to get only even number

let nums = [11,22,33,44,55]
let even_num = nums.filter((num)=> num%2 == 0)
console.log(even_num)   // [22,44]

// use find() to get the first number greater than 50

let arr = [10,80,60,25,80,32]
let find_num = arr.find((ar)=> ar> 50)
console.log(find_num)  // 80

// use template literals to print

let name = 'kalai';
let Studying = "I am learning Javascript"
console.log(`My name is ${name} and ${Studying}`)

// Remove duplicates from an array using Es6

let items = [1,2,2,3,4,4,5]
let remove_dupli = [... new Set(items)]
console.log(remove_dupli)

// sort an array of object by age

const people = [{name: "A", age: 25},
    {name: "B",age:20},
    {name: "C",age:30}
]
let sort_age = people.sort((a,b)=> a.age - b.age)
console.log(sort_age)

// Merge two array using spread operator

const a = [1,2]
const b = [3,4];
const c = [...a, ...b]
console.log(c)  // [1,2,3,4]

// use reduce() to find the total price

let cart = [
    {item: "Pen",price: 10},
    {item: "Book", price: 40},
    {item: "Bag", price: 200}
]
let tot_price = cart.reduce((acc, curr)=>acc + curr.price)
console.log(tot_price)