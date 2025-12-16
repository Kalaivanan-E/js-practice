

class Student{
    int id;
    String name;
    Student(int id, String name){
        this.id = id;
        this.name = name;
    }
    public void Student_Details(){
        System.out.println("Student Id : " + id);
        System.out.println("Student Name :"+ name);
    }
    public static void main(String[] args) {
        Student sa1 = new Student(101, "Kalaivanan");
        sa1.Student_Details();
    }
}