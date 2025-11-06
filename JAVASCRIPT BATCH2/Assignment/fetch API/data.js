

let display = ()=>{

    // console.log("good morning")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data)=>{
        // console.log("data fetching successfully")
        let row = '';
        data.forEach((user)=>{
            row = row +  `
                          <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.address.city}</td>
                          </tr> `;
        
      });

      document.getElementById('one').innerHTML = row

    })
    .catch((err)=>{console.log("error fetching data:",err)})
}

 