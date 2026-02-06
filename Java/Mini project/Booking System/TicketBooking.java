import java.util.*;

public class TicketBooking {

    private static int berthLimit = 2;
    private static int racLimit = 2;
    private static int waitingLimit = 2;

    private static int upperSeatNumber = 1;
    private static int middleSeatNumber = 2;
    private static int lowerSeatNumber = 3;

    static List<Passenger> confirmedTicket = new ArrayList<>();
    static List<Passenger> upperList = new ArrayList<>();
    static List<Passenger> middleList = new ArrayList<>();
    static List<Passenger> lowerList = new ArrayList<>();

    static Queue<Passenger> racList  = new LinkedList<Passenger>();
    static Queue<Passenger> waitList = new LinkedList<Passenger>();

    public static void bookTicket(Passenger passenger){
        if(upperList.size()== berthLimit && middleList.size()== berthLimit && lowerList.size() == berthLimit){
            if(updateRacQueue(passenger)){
                System.out.println("Added to RAC \n Your ticket id : "+ passenger.getId() );
            }
            else if(updateWaitingQueue(passenger)){
                System.out.println("Added to a Waiting List \n Your ticket id : " + passenger.getId());
            }
            else{
                passenger.setId(passenger.getId()-1);
                System.out.println("No tickets available...");
            }
        }
        char originalPreference = passenger.getPreference();
        if(passenger.getAge()>=60 || passenger.getGender() == 'F'){
            passenger.setPreference('L');
        }
    }
    public static boolean updateWaitingQueue(Passenger passenger){
        if(waitList.size()<waitingLimit){
            passenger.setTicketType("Waiting");
            waitList.add(passenger);
            return true;
        }return false;
    }
    public static boolean updateRacQueue(Passenger passenger){
        if(racList.size()<racLimit){
            passenger.setTicketType("Rac");
            racList.add(passenger);
            return true;
        }return false;
    }
    
}
