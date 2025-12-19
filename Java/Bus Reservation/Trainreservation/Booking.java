import java.util.*;

public class Booking {

    String name;
    int age;
    String gender;
    String seats;
    int bookseat;
    int trainNo;

    // Constructor
    Booking(int trainNo) {
        Scanner sc = new Scanner(System.in);

        this.trainNo = trainNo;

        System.out.print("Enter your Name:");
        name = sc.next();

        System.out.print("Enter your Age:");
        age = sc.nextInt();

        System.out.print("Enter Gender:");
        gender = sc.next();

        System.out.print("Sleeper or Seater :");
        seats = sc.next();

       
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
