
let ages = [32,15,19,12]


function checkage(x){
    if(x>18){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
let result = ages.filter(checkage)