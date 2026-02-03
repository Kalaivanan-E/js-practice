

class Payment{
    void pay(){
        System.out.println("payment is processing........");
    }
}
class UPI extends Payment{
    void pay(){
        System.out.println("Payment is done my using UPI");
    }
}
class Card extends Payment{
    void pay(){
        System.out.println("Payment is done my using Card");
    }
}
class Test{
    public static void main(String[] args) {
        Payment p1 = new Payment();
        p1.pay();
        Payment p2 = new UPI();
        p2.pay();
        Payment p3 = new Card();
        p3.pay();
    }
}