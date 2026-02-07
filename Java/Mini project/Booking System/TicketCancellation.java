

public class TicketCancellation extends TicketBooking {
    private static char preferenceTracker ='\0';
    private static int cancelledSeat = 0;

    public static String cancelling(int id){
        for(Passenger passenger : confirmedTicket){
            if(passenger.getId() == id){
                cancel(passenger);
                return "success";
            }
        }
         for(Passenger passenger : racList){
            if(passenger.getId() == id){
                cancel(passenger);
                return "success";
            }
        }
         for(Passenger passenger : waitList){
            if(passenger.getId() == id){
                cancel(passenger);
                return "success";
            }
        }
        return "Invalid Id";
    }
    public static void cancel(Passenger passenger){
        if(passenger.getTicketType() == "berth"){
            preferenceTracker =  passenger.getPreference();
            cancelledSeat =  passenger.getSeatNumber();
            deleteFromAllList(passenger);
            addRacToBerth(racList.poll());
            addWaitingToRac(waitList.poll());
        }
    }
    public static void addRacToBerth(Passenger passenger){
        if(passenger!=null){
            passenger.setPreference(preferenceTracker);
            passenger.setSeatNumber(cancelledSeat);
            passenger.setTicketType("berth");
            if(preferenceTracker == 'U'){
                upperList.add(passenger);
            }else if(preferenceTracker == 'M'){
                middleList.add(passenger);
            }else{
                lowerList.add(passenger);
            }
            confirmedTicket.add(passenger);
            preferenceTracker = '\0';
            cancelledSeat =0;
        }
    }
    public static void addWaitingToRac(Passenger passenger){
        if(passenger !=null){
            passenger.setTicketType("Rac");
            racList.add(passenger);
        }
    }
    public static void deleteFromAllList(Passenger passenger){
        confirmedTicket.remove(passenger);
        upperList.remove(passenger);
        middleList.remove(passenger);
        lowerList.remove(passenger);
    }
    
}