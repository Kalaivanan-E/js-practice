
// Abstraction = hides the implementation and show functionality
interface Payment{
    void pay(double amount);
}
// inheritance = inheriting the properties from parent class to child class
class UPI implements Payment{

    public void pay(double amount){
        System.out.println("paid  " + amount + " Using UPI");
    }
}
class Card implements Payment{
    public void pay(double amount){
        System.out.println("Paid "+ amount + "Using Card");
    }
}
// Encapsulation = bind data and methods in single unit class and 
class Customer{
    private String name;

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
}
// Polymorphism = same method, different behaviour
class Test{
    public static void main(String[] args) {
        Payment pay1 = new UPI();
        pay1.pay(1000);
        Payment pay2 = new Card();
        pay2.pay(2000);
    }
}