
// var --> function scoped, redeclared, updated
// let --> Block scoped, can't redeclared , updated
// const --> Block scoped, can't redeclared, can't updated

if(true){
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(a);  // 10
// console.log(b);  // reference error we can't access the block scope
// console.log(c);  // reference error we can't access the block scope