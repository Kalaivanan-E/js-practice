

class Account{
    double balance;
    void deposit(double amount){
        balance = balance + amount;
        System.out.println("Deposited: " + amount);
    }
    void showBalance(){
        System.out.println("Current Balance: "+ balance);
    }
}

class Saving_Account extends Account{
    void addInterest(){
        double interest = balance * 0.05;
        balance = balance + interest;
        System.out.println("Interest Added: "+ interest);
    }
}

class CurrentAccount extends Account {
    void withdraw(double amount){
        if(amount <= balance){
            balance = balance-amount;
            System.out.println("Withdrawn: " + amount);
        } else{
            System.out.println("Insufficient Balance");
        }
    }
}

class BankDemo{
    public static void main(String[] args) {
        
    }
}