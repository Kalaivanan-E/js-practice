

// let user1 ={
//     name: 'John',
//     age: 20,
//     login(){
//         console.log("Hi", this.name)
//         console.log("Your are logged in")
//     }
// }

// user1.login()

class User{
    constructor(name,age){
        this.name= name;
        this.age= age;
    }
    login(){
        console.log("Hi", this.name)
        console.log("your age is ", this.age)
        console.log("Your are logged in")
    }

}

let user3 = new User("ramesh", 20)
user3.login()