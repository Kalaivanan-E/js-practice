
class Student{
    int studentId = 101;
    String name = "Kalaivanan";

    void display(){
        System.out.println("Student Id :" + studentId + "StudentName : "+ name);
    }
    public static void main(String[] args) {
        Student sa1 = new Student();
        sa1.display();
    }
}   

// Object Array

class Employee{
    int id;
    String name;
    double salary;

    Employee(int id, String name, double salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    
    void display(){
        System.out.println("Id :" + id + " Name : " + name + " salary : "+ salary );
    }
    public static void main(String[] args) {
        Employee[] emp = new Employee[5];
        
        emp[0] = new Employee(101, "kalai", 50000);
        emp[1] = new Employee(102, "Ajith", 60000);
        emp[2] = new Employee(103, "Vijay", 80000);
        emp[3] = new Employee(104, "siva", 90000);
        emp[4] = new Employee(105, "rahul", 100000);

        for(Employee em: emp){
            em.display();
        }
    }
}