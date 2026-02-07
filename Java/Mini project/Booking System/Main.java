import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        boolean loop = true;
      while (loop) {
        System.out.println("Enter your Choice \n 1. Book Ticket \n 2. Cancel Ticket \n 3. Display ConfirmList \n 4. Display RacList \n 5. Display WaitingList \n 6. Exist....");
        Scanner sc = new Scanner(System.in);
        int Choice = sc.nextInt();
        switch(Choice){
            case 1 :{
                System.out.println("Enter your name : ");
                String name = sc.next();
                System.out.println("Enter your age :");
                int age = sc.nextInt();
                System.out.println("Enter you Gender :");
                char gender = sc.next().charAt(0);
                System.out.println("Enter your preference : ");
                char preference = sc.next().charAt(0);
                if(preference == 'U' || preference == 'M' || preference == 'L'){
                    TicketBooking.bookTicket(new Passenger(name, age, gender, preference));
                }else{
                    System.out.println("you have entered the invalid berth preference : ");
                }
                break;
            }
            case 2:{
                System.out.println("Enter the Id to cancel : ");
                int id = sc.nextInt();
                System.out.println(TicketCancellation.cancelling(id));
                break;
            }
            case 3:{
                TicketBooking.displayConfirmed();
                break;
            }
            case 4:{
                TicketBooking.displayRac();
                break;
            }
            case 5:{
                TicketBooking.displayWaitList();
                break;
            }
            case 6:{
                System.out.println("Thank you");
                sc.close();
                loop = false;
                break;
            }
        }
      }
    }
}