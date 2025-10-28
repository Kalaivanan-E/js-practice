
// the break statement ends of the loop where it appears and jumps out of it
// return statement comes out from the block 
// return should the last line for the function statement


/* let numbers = [10,20,33,40]

for ( let num of numbers){
    if(num %2 !==0){
        break
    }
    console.log("good morning");
    
    console.log(num)
}
 */
// return
calc()

function calc(){
    let number= [10,20,25,30,45]
    for (let nums of number){
        if (nums %2 !==0){
            //break
            return
        }
        console.log(nums)
    }

    console.log("Good Morning")
}

