

var chococlate = 'Five star';

function changechocolate() {
     var chococlate = 'Dairy Milk';
     console.log('Local'+ chococlate)
}

console.log('Global' + chococlate);

changechocolate();



let movieName = 'Jailer'  // Global scope

function changemovieName(){
    let movieName = 'leo';   // function scope
    console.log('local '+ movieName);
}

console.log('Global' + movieName);
changemovieName();


let favmovie = 'Good Night'; // Global scope

favmovie = ' Tourist family'; 

const favactor = 'ajith';

// favactor = 'vijay'// This will throw an error because const cannot be reassigned

console.log("My favourite actor is "+ favactor);


console.log(' My favourite movie is '+ favmovie);