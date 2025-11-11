// write a program to print all even number in the array
let numbers = [11,7,8,223,1055,41,8,12]

// with filter methods

let even_no = numbers.filter((num)=>{
    return num%2 === 0
})
console.log(even_no) // 8,8,12