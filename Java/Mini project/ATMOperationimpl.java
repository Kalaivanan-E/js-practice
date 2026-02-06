

public class ATMOperationimpl implements ATMOperation {
    ATM atm = new ATM();

    public void viewBalance(){
        System.out.println("Total amount in your account : " + atm.getBalance());
    }
    public void depositAmount(double amount){
        System.out.println("Deposited amount in your account : " + amount);
        atm.setBalance(atm.getBalance() + amount);
    }
    public void withdrawAmount(double amount){
        System.out.println("Withdraw amount in your account : " + amount);
        atm.setBalance(atm.getBalance()-amount);
    }
    
}

