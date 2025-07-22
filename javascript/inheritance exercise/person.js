

class Person{
    constructor(name, age ){
        this.name = name
        this.age = age
    }
    introduce(){
        return `Hi,I'm ${this.name} and I'm ${this.age} years old`
    }
}

class Student extends Person{
    constructor(name,age,grade){
        super()
        this.grade =  grade
    }

    study(){
        return `studying ${this.grade}`
    }
}

let person1 = new Person("kalai", 20)
console.log(person1.introduce());

let person2 = new Student("kalai", 20 , "BCA")
console.log(person2.study())
