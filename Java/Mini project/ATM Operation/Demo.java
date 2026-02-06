import java.util.Scanner;

class Main{
    public static void main(String[] args) {
        ATMOperation atmoperation = new ATMOperationimpl();
        int atmNum = 123;
        int atmpin = 123;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter you atm card number : ");
        int atmCardNumber = sc.nextInt();
        System.out.println("Enter you atm pin number : ");
        int atmCardpin = sc.nextInt();

        if(atmNum == atmCardNumber && atmpin == atmCardpin){
            System.out.println("you have successfully logged in....");
            while (true) {
                System.out.println(" 1.View Balance\n 2.DepositAmount\n 3.Withdraw Amount\n 4. View MiniStatement\n 5.Exist");
                System.out.println("Enter you choice :");
                int userInput = sc.nextInt();
                if(userInput == 1){
                    atmoperation.viewBalance();
                }
                else if(userInput == 2){
                    System.out.println("Enter the amount to be deposited : ");
                    double amount = sc.nextDouble();
                    atmoperation.depositAmount(amount);
                }
                else if(userInput == 3){
                    System.out.println("Enter the amount to be withdraw :");
                    double amount = sc.nextDouble();
                    atmoperation.withdrawAmount(amount);
                }
                else if(userInput == 4){
                    atmoperation.miniStatment();
                }
                else if(userInput == 5){
                    System.out.println("Thank you for using atm machine");
                    System.exit(0);
                }else{
                    System.out.println("please enter a valid option ....");
                }

            }
        }else{
            System.out.println("your atm card or pin is incorrect");
        }
    }
}