import java.util.ArrayList;
import java.util.Scanner;

public class TrainDemo {
    public static void main(String[] args) {
        
        ArrayList <Train> trains = new ArrayList<Train>();
        ArrayList <Booking> bookings = new ArrayList<>();
        trains.add(new Train(600028, 20, 10));

        System.out.print("TrainNo  :"+trains.get(0).getTrainNo());
        System.out.print("  TotalSeats  :" + trains.get(0).getTotalSeats());
        System.out.println("  Sleeper seats :" + trains.get(0).getSleeper());

        int useropt = 1;
        Scanner sc = new Scanner(System.in);
        while(useropt == 1){
            System.out.print("Enter 1 to book and 2 to exist   :");
            useropt = sc.nextInt();
            if(useropt ==1){
                Booking booking = new Booking(trainNo);
                if(booking.isAvailable(trains,bookings)){
                    bookings.add(booking);
                    System.out.println("Your booking is confirmed");
                }else{
                    System.out.println("Seats Not Available");
                }
            }
        }
    }
}
