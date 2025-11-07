
let display = ()=>{

    fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then((data)=>{
        let row = '';
        console.log("good night")
        data.products.forEach((product)=>{
        console.log("good night")

            row = row +`<tr>
                         <td>${product.id}</td>
                        <td>${product.title}</td>
                        <td>${product.catagory}</td>
                        <td>${product.price}</td>
                   <    /tr>`
        })
        document.getElementById('one').innerHTML = row
    })
    .catch((err)=>{console.log("error fetching data:",err)})
}