// constructor is a special method used to initialize object value
// constructor method is executed automatically only once when a object creation
// no argument constructor
class Student{

    Student(){
        System.out.println("student class constructor");
    }
    public static void main(String[] args) {
        Student ob = new Student();
    }
}

class Student1{
    int rollno;
    String name;
    Student1(int rollno, String name){
        this.name = name;
        this.rollno = rollno;
        System.out.println("Student class paramaterized constructor");
    }
    public static void main(String[] args) {
        Student1 ob1 = new Student1(101, "Rahul");
        System.out.println(ob1.name);
    }
}