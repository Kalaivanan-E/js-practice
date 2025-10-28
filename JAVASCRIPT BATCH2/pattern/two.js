/* 
*****
*   *
*   *
*   *
*****
how to print the above pattern */

for (let i =1; i<=5; i++){
    row = " "
    for(let j=1; j<=5; j++){
       if(i==1 || i==5 || j==1 || j==5){
        row = row +"*"
       }
       else{
        row = row + " "
       }
    }
    console.log(row)
}
