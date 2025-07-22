
class Schoolstudent{
    constructor(name,age,standard){
        this.name = name
        this.age = age
        this.standard = standard
    }

    bio(){
        return `Hello my name is ${this.name} and I'm ${this.age} years old`
    }

    intro(){
        return `Hello ${this.name}, I'm studying ${this.standard}`
    }


}

let student = new Schoolstudent("Kalai", 19, 12)
console.log(student.bio());



class Collegestudent{
    constructor(name,age,Department){
        this.name = name
        this.age = age
        this.Department = Department
    }

    bio(){
        return `hello my name is ${this.name} and I'm ${this.age} years old`
    }

    
}

