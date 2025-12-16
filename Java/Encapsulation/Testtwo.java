

class Vehicle{
    public void start(){}
}
class Bike extends Vehicle{
    public void start(){
        System.out.println("Bike started");
    }
}
class Test{
    public static void main(String[] args) {
        Bike b1 = new Bike();
        b1.start();
    }
}