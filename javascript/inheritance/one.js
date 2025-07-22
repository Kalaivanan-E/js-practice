
  // parent class  | Base class

class Learner{
    constructor(name,age){
        this.name = name
        this.age = age
        

    }

     bio(){
        return `Hello My name is ${this.name}, I'm ${this.age} years old`
    }

    
}

// child class  | Sub class | Derived class

class Schoolstudent extends Learner{
    constructor(name, age, standard){
        super(name,age)
        this.standard = standard
    }


    bio(){
        // hello my name is Vijay, I'm 20 years old .studying 11th standard
        return super.bio() + ' .Studying ' + this.standard + ' standard'
    }


    intro(){
        return `Hello ${this.name},  He is studying ${this.standard} standard`
    }
}

class Collegestudent extends Learner{
    constructor(name, age, year) {
        super(name, age)
        this.year = year
        
    }
    intro(){
        return `Hello ${this.name},  He is studying ${this.year} year in college`
    }
}







// learner class
let learner1 = new Learner("vijay" , 20)
console.log(" Learner :", learner1.bio());

//schoolstudent class
let schstudent = new Schoolstudent("John" , 16, 10)
console.log("Schoolstudent :" ,  schstudent.bio());

// collegestudent class
let collegestudent = new Collegestudent("Ramesh", 21, 3)
console.log( " Collegestudent :" ,collegestudent.intro());


