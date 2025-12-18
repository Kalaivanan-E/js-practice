import java.util.*;

public class Booking {

    String name;
    int age;
    String gender;
    int bookseat;
    int trainNo;

    // Constructor
    Booking(int trainNo) {
        Scanner sc = new Scanner(System.in);

        this.trainNo = trainNo;

        System.out.println("Enter your Name:");
        name = sc.next();

        System.out.println("Enter your Age:");
        age = sc.nextInt();

        System.out.println("Enter Gender:");
        gender = sc.next();

        while(true){
           System.out.println("Book how many seats:");
           bookseat = sc.nextInt(); 
           if(bookseat >0 && bookseat <=2){
                break;
           } else{
                System.out.println("You can book only 1 or 2 seats");
           }
        }
       
    }

    // Check seat availability
    public boolean isAvailable(
            ArrayList<Train> trains,
            ArrayList<Booking> bookings) {

        int totalSeats = 0;

        // Get total seats of selected train
        for (Train train : trains) {
            if (train.getTrainNo() == trainNo) {
                totalSeats = train.getTotalSeats();
                break;
            }
        }

        int bookedSeats = 0;

        // Count already booked seats
        for (Booking b : bookings) {
            if (b.trainNo == trainNo) {
                bookedSeats += b.bookseat;
            }
        }

        // Check availability
        return bookedSeats + bookseat <= totalSeats;
    }
}
