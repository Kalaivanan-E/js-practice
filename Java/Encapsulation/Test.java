
class BankAccount{
    private int accountNo;
    private double balance;

    public BankAccount(int accountNo, double balance){
        this.accountNo = accountNo;
        this.balance = balance;
    }
    public void deposit(double amount){
        if(amount> 0){
            balance = balance + amount;
            System.out.println("Deposited"+ amount);
        }else{
            System.out.println("Invalid deposit amount");
        }
    }
    public void withdraw(double amount){
        if(amount>0 && amount <= balance){
            balance = balance-amount;
            System.out.println("Withdrawn : "+ amount);
        }else{
            System.out.println("Insufficient balance");
        }
    }
    public double getBal(){
        return balance;
    }
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1001, 1000);
        account.deposit(1000);
        account.withdraw(500);
        System.out.println("Current Balance : "+ account.getBal());
    }
}
