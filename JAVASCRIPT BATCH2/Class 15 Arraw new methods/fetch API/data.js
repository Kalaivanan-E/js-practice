function display(){
fetch("https://dummyjson.com/users")
.then(response => response.json())
.then((data)=>{
    let row = '';
    data.forEach((user)=>{
        row = row +  `<tr>
                      <td>${user.id}</td> 
                      <td>${user.name}</td> 
                      <td>${user.email}</td> 
                       </tr>`
    })
    document.getElementById("tbody").innerHTML = row
})
.catch((err)=> {console.log("Error fetching data:",err)})
}