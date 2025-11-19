

let display = (()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=> res.json())
    .then((data)=>{
        if(data.length>0){
            console.log("it's not a empty array")
        }
        let users = data;
        let row = " ";
        for(let user of users){
             row = row + `<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.price}</td>
                        <td>${user.rating}</td>
                        </tr>` 
        }
        document.getElementById('tbody').innerHTML = row
    })
    .catch((err)=>{console.log(err)})

})