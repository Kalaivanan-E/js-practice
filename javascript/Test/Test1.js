
// Input : prostack
// Output : PrOsTaCk

let s = "kala ivanan"
let p = s.split(' ')
p = p.join('')
let s_two = "";
for(let i =0; i<p.length; i++){
    if(i%2 == 0){
        s_two = s_two + p[i].toLocaleUpperCase()
    }else{
        s_two = s_two + p[i].toLocaleLowerCase()
    }
}
console.log(s_two)

// Input : prostack
// output : PRosTAck

let a = "kala ivana"
let b = a.split(' ')
b = b.join('')
let two = "";
for(let i =0; i<b.length; i++){
    if(Math.floor(i/2)%2 == 0){
        two = two + b[i].toLocaleUpperCase()
    }else{
        two = two + b[i].toLocaleLowerCase()
    }
}
console.log(two)


