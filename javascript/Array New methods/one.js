

let eids =[101,102,103,104,105];


// eids.forEach((eids)=>{
//     console.log(eids)
// })

eids.map((eids)=>{
    console.log(eids)
})

// create a new array based on the existing array

let newEids = [...eids];

for(eid of eids){
    newEids.push(eid);
}

console.log(newEids);
