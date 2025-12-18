import java.util.ArrayList;
import java.util.Scanner;

public class TrainDemo {
    public static void main(String[] args) {

        ArrayList<Train> trains = new ArrayList<>();
        ArrayList<Booking> bookings = new ArrayList<>();

        // Add train
        trains.add(new Train(600028, 3, 10));

        System.out.println(
            "TrainNo : " + trains.get(0).getTrainNo() +
            " | Total Seats : " + trains.get(0).getTotalSeats() +
            " | Sleeper Seats : " + trains.get(0).getSleeper()
        );

        Scanner sc = new Scanner(System.in);
        int useropt = 1;

        while (useropt == 1) {

            System.out.print("\nEnter 1 to Book | 2 to Exit : ");
            useropt = sc.nextInt();

            if (useropt == 1) {

                System.out.print("Enter Train Number : ");
                int trainNo = sc.nextInt();

                Booking booking = new Booking(trainNo);

                if (booking.isAvailable(trains, bookings)) {
                    bookings.add(booking);
                    System.out.println("Booking Confirmed");
                } else {
                    System.out.println("Seats Not Available");
                }
            }
        }

        sc.close();
    }
}
