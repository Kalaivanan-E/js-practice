import java.util.*;

public class TicketBooking {

    private static int berthLimit = 1;
    private static int racLimit = 1;
    private static int waitingLimit = 1;

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
       
        
        else if(checkAvailability(passenger)){
            char originalPreference = passenger.getPreference();
            if(passenger.getAge()>=60 || passenger.getGender() == 'F'){
            passenger.setPreference('L');
        }
            System.out.println("Ticket Confirmed \n your ticket number : " + passenger.getId());
            passenger.setTicketType("Berth");
            confirmedTicket.add(passenger);
        }
        else{
            System.out.println(passenger.getPreference() + " is not available currently ");
            passenger.setId(passenger.getId()-1);
            availableList();
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
    public static  boolean checkAvailability(Passenger passenger){
        if(passenger.getPreference()== 'U'){
            if(upperList.size() < berthLimit){
                passenger.setSeatNumber(upperSeatNumber);
                upperSeatNumber+=3;
            }
            upperList.add(passenger);
            return true; 
        } else if(passenger.getPreference() == 'M'){
            if(middleList.size() < berthLimit){
                passenger.setSeatNumber(middleSeatNumber);
                middleSeatNumber+=3;
            }
            middleList.add(passenger);
            return true; 
        }else{
            if(lowerList.size()< berthLimit){
                passenger.setSeatNumber(lowerSeatNumber);
                lowerSeatNumber +=3;
            }
            lowerList.add(passenger);
            return true;
        }
    }
    public static void availableList(){
        System.out.println("Check out the number of seat available");
        System.out.println("Upper berth " + (berthLimit-upperList.size()));
        System.out.println("Middle berth " + (berthLimit-middleList.size()));
        System.out.println("Lower berth " + (berthLimit-lowerList.size()));
    }
    public static void displayConfirmed(){
        System.out.println("************************************************************");
        for(Passenger passenger: confirmedTicket){
            System.out.println(passenger.toString());
        }
        System.out.println("************************************************************");
    }
    public static void displayRac(){
        System.out.println("************************************************************");
        for(Passenger passenger: racList){
            System.out.println(passenger.toString());
        }
        System.out.println("************************************************************");
    }
    public static void displayWaitList(){
        System.out.println("************************************************************");
        for(Passenger passenger: waitList){
            System.out.println(passenger.toString());
        }
        System.out.println("************************************************************");
    }
    
}
