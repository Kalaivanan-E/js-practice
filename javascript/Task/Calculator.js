
class Calculator{
    add(a,b){
        return a+b;
    }
    sub(a,b){
        return a-b;
    }
    multi(a,b){
        return a*b;
    }
    div(a,b){
        return b !==0 ? a/b : "cannot divide by zero"
    }
}

let calc = new Calculator();

console.log(calc.add(3,4))   // 7
console.log(calc.div(3,0))   // Cannot divide by zero
