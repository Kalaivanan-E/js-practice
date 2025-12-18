import java.util.Scanner;
import java.util.*;

public class Booking {

    String name;
    int age;
    String gender;
    int bookseat;

    Booking(int trainNo){
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
    public boolean isAvailable(ArrayList<Train> trains){
        int totalSeats = 0;
        for(Train train: trains){
            if(train.getTrainNo() == trainNo){
                totalSeats = train.getTotalSeats();
                break;
            }
        }
        int booked =0;
        for(Booking b : bookings){
            if(b.trainNo == trainNo){
                booked++;
            }
        }
        return booked<totalSeats?true:false;
    }
}