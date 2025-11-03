
function display1(){
    document.getElementById('one').style.backgroundColor = "lightblue"
    document.getElementById('onmouseover').innerText="Mouse over to change button background color"
}

function display2(){
    document.getElementById('two').style.backgroundColor = "lightblue"
    document.getElementById('onmouseout').innerText="Mouse over to change button background color"
} 
function display3(){
    document.getElementById("three").style.backgroundColor = "lightblue"
    document.getElementById("onclick").innerText = "Click to change button background color"
}
function display4(){
    document.getElementById("four").style.backgroundColor = "lightblue"
    document.getElementById("ondblclick").innerText = "Double Click to change button background color"
}
function display5(){
    document.getElementById("five").style.backgroundColor = "lightblue"
    document.getElementById("Onfocus").innerText = "Click to change input background color"
}
function display6(){
    let input = document.getElementById("six")
     input.value = input.value.toUpperCase()
    
}

function password(){
    let enteredtext= document.getElementsByClassName("login").value
    let pass = "password"
   if(enteredtext == pass){
    alert('login succues')
   }
   else{
    alert('Incorrect Password')
   }
}
