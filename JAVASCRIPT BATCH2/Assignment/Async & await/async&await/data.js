
async function display(){
     await fetch("https://dummyjson.com/products")
    .then((res)=>{return res.json()})
    .then((data)=>{
        let row = '';
        data.products.forEach((user)=>{
            row = row + `
                        <tr>
                        <td>${user.id}</td>
                        <td>${user.title}</td>
                        <td>${user.price}</td>
                        <td>${user.rating}</td>
                        </tr>`
        })
        document.getElementById("tbody").innerHTML = row
    })
    
}