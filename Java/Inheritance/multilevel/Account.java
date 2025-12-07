public class Account extends Bank {
    String acc_Name;
    String acc_Email;
    public Account (String name, String email){
        this.acc_Name = name;
        this.acc_Email = email;
    }
    public void cal_bal(){
        System.out.println("Account Method");
    }
    
}
