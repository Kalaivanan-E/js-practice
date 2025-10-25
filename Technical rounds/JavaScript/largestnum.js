
/*
    Find the largest number in an array
 */

function largestNum(arr){  
    let largest = arr[0]               // assuming that first no in the is biggest
    for (let i =1; i< arr.length; i++){  // let start from second number (indexing 1)
        if(arr[i]> largest){
            largest = arr[i]
        }
    }
    return largest
}
arr= [100,120,130,140,150]
console.log(largestNum(arr))