
let car={"make":"Toyota","model":"corolla","year":2020,"color":"red"} //create an object
console.log(car);

let carmodel=car.model;
console.log("The model of the car is:",carmodel);

delete car.color;
console.log("After deleting color property:",car);//delete the color property

car.year=2022; //update the year
console.log ("After updating year property:",car);



