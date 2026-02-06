import java.util.*;

public class ATMOperationimpl implements ATMOperation {
    ATM atm = new ATM();
    Map<Double, String>miniStatment = new HashMap<>();

    public void viewBalance(){
        System.out.println("Total amount in your account : " + atm.getBalance());
        System.out.println("==================================================");
    }

    public void depositAmount(double amount){
        miniStatment.put(amount, "Deposited");
        System.out.println("Deposited amount in your account : " + amount);
        System.out.println("==================================================");
        atm.setBalance(atm.getBalance() + amount);
    }

    public void withdrawAmount(double amount){
        if(amount<= atm.getBalance()){
            miniStatment.put(amount, "Withdraw");
            System.out.println("Withdraw amount in your account : " + amount);
        System.out.println("==================================================");
            atm.setBalance(atm.getBalance()-amount);
        } else{
            System.out.println("Insufficient Balance");
        }
    }

    public void miniStatment(){
        for(Map.Entry<Double, String> entry : miniStatment.entrySet()){
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }
    }
    
}

