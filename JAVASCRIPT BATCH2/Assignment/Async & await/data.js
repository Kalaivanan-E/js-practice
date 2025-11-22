

let display = (()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=> res.json())
    .then((data)=>{
        // let user = data;
        let row = " ";
        data.products.forEach((user) => {
            row = row + `<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.price}</td>
                        <td>${user.rating}</td>
                        </tr>`            
        });
        document.getElementById('tbody').innerHTML = row
    })
    .catch((err)=>{console.log(err)})

})