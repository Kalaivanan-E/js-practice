
let user;
let display = ()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then((data)=>{
    let user = data
    let row = '';
    user.forEach((user)=>{
      row = row + `<tr>
                   <td>${user.id}</td>
                   <td>${user.name}</td>
                   <td>${user.email}</td>
                   <td>${user.address.city}</td>
                   </tr>`
    })
    document.getElementById("one").innerHTML = row
  })
  .catch((err) => {console.log("error fetching :",err)})
}