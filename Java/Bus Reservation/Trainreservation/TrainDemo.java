import java.util.ArrayList;
import java.util.Scanner;

public class TrainDemo {
    public static void main(String[] args) {

        ArrayList<Train> trains = new ArrayList<>();
        ArrayList<Booking> bookings = new ArrayList<>();

        // Add train
        trains.add(new Train(600028, 50, 10,40));

        System.out.println(
            "TrainNo : " + trains.get(0).getTrainNo() +
            " | Total Seats : " + trains.get(0).getTotalSeats() +
            " | Sleeper Seats : " + trains.get(0).getSleeper() +
            " | Normal Seats  : " + trains.get(0).getnormalSeats()
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
                    System.out.println();
                    showBookedPassenger(trainNo, bookings);
                } else {
                    System.out.println("Seats Not Available");
                }
            }
        }

        // sc.close();
    }
    public static void showBookedPassenger(int trainNo, ArrayList<Booking> bookings){
        int count =0;
        System.out.println("/n Passenger booked for TrainNo :" + trainNo);
        System.out.println("-----------------------------------------");
        for(Booking b: bookings){
            if(b.trainNo == trainNo){
                count  ++;
                System.out.println(count + ".  " + b.name );
            }
        }
        System.out.println("Total passenger booked : "+ count);
    }
}
