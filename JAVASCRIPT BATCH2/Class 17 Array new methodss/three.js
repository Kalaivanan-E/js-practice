// write a program to print all even number in the array
let numbers = [11,7,8,223,1055,41,8,12]

// without filter method
let even_no = []
for (let num of numbers){
    if(num %2 === 0){
        even_no.push(num)
    }
}
console.log(even_no)