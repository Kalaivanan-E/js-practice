let n = 11
for (let i = 0; i< n; i++){
    let row = ""
    for (let j =0; j< n; j++){
        if(i==0 || i==n-1 || j==0 || j==n-1 
        || j==Math.floor(n/2) || i==Math.floor(n/2) )
        {
            row = row+ "*"
        }
        else{
            row = row + " "
        }
        console.log(row)
    }
}
