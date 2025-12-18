import java.util.Scanner;

public class Booking {

    String name;
    int age;
    String gender;
    int bookseat;

    Booking(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your Name   :");
        name = sc.next();
        System.out.println("Enter your Age   :");
        age = sc.nextInt();
        System.out.println("Gender    :");
        gender = sc.next(); 
        System.out.println("book how many seats");
        bookseat = sc.nextInt();      
    }
}