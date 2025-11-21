
let s_marks = [50,45,60,75,80,100,1000]
let output = [];

for(let marks of s_marks){
    if(marks < 50){
       output += ' fail,'
    }else if(marks >= 50 && marks<75){
        output += ' pass,'
    }else if(marks >=75 &&marks<=99){
        output += ' good,'
    }else if(marks == 100){
        output += ' full,'
    }
    else{
        output += 'invalid '
    }
}
console.log(output)