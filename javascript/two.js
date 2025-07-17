// Print only even numbers using for...of
let Numbers = [1, 4, 7, 8, 12, 15];
for(num of Numbers){
    if(num%2===0){
        console.log(num);
    }
}