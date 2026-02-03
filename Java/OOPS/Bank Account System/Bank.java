
interface Transaction{
    void depositAmount(double amount);
    void withdrawMoney(double amount);
}
class Account implements Transaction{
    int accId;
    String accHolderName;
    protected double balance;

    Account(int id, String name, double bal){
        this.accId = id;
        this.accHolderName = name;
        this.balance = bal;
    }
    public double getBalance(){
        return balance;
    }

    public void depositAmount(double amount){
        if(amount>0){
            balance = balance + amount;
            System.out.println("Deposited Amount : " + amount);

        }else{
            System.out.println("InValid amount");
        }
    }

    public void withdrawMoney(double amount){
        if(amount>0 && amount<=balance){
            balance = balance - amount;
            System.out.println("Withdraw amount : ");
        }else{
            System.out.println("Enter valid amount");
        }
    }
}

class Test{
    public static void main(String[] args) {
        Account user1 = new Account(1001, "Kalaivanan", 15000);
        user1.depositAmount(5000);
        System.out.println(user1.getBalance());
        SavingsAccount user2 = new SavingsAccount(1002, "Vijay", 15000);
        user2.withdrawMoney(1000);
        user2.getBalance();
    }
}