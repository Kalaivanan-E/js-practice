
// OOP
// object is collection of key value pair as one entity
let car = {
    brand: "Toyota",
    color: "Red",
    start : function (){
        console.log("Car Started")
    },
    stop: function(){
        console.log("Car stoped")
    }
};

console.log(car.brand)  // Toyota
car.start()      // car started
car.stop()       // car stoped