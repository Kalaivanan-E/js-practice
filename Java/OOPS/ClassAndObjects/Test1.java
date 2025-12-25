
// class is template/blueprint, it contain variable, method, constructor
// object is instance of class, it is a real world entity which has state & behaviour, which can access class member
// constructor is a special method used to initialize object value. 
//      it will automatically run only once at the time of object creation. parameterized constructor, default constructor

class Test{
    int id;
    String name;
    double marks;

    Test(int id, String name, double marks){
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    void StudentDetails(){
        System.out.println("Student_Id:   " + id + " Student_Name:  " + name  +"  Marks : " + marks);
    }
    public static void main(String[] args) {
        Test student1 = new Test(101, "Rahul", 50);
        Test student2 = new Test(102, "Sonia", 55);
        Test student3 = new Test(103, "Priyanka", 70);
        student1.StudentDetails();
        student2.StudentDetails();
        student3.StudentDetails();
    }
}