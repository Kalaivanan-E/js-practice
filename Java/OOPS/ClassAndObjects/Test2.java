

class Employee{
    
    int empId;
    String empName;
    static double salary;

    Employee(int id, String name, double salary){
        this.empId = id;
        this.empName = name;
        this.salary = salary;
    }

    public double calculatesalary(){        
        return salary = salary *12;
    }

    public static void main(String[] args) {
        Employee emp1 = new Employee(101, "Rahul", 10000);
        System.out.println("Emp1 yearly salary : " + emp1.calculatesalary());
    }

    

}