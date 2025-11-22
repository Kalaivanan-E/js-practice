
let cars=[
 { "brand": "Maruti Suzuki", "model": "Swift", "price": 650000, "color": "Red" },
 { "brand": "Maruti Suzuki", "model": "Baleno", "price": 800000, "color": "Blue" },
 { "brand": "Hyundai", "model": "i20", "price": 900000, "color": "White" },
 { "brand": "Hyundai", "model": "Venue", "price": 1100000, "color": "Black" },
 { "brand": "Tata", "model": "Nexon", "price": 1200000, "color": "Grey" },
 { "brand": "Tata", "model": "Punch", "price": 700000, "color": "Orange" },
 { "brand": "Mahindra", "model": "XUV300", "price": 1300000, "color": "Silver" },
 { "brand": "Mahindra", "model": "Thar", "price": 1600000, "color": "Black" },
 { "brand": "Honda", "model": "Amaze", "price": 850000, "color": "White" },
 { "brand": "Honda", "model": "City", "price": 1400000, "color": "Red" },
 { "brand": "Toyota", "model": "Glanza", "price": 900000, "color": "Blue" },
 { "brand": "Toyota", "model": "Innova Crysta", "price": 2200000, "color": "Silver" },
 { "brand": "Kia", "model": "Seltos", "price": 1500000, "color": "Black" },
 { "brand": "Kia", "model": "Sonet", "price": 1100000, "color": "Grey" },
 { "brand": "Renault", "model": "Kwid", "price": 550000, "color": "Yellow" },
 { "brand": "Renault", "model": "Triber", "price": 800000, "color": "White" },
 { "brand": "Skoda", "model": "Slavia", "price": 1400000, "color": "Blue" },
 { "brand": "Volkswagen", "model": "Virtus", "price": 1500000, "color": "Red" },
 { "brand": "MG", "model": "Hector", "price": 1800000, "color": "White" },
 { "brand": "Nissan", "model": "Magnite", "price": 900000, "color": "Silver" }
]


// 1) Use map() to extract only the car models.

let car_models = cars.map((car)=>{
    console.log(car.model)
})

// 2)Use filter() to get cars priced below 10 lakhs.

let price = cars.filter((car)=>{
    if(car.price <= 1000000){
        console.log(car)
    }
})

//3. Use reduce() to calculate the total price of all cars.

let total_price = cars.reduce((a, c) => a + c.price,0)
console.log(total_price)

//4. Use arrow functions to return all car brands in uppercase.

let uppercase = cars.map((car)=>{
    console.log(car.brand.toLocaleUpperCase())
})

// 5. Use object destructuring to extract brand and model from the first car.

let {brand, model} = cars[0]
console.log(model);
console.log(brand);

//6. Use array destructuring to extract the first 3 cars into separate variables.

let [c1,c2,c3] = [cars[0],cars[1],cars[2]]
console.log(c1);
console.log(c2);
console.log(c3);

//7. Create a new array using the spread operator that adds a new car to the existing list.

let new_car = [...cars, 'BMW']
console.log(new_car)

//8. Use find() to get the first car with the color 'Black'.

let black_car = cars.find((car)=>{ return car.color == "Black"})
console.log(black_car)

//9. Use some() to check if any car costs more than 20 lakhs.

let isExpensive = cars.some((car)=>{
    return car.price > 2000000
})
console.log(isExpensive);

// 10. Use every() to check if all cars have a price more than 5 lakhs.

let price_check = cars.every((car)=> car.price > 500000)
console.log(price_check)

//11. Sort the cars by price using ES6 arrow function.

let sort_price = cars.sort((a,b)=> a.price - b.price)
console.log(sort_price)

// 13. Use template literals to print 'Model costs '.

let car_model = cars.map((car)=>{
    console.log(`Model : ${car.model}, price : ${car.price}`)
})
// 14. Create a function with default parameters to apply 10% discount if no discount value is passed.

let discount_price = cars.map((car)=>{
    let discount = 10;
    return car.price - (car.price *discount)/100
})
console.log(discount_price)

//16. Create a new array of cars using map() that adds a new key onRoadPrice = price + 50000.

let onroadprice = cars.map((car)=>{
    let onRoadPrice = car.price + 50000
    return onRoadPrice
})
console.log(onroadprice)

// 17. Use filter() + map() to get model names of all red-colored cars.

let redcolorcar = cars.filter(car => car.color == 'Red')
                  cars.map(car =>car.model);
console.log(redcolorcar)
