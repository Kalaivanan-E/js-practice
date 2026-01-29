

class Employee{
    private int empId;
    private String ename;
    private double esal;

    Employee(int id, String ename, double esal){
        this.empId = id;
        this.ename = ename;
        this.esal = esal;
    }

    public void setEmpId(int id){
        this.empId = id;
    }
    public int getEmpId(){
        return empId;
    }
    public String getEname(){
        return ename;
    }
    public double getEsal(){
        return esal;
    }
}

class Test{
    public static void main(String[] args) {
        Employee emp1 = new Employee(101, "Vijay", 50000);
        System.out.println(emp1.getEmpId());
        System.out.println(emp1.getEname());
        System.out.println(emp1.getEsal());
    }
}