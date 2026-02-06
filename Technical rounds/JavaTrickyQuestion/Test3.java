import java.util.Scanner;

class Question1{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = "Stay Safe";
        String s2 =  sc.nextLine(); // i'll enter "Stay safe"
        System.out.println(s1 == s2); // then we'll get false only bcz s2 will runtime to it will store in heap memory
    }
}

abstract class parent{
    abstract void printMessage();
}
class child extends parent{
    public void printMessage(){
        System.out.println("Happy Friday ");
    }
    public static void main(String[] args) {
        parent pp = new parent();
    }
} 