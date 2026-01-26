

class Bank{
    private int accId;
    private String accHolderName;
    private double balance;

    Bank(int id, String name, double balance){
        this.accId = id;
        this.accHolderName = name;
        this.balance = balance;
    }

    public double getBalance(){
        return balance;
    }

    public void deposit(double amount){
        if(amount >0){
            balance = balance + amount;
            System.out.println("deposited amount : "+ amount);
            System.out.println("current balance : " + balance);
        }else System.out.println("amount must be positive");
    }
    public void withdraw(double amount){
        if(amount >0 && amount <= balance){
            balance = balance - amount;
            System.out.println("withdraw amount : " + amount);
            System.out.println("current balance : "+balance);
        }else System.out.println("insufficient balance");
    }
}
public class Test {
    public static void main(String[] args) {
        Bank acc1 = new Bank(101, "Kalai", 1000);
        acc1.deposit(1000);
        acc1.withdraw(500);
    }
}