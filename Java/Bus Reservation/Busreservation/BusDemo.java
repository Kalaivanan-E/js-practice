import java.util.Scanner;
import java.util.ArrayList;

public class BusDemo {
    public static void main(String[] args) {
        ArrayList <Bus> Buses = new ArrayList<Bus>();
        ArrayList <Booking> bookings = new ArrayList<Booking>();
        Buses.add(new Bus(1, true, 2));
        Buses.add(new Bus(2, false, 50));
        Buses.add(new Bus(3, false, 48));

        for(Bus b: Buses){
            b.displayBusInfo();
        }

        int userOpt = 1;
        Scanner scanner = new Scanner(System.in);
        while(userOpt == 1){
        System.out.println("Enter 1 to Book and 2 to exist");
        userOpt = scanner.nextInt();
        if(userOpt == 1){
            Booking booking = new Booking();
            if(booking.isAvailable(bookings,Buses)){
                bookings.add(booking);
                System.out.println("your booking is confirmed");
            }else{
                System.out.println("Sorry. Bus is full. Try another bus or date");
            }
        }
        }
    }
}
