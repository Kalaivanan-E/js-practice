

class SavingsAccount extends Account{
    SavingsAccount(int id, String name, double bal){
        super(id, name, bal);
    }

    public void withdrawMoney(double amount){
        if(balance - amount >= 1000){
            balance -= amount;
            System.out.println("Savings withdrawns : " + amount);
        }else{
            System.out.println("Minimum  balance of 1000 required");
        }
    }
}